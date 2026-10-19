# Production Deployment Guide: GitHub Actions, GHCR & CapRover

This document details the automated continuous integration and continuous deployment (CI/CD) pipeline for **Cancer Care Association Sri Lanka** ([`cancercaresl.org`](https://cancercaresl.org)).

Every push to the `main` branch builds a production-grade multi-stage Docker image, pushes it to GitHub Container Registry (GHCR) tagged with both `latest` and an immutable Git commit SHA, and deploys that exact SHA tag to your CapRover VPS cluster.

---

## 1. Summary of Files Created & Modified

| File | Purpose |
| :--- | :--- |
| [`.github/workflows/deploy.yml`](file:///.github/workflows/deploy.yml) | GitHub Actions workflow: validates secrets, sets up Docker Buildx, authenticates to GHCR, builds cached Docker image, and triggers CapRover webhook with immutable SHA tag. |
| [`Dockerfile`](file:///Dockerfile) | Multi-stage production container build (Base &rarr; Dependencies &rarr; Builder &rarr; Runner) utilizing Next.js `standalone` output and running as an unprivileged `nextjs` user on port 3000. |
| [`.dockerignore`](file:///.dockerignore) | Excludes `node_modules`, `.git`, `.next`, environment secrets, and documentation from the Docker build context. |
| [`next.config.ts`](file:///next.config.ts) | Configured with `output: "standalone"` to bundle all required server dependencies into `.next/standalone` without requiring full `node_modules` at runtime. |
| [`.env.example`](file:///.env.example) | Safe template documenting runtime server configs, public variables, and optional email dispatch variables (`SMTP_*` / `RESEND_API_KEY`). |
| [`.gitignore`](file:///.gitignore) | Updated to ensure `.env.example` is committed while keeping actual `.env*` files protected. |
| [`DEPLOYMENT.md`](file:///DEPLOYMENT.md) | Comprehensive operational manual for setup, verification, monitoring, rollbacks, and troubleshooting. |

---

## 2. Prerequisites

Before running deployments, ensure you have:
1. **GitHub Repository**: Admin access to [`KavinduLakshanFernando/Cancer-Care-Association-Website`](https://github.com/KavinduLakshanFernando/Cancer-Care-Association-Website).
2. **CapRover VPS**: A running CapRover instance on your VPS (e.g., `https://captain.yourdomain.com`).
3. **Domain Name**: DNS records pointing to your VPS server IP (e.g., `cancercaresl.org` or `subdomain.yourdomain.com`).
4. **GitHub Personal Access Token (PAT)** *(Only required if your GHCR package is private)*: A GitHub token with `read:packages` scope so CapRover can pull images from GHCR.

---

## 3. GitHub Repository Settings & Secrets

Navigate to your GitHub repository:
**Settings &rarr; Secrets and variables &rarr; Actions &rarr; Repository secrets &rarr; New repository secret**

Configure the following **3 Required Secrets**:

| Secret Name | Description | Example Value |
| :--- | :--- | :--- |
| `CAPROVER_SERVER` | Full HTTPS URL of your CapRover dashboard | `https://captain.yourdomain.com` |
| `CAPROVER_APP` | The exact app name created in CapRover | `cancer-care-website` |
| `CAPROVER_APP_TOKEN` | Per-app deployment token generated in CapRover | *(Generated in CapRover Deployment tab)* |

*(Optional)* **Repository Variables** (under **Settings &rarr; Secrets and variables &rarr; Actions &rarr; Variables** tab):
* `NEXT_PUBLIC_SITE_URL`: `https://cancercaresl.org`

---

## 4. CapRover Application Setup

### Step 1: Create the App in CapRover
1. Log in to your CapRover Web Dashboard.
2. In the left navigation, click **Apps**.
3. Under **Create A New App**:
   * **App Name**: Enter your desired app slug (e.g., `cancer-care-website`).
   * **Has Persistent Data**: Leave **unchecked** (Next.js is a stateless container).
4. Click **Create New App**.

### Step 2: Configure Port & HTTP Settings
1. Click on your newly created app (`cancer-care-website`).
2. Go to the **HTTP Settings** tab:
   * **Container HTTP Port**: Set to `3000` (Next.js runs on port 3000).
   * Click **Save & Update**.

### Step 3: Generate the App Deployment Token
1. Go to the **Deployment** tab of your app.
2. Scroll down to the **App Token** section.
3. Check the box **Enable App Token**.
4. Copy the generated deployment token.
5. In GitHub, paste this token as the secret `CAPROVER_APP_TOKEN`.

---

## 5. GHCR Image Authentication in CapRover (Private Repositories)

By default, images published to `ghcr.io` from private or newly created GitHub repositories require authentication for CapRover to pull them.

### Option A: Make the GHCR Package Public (Simplest)
1. After the first GitHub Actions run pushes your image to GHCR:
2. Go to your GitHub Profile &rarr; **Packages** &rarr; click on `cancer-care-association-website`.
3. Click **Package settings** on the right.
4. Scroll to **Danger Zone** &rarr; **Change package visibility** &rarr; Select **Public**.
5. Once public, CapRover can pull the image without any registry credentials.

### Option B: Add GHCR Registry Credentials to CapRover (Recommended for Private Images)
1. On GitHub, create a Personal Access Token:
   * Go to **GitHub Settings &rarr; Developer Settings &rarr; Personal Access Tokens &rarr; Tokens (classic)**.
   * Click **Generate new token (classic)**.
   * Name: `CapRover GHCR Pull Token`.
   * Scope: Check **`read:packages`**.
   * Copy the token.
2. Open your CapRover Dashboard &rarr; Click **Cluster** in the left sidebar.
3. Scroll down to **Docker Registry Configuration** &rarr; Click **Add Remote Registry**:
   * **Registry Domain**: `ghcr.io`
   * **Username**: Your GitHub username (`KavinduLakshanFernando`)
   * **Password / Token**: The Personal Access Token created above.
   * **Email**: Your GitHub email address.
4. Click **Save**. CapRover can now securely pull any private image from your GHCR account.

---

## 6. Domain Name & SSL / HTTPS Configuration

1. In your domain registrar (or Cloudflare), add an **A Record** pointing your domain (e.g. `cancercaresl.org`) to your VPS server's public IP address.
2. In CapRover Dashboard, navigate to **Apps &rarr; cancer-care-website &rarr; HTTP Settings**.
3. Under **Custom Domain**:
   * Enter your custom domain (e.g., `cancercaresl.org`).
   * Click **Connect New Domain**.
4. Once verified, click **Enable HTTPS** (Let's Encrypt will automatically provision and renew a free TLS/SSL certificate).
5. Toggle **Force HTTPS by redirecting all HTTP traffic to HTTPS**.

---

## 7. Runtime Environment Variables in CapRover

If you wish to enable real email notifications when users submit the inquiry form (`/api/contact`), configure the runtime variables in CapRover:

1. Open CapRover Dashboard &rarr; **Apps &rarr; cancer-care-website &rarr; App Configs** tab.
2. Under **Environmental Variables**, add key-value pairs:
   ```text
   NODE_ENV=production
   PORT=3000
   HOSTNAME=0.0.0.0
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=cancercaresl@gmail.com
   SMTP_PASS=your-google-app-password
   SMTP_FROM="Cancer Care Association" <cancercaresl@gmail.com>
   CONTACT_RECEIVER_EMAIL=cancercaresl@gmail.com
   ```
   *(Or set `RESEND_API_KEY=re_xxxxxxx` if using Resend instead).*
3. Click **Save & Update**. CapRover will automatically perform a zero-downtime rolling reload.

---

## 8. Deployment Workflow & Triggers

### Automatic Deployment on Git Push
Whenever you push code changes to the `main` branch:
```bash
git add .
git commit -m "feat: updates to website"
git push origin main
```
GitHub Actions will automatically trigger, build the Docker container with caching, push it to GHCR, and instruct CapRover to deploy the image.

### Manual Deployment via GitHub UI
1. Go to your repository on GitHub.
2. Click the **Actions** tab.
3. Under **All workflows**, select **Production CI/CD - GHCR & CapRover**.
4. Click the **Run workflow** dropdown button.
5. Select branch `main` and click **Run workflow**.

---

## 9. Monitoring, Logs & Rollbacks

### Inspecting GitHub Actions Errors
1. In your GitHub repository, open the **Actions** tab.
2. Click on the latest run.
3. If a step failed (e.g., Missing Secrets or Build error), click on the job to inspect the exact step logs with highlighted error indicators.

### Inspecting CapRover Application Logs
1. In CapRover Dashboard, click **Apps &rarr; cancer-care-website**.
2. Click on **App Logs** tab to view real-time runtime standard output, server errors, and HTTP access logs.
3. Or view logs via CapRover CLI from your local terminal:
   ```bash
   caprover server logs --app cancer-care-website
   ```

### Rolling Back to a Previous Working Image
Because every build deploys an immutable commit-SHA image tag (e.g. `ghcr.io/kavindulakshanfernando/cancer-care-association-website:7b92f9a...`), rolling back is immediate and reliable:

1. In CapRover Dashboard &rarr; **Apps &rarr; cancer-care-website &rarr; Deployment** tab.
2. Under **Method 1: Official Image / Pre-built Image**:
   * In **Image Name**, paste the desired previous image tag:
     ```text
     ghcr.io/kavindulakshanfernando/cancer-care-association-website:<PREVIOUS_GIT_COMMIT_SHA>
     ```
   * Click **Deploy Now**.
3. CapRover immediately deploys the previous container version without rebuilding.

---

## 10. Common Troubleshooting Solutions

### Issue 1: GitHub Actions fails with "Missing required GitHub Secrets"
* **Cause**: `CAPROVER_SERVER`, `CAPROVER_APP`, or `CAPROVER_APP_TOKEN` is not yet configured.
* **Fix**: Open GitHub Repository &rarr; **Settings &rarr; Secrets and variables &rarr; Actions** and add all 3 secrets.

### Issue 2: CapRover deployment fails with "Image pull failed: unauthorized / repository does not exist"
* **Cause**: The Docker image in GHCR is private and CapRover does not have registry credentials.
* **Fix**: Follow [Section 5](#5-ghcr-image-authentication-in-caprover-private-repositories) to either make the package public on GitHub or add your GitHub username and PAT (`read:packages`) to CapRover's **Cluster &rarr; Docker Registry Configuration**.

### Issue 3: Container crashes or loops on CapRover startup
* **Cause**: The container port was not set to 3000.
* **Fix**: In CapRover Dashboard &rarr; **Apps &rarr; cancer-care-website &rarr; HTTP Settings**, verify that **Container HTTP Port** is explicitly set to `3000`.

### Issue 4: Docker image name error in GitHub Actions ("repository name must be lowercase")
* **Cause**: GitHub repository names containing uppercase letters.
* **Fix**: This is already handled automatically in our `.github/workflows/deploy.yml` pipeline by converting the repository name to lowercase (`IMAGE_NAME=ghcr.io/${LOWER_REPO}`).
