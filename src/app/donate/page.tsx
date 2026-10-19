import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  Building2,
  PackageCheck,
  HeartHandshake,
  Briefcase,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  Copy,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionHeading from "@/components/shared/SectionHeading";
import Accordion, { AccordionItem } from "@/components/shared/Accordion";
import CallToAction from "@/components/shared/CallToAction";
import { siteConfig } from "@/config/site";
import InnerPageHero from "@/components/shared/InnerPageHero";

export const metadata: Metadata = {
  title: "How to Donate | Support Cancer Patients in Sri Lanka",
  description:
    "Support Cancer Care Association Sri Lanka. Your charitable contribution provides free hospice beds, essential pain medication, warm meals, and home palliative care visits.",
};

const donationFaqs: AccordionItem[] = [
  {
    question: "How are my donations utilized?",
    answer:
      "100% of public voluntary donations go directly towards patient care operations — sustaining the 45-bed Anuradhapura Hospice, funding 3 daily nutritious meals, purchasing pain control medicines and adult diapers, maintaining the Saku Nikethana patient refuge in Galle, and fueling outreach vehicles for home-based palliative visits.",
  },
  {
    question: "Do you issue official receipts for donations?",
    answer:
      "Yes. An official stamped receipt from Cancer Care Association Sri Lanka (Registered NGO L147405 under the Government of Sri Lanka) is issued for every financial and material contribution for your audit and tax records.",
  },
  {
    question: "How do I obtain the official bank account numbers for wire transfer?",
    answer:
      "To safeguard donors and uphold transparency, official bank transfer account details (Bank of Ceylon / Commercial Bank / National Savings Bank) are provided directly by our treasury upon inquiry. Please call +94 77 340 9787 or email cancercaresl@gmail.com, and our administrative coordinator will provide verified wire transfer instructions immediately.",
  },
  {
    question: "Can I donate from overseas in foreign currency (USD, GBP, EUR, AUD)?",
    answer:
      "Yes. We can receive direct foreign telegraphic wire transfers (SWIFT) into our verified Sri Lankan bank accounts. Contact our office for the necessary SWIFT codes and corresponding beneficiary accounts.",
  },
  {
    question: "Can I donate physical items and medicines instead of money?",
    answer:
      "Absolutely. In-kind donations of unopened adult diapers (sizes M and L), sterile wound dressings, high-protein nutritional supplements (such as Ensure or Sustagen), and hospital bed sheets are continuously needed and gratefully accepted at our Homagama, Anuradhapura, or Galle facilities.",
  },
];

export default function DonatePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Hero Banner with Real Photo Background */}
      <InnerPageHero
        title="Support Cancer Patients & Families"
        subtitle="Every rupee or dollar you contribute directly sustains free residential hospice care, essential pain-relieving medicines, and home clinical outreach for Sri Lankans facing cancer."
        badgeText="Transparent Charitable Giving"
        badgeIcon={<Heart className="w-4 h-4 text-rose-400 fill-rose-400" />}
        breadcrumbItems={[{ label: "How to Donate" }]}
        imageSrc="/images/hero-care.jpg"
        imageAlt="Compassionate cancer care and hospice support in Sri Lanka"
      />

      {/* Why Donate & Impact Metrics */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1261A0]">
                Why Your Support Matters
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092B4C] tracking-tight">
                Cancer Care Is Free for Patients, But It Is Not Free to Provide
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                Cancer Care Association operates completely independently as a voluntary
                nonprofit charity. We do not charge patients or families a single cent for hospice
                admissions, nursing, medical dressings, counseling, or meals.
              </p>
              <p className="text-base text-[#64748B] leading-relaxed">
                Operating our 45-bed Anuradhapura Hospice facility, maintaining our Saku
                Nikethana patient transit refuge in Galle, and fueling outreach vehicles for
                bedside home care requires steady, dependable support from compassionate donors,
                well-wishers, and corporate partners.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 text-[#092B4C]">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>100% Voluntary Humanitarian Aid</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#092B4C]">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Registered NGO Reg No: L147405</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#092B4C]">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Official Charitable Receipts Issued</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#092B4C]">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Audited Annual Financial Records</span>
                </div>
              </div>
            </div>

            {/* Practical Impact Examples Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-gradient-to-br from-[#092B4C] to-[#1261A0] p-8 text-white shadow-xl space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                  What Your Gift Can Achieve
                </span>
                <h3 className="text-xl font-bold text-white">
                  Tangible Examples of Your Contribution
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="bg-white/10 p-3.5 rounded-xl border border-white/10">
                    <strong className="text-teal-300 block mb-0.5">Sponsor Daily Patient Meals</strong>
                    <span className="text-blue-100">
                      Ensures 3 fresh, wholesome, high-protein hot meals for an inpatient at Anuradhapura Hospice.
                    </span>
                  </div>

                  <div className="bg-white/10 p-3.5 rounded-xl border border-white/10">
                    <strong className="text-teal-300 block mb-0.5">Provide Wound & Stoma Kits</strong>
                    <span className="text-blue-100">
                      Supplies sterile surgical gauze, cleansing solutions, and bags for complex fungating wounds.
                    </span>
                  </div>

                  <div className="bg-white/10 p-3.5 rounded-xl border border-white/10">
                    <strong className="text-teal-300 block mb-0.5">Sponsor a Home Palliative Visit</strong>
                    <span className="text-blue-100">
                      Covers clinical travel and bedside palliative nursing for a bedridden patient in remote rural Sri Lanka.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Donate */}
      <section className="py-16 sm:py-20 bg-[#F5FAFE] border-y border-blue-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Ways to Give"
            title="Choose How You Would Like to Support"
            subtitle="Explore direct financial transfers, essential in-kind medical supplies, bed sponsorships, or corporate partnerships."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1261A0] flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#092B4C]">Bank Transfer</h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                  Direct domestic or overseas telegraphic transfer into our verified official
                  bank accounts in Sri Lanka.
                </p>
              </div>
              <a
                href="#bank-transfer-info"
                className="mt-6 text-xs font-bold text-[#1261A0] hover:underline inline-flex items-center gap-1"
              >
                <span>View Bank Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <PackageCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#092B4C]">In-Kind Supplies</h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                  Donate adult diapers, surgical dressings, hospital linen, and nutritional
                  supplements directly to our facilities.
                </p>
              </div>
              <a
                href="#in-kind-section"
                className="mt-6 text-xs font-bold text-teal-700 hover:underline inline-flex items-center gap-1"
              >
                <span>See Needed Items</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#092B4C]">Sponsor a Bed</h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                  Commit to ongoing monthly support for a specific bed or ward maintenance at
                  our Anuradhapura Hospice.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-6 text-xs font-bold text-indigo-700 hover:underline inline-flex items-center gap-1"
              >
                <span>Contact Treasury</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#092B4C]">Corporate CSR</h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                  Partner with us through corporate grants, healthcare infrastructure funding, or
                  employee giving programs.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-6 text-xs font-bold text-purple-700 hover:underline inline-flex items-center gap-1"
              >
                <span>Discuss Partnership</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Transfer Instructions (Compliant & Secure) */}
      <section id="bank-transfer-info" className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border-2 border-blue-200 bg-[#F5FAFE] p-8 sm:p-12 shadow-sm space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1261A0] text-white flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1261A0]">
                  Direct Bank Wire Instructions
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092B4C] mt-1">
                  Official Bank Transfer Coordination
                </h2>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Donor Safety & Regulatory Notice:</strong> To prevent fraudulent
                diversion and guarantee that every transaction receives an official tax-exempt
                acknowledgment receipt, official bank account numbers (Bank of Ceylon, Commercial
                Bank, etc.) are verified and issued directly upon donor request by our treasury team.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-blue-100 space-y-4">
              <h4 className="font-bold text-sm text-[#092B4C]">
                How to Complete Your Bank Transfer:
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-[#64748B]">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1261A0] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <span>
                    Call our Treasury Coordinator at{" "}
                    <strong className="text-[#092B4C]">{siteConfig.contact.headOffice.mobile}</strong>{" "}
                    or email{" "}
                    <strong className="text-[#092B4C]">{siteConfig.contact.headOffice.email}</strong>.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1261A0] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <span>
                    Receive the exact official account name (&ldquo;Cancer Care Association&rdquo;),
                    account number, branch code, and SWIFT details for foreign remittances.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1261A0] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <span>
                    Send a copy or screenshot of the deposit slip via WhatsApp/Email to receive your
                    official stamped receipt and thank-you letter.
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${siteConfig.contact.headOffice.mobile.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white bg-[#1261A0] hover:bg-[#092B4C] transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-teal-300" />
                  <span>Call Treasury: {siteConfig.contact.headOffice.mobile}</span>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.headOffice.email}?subject=Requesting%20Official%20Donation%20Bank%20Details`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-[#092B4C] bg-white border border-slate-300 hover:border-[#1261A0] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#1261A0]" />
                  <span>Email Bank Request</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Kind Donations Section */}
      <section id="in-kind-section" className="py-16 sm:py-20 bg-[#F5FAFE] border-t border-blue-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Material Support"
            title="In-Kind Medical & Nutritional Donations"
            subtitle="The following medical consumables and groceries are in high daily demand at our hospices and home care clinics."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-7 border border-blue-100 shadow-sm">
              <span className="text-xs font-bold uppercase text-teal-700 tracking-wider">
                Medical & Hygiene
              </span>
              <h3 className="font-bold text-lg text-[#092B4C] mt-2 mb-3">
                Patient Nursing Consumables
              </h3>
              <ul className="text-xs sm:text-sm text-[#64748B] space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Adult Diapers (Size M & L)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Underpads / Bed Protector Sheets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Sterile Gauze & Surgical Cotton</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Surgical Gloves (Size 6.5, 7, 7.5)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Micropore surgical tape & saline</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-blue-100 shadow-sm">
              <span className="text-xs font-bold uppercase text-[#1261A0] tracking-wider">
                Nutritional Sustenance
              </span>
              <h3 className="font-bold text-lg text-[#092B4C] mt-2 mb-3">
                Food Rations & Supplements
              </h3>
              <ul className="text-xs sm:text-sm text-[#64748B] space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1261A0] shrink-0" />
                  <span>Ensure / Sustagen / Resource protein powders</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1261A0] shrink-0" />
                  <span>Whole milk powder & malt drinks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1261A0] shrink-0" />
                  <span>Dry rations: Rice, dhal, sugar, oats</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1261A0] shrink-0" />
                  <span>Fresh fruits & vegetables for hospice kitchen</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1261A0] shrink-0" />
                  <span>Clean drinking water dispenser bottles</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-blue-100 shadow-sm">
              <span className="text-xs font-bold uppercase text-indigo-700 tracking-wider">
                Hospice Facility Linens
              </span>
              <h3 className="font-bold text-lg text-[#092B4C] mt-2 mb-3">
                Linen & Hospital Comfort
              </h3>
              <ul className="text-xs sm:text-sm text-[#64748B] space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>White hospital single bedsheets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Pillows & washable pillowcases</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Soft flannel blankets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Disinfectant floor liquids & detergents</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Clean patient gowns / sarongs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Donation FAQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Questions About Donating"
            subtitle="Transparent details regarding our tax exemptions, receipts, and allocation."
          />

          <div className="mt-10">
            <Accordion items={donationFaqs} />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Every Single Contribution Touches a Life in Pain"
        subtitle="Contact our office in Homagama, our hospice in Anuradhapura, or our shelter in Galle to contribute."
        primaryBtnText="Call Our Care Helpline"
        primaryBtnHref={`tel:${siteConfig.contact.headOffice.mobile.replace(/\s+/g, "")}`}
        secondaryBtnText="Send Us a Message"
        secondaryBtnHref="/contact"
      />
    </div>
  );
}
