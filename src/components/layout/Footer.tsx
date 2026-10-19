import Link from "next/link";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Building,
  HeartHandshake,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#092B4C] text-slate-300 relative overflow-hidden border-t-4 border-[#1261A0]">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1261A0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner inside Footer: Guiding Philosophy */}
      <div className="border-b border-blue-900/60 bg-[#061e35] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1261A0] to-[#2585C6] flex items-center justify-center text-white shadow-lg shrink-0">
              <HeartHandshake className="w-6 h-6 text-teal-300" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-teal-400">
                Guiding Inscription & Compassionate Motto
              </p>
              <blockquote className="text-base sm:text-lg font-medium text-white italic mt-0.5">
                &ldquo;Whoever would tend to me, should tend to the sick.&rdquo;
              </blockquote>
              <p className="text-xs text-blue-200/80 mt-0.5">— Lord Buddha</p>
            </div>
          </div>

          <Link
            href="/donate"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#1261A0] to-[#2585C6] hover:from-[#17A398] hover:to-[#1261A0] transition-all shadow-md active:scale-95 shrink-0"
          >
            <Heart className="w-4 h-4 fill-white/40" />
            <span>Support Our Cancer Patients</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Organization Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1261A0] to-teal-600 flex items-center justify-center text-white">
                <Heart className="w-5 h-5 fill-white/20 text-teal-200" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white tracking-tight leading-tight">
                  Cancer Care Association
                </h3>
                <p className="text-xs font-semibold text-teal-400">
                  Sri Lanka • පිළිකා සරණ සංගමය
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Founded in 2003 by Dr. Samadhi W. Rajapaksa, the Cancer Care Association
              Sri Lanka is dedicated to uplifting the physical, emotional, social, and spiritual
              wellbeing of cancer patients and their families through free inpatient hospice
              care, home-based palliative visits, and compassionate patient welfare.
            </p>

            <div className="bg-[#0e365e] p-3.5 rounded-xl border border-blue-800/40 text-xs space-y-1 max-w-md">
              <div className="flex items-center gap-2 text-teal-300 font-semibold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Official Sri Lankan Legal Registration</span>
              </div>
              <p className="text-slate-300">
                Registered under the Voluntary Social Services Organization Act 31 of 1980
                (amended Act No 08 of 1998) • Reg. No: <strong className="text-white">L147405</strong>
              </p>
              <p className="text-slate-400">
                National Secretariat for Non-Governmental Organizations, Sri Lanka.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-teal-400 pl-2.5">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-teal-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-300 transition-colors">
                  About Us & History
                </Link>
              </li>
              <li>
                <Link
                  href="/home-based-palliative-care"
                  className="hover:text-teal-300 transition-colors"
                >
                  Home-Based Palliative Care
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="hover:text-teal-300 transition-colors">
                  Programmes & Outreach
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-teal-300 transition-colors">
                  How to Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hospices (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-teal-400 pl-2.5">
              Hospice Centres
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/hospices"
                  className="hover:text-teal-300 transition-colors block font-medium text-white"
                >
                  Hospices Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/hospices/anuradhapura"
                  className="hover:text-teal-300 transition-colors block"
                >
                  <span className="font-semibold text-slate-100">Anuradhapura Hospice</span>
                  <span className="block text-xs text-slate-400">
                    Kurundankulama (45 Beds, WHO Recognized)
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/hospices/saku-nikethana-karapitiya"
                  className="hover:text-teal-300 transition-colors block"
                >
                  <span className="font-semibold text-slate-100">Saku Nikethana</span>
                  <span className="block text-xs text-slate-400">
                    Karapitiya, Galle (Patient Shelter)
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Helplines (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-teal-400 pl-2.5">
              Verified Contacts
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  No. 56, Munasinghe Rd, Galawilawatte, Homagama, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.headOffice.mobile.replace(/\s+/g, "")}`}
                  className="text-white hover:text-teal-300 transition-colors font-semibold"
                >
                  Mobile / Care: {siteConfig.contact.headOffice.mobile}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-slate-300">
                  Office: {siteConfig.contact.headOffice.phone}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Building className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-slate-300">
                  Anuradhapura: +94 25 324 3077
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Building className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-slate-300">
                  Galle / Karapitiya: +94 77 569 6000
                </span>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.headOffice.email}`}
                  className="text-teal-300 hover:underline break-all"
                >
                  {siteConfig.contact.headOffice.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-900/60 bg-[#051728] py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            © {currentYear} Cancer Care Association Sri Lanka (පිළිකා සරණ සංගමය). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/donate" className="hover:text-white transition-colors">
              Donate
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
