import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Phone,
  HelpCircle,
  Users,
  Sparkles,
  ArrowRight,
  HeartHandshake,
  Stethoscope,
  Smile,
  AlertCircle,
} from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionHeading from "@/components/shared/SectionHeading";
import Accordion, { AccordionItem } from "@/components/shared/Accordion";
import CallToAction from "@/components/shared/CallToAction";
import { siteConfig } from "@/config/site";
import InnerPageHero from "@/components/shared/InnerPageHero";

export const metadata: Metadata = {
  title: "Home-Based Palliative Care | Specialized Bedside Clinical Support",
  description:
    "Cancer Care Association Sri Lanka provides free home-based palliative care visits, pain relief, clinical wound care, and caregiver counseling for bedbound cancer patients.",
};

const palliativeFaqs: AccordionItem[] = [
  {
    question: "What is the difference between hospice care and home-based palliative care?",
    answer:
      "Hospice care takes place in our dedicated residential facilities (such as our 45-bed Anuradhapura Hospice) for inpatients requiring around-the-clock nursing. Home-based palliative care (HBPC) brings specialized clinical teams, pain relief medicines, wound dressings, and emotional counseling directly to the patient's own home, allowing them to remain comfortably surrounded by family.",
  },
  {
    question: "Is there any cost for home-based palliative visits?",
    answer:
      "No. All home palliative visits conducted by Cancer Care Association Sri Lanka are provided 100% free of charge. Our medicines, wound dressings, nursing advice, and counseling are fully funded through voluntary charitable donations.",
  },
  {
    question: "How can a family request home-based palliative care support?",
    answer:
      "Families or treating physicians can call our care helpline at +94 77 340 9787 or email cancercaresl@gmail.com. We will gather medical details from the patient's clinic records, assess geographical eligibility, and schedule a compassionate assessment visit by our clinical team.",
  },
  {
    question: "Does palliative care mean stopping all medical treatment?",
    answer:
      "Not necessarily. Palliative care works alongside a patient's existing oncology plan to manage agonizing side effects, chronic pain, nausea, and emotional distress. It can be provided at any stage of advanced illness to dramatically enhance quality of life.",
  },
  {
    question: "What assistance do you provide to family caregivers?",
    answer:
      "Caregivers carry an immense emotional and physical burden. Our team trains family members in gentle bedside turning techniques, bed sore prevention, oral hygiene, feeding methods, and offers compassionate counseling to help manage stress and emotional grief.",
  },
];

export default function HomeBasedPalliativeCarePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Hero Banner with Real Bedside Care Photo */}
      <InnerPageHero
        title="Home-Based Palliative Care Service"
        subtitle="Bringing specialized pain relief, expert clinical nursing, and compassionate emotional support directly into the comfort and security of the patient's home."
        badgeText="Compassionate Bedside Healthcare"
        badgeIcon={<Activity className="w-4 h-4 text-emerald-400" />}
        breadcrumbItems={[{ label: "Home-Based Palliative Care" }]}
        imageSrc="/images/hero-care.jpg"
        imageAlt="Compassionate bedside palliative nursing and patient care"
      />

      {/* What is Home-Based Palliative Care */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1261A0]">
                Understanding the Service
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092B4C] tracking-tight">
                Comfort and Dignity Where Patients Feel Safest: At Home
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                For cancer patients with advanced, debilitating, or terminal illness, frequent
                trips to overcrowded hospital emergency departments can cause severe physical
                exhaustion and emotional turmoil. <strong>Home-Based Palliative Care (HBPC)</strong>{" "}
                transforms this reality by bringing clinical care directly to the bedside.
              </p>
              <p className="text-base text-[#64748B] leading-relaxed">
                Our multidisciplinary teams — comprising qualified nurses, palliative doctors,
                counselors, and experienced volunteers — conduct scheduled home visits to assess
                symptoms, adjust pain medications under medical supervision, dress complex
                fungating wounds, and empower family caregivers with practical skills.
              </p>

              <div className="p-4 rounded-2xl bg-[#F5FAFE] border border-blue-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#18334A] leading-relaxed">
                  <strong>Responsibility Notice:</strong> CCA palliative services operate under
                  ethical medical guidelines and in cooperation with regional oncology consultants.
                  We do not promise unverified medical cures; our commitment is unconditional
                  relief from pain, physical comfort, and human dignity.
                </p>
              </div>
            </div>

            {/* Right Card / Fast Facts */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-gradient-to-br from-[#092B4C] to-[#1261A0] p-8 text-white shadow-xl space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                  Care Principles
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Why Palliative Care Matters
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Medical evidence demonstrates that timely palliative care significantly
                  improves patient comfort, reduces unnecessary hospital admissions, alleviates
                  severe anxiety, and supports families through bereavement.
                </p>

                <div className="space-y-3 pt-2 text-xs sm:text-sm border-t border-white/10">
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Holistic pain & symptom relief</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Preserves familiar family environment</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Zero charges to patient or family</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Compassionate bereavement accompaniment</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`tel:${siteConfig.contact.headOffice.mobile.replace(/\s+/g, "")}`}
                    className="block w-full py-3 rounded-xl text-center text-sm font-bold bg-white text-[#092B4C] hover:bg-teal-50 transition-colors shadow-md"
                  >
                    Request Home Care Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach & Verified Services */}
      <section className="py-16 sm:py-20 bg-[#F5FAFE] border-y border-blue-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Clinical & Practical Support"
            title="Our Multidisciplinary Care Approach"
            subtitle="Tailored care plans focused on alleviating physical distress and uplifting mental well-being."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#092B4C]">Symptom & Pain Relief</h3>
              <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
                Expert assessment of acute cancer pain, nausea, breathlessness, and bowel
                obstruction with proper dosage guidance.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1261A0] flex items-center justify-center mb-4">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#092B4C]">Wound & Stoma Care</h3>
              <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
                Hygienic dressings for fungating malignant tumors, pressure ulcers, catheter
                maintenance, and stoma bag management.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#092B4C]">Caregiver Education</h3>
              <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
                Hands-on training for family members on repositioning to prevent bedsores, gentle
                sponge bathing, and safe oral feeding.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1261A0] flex items-center justify-center mb-4">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#092B4C]">Psychosocial Counseling</h3>
              <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
                Empathetic listening, spiritual peace, addressing anticipatory grief, and
                providing continuous comfort to children and spouses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Request Support */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#092B4C] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-300">
                Patient Assistance
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                How to Request Home-Based Palliative Care
              </h2>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                If you or a family member is coping with advanced cancer and requires bedside
                palliative assistance in Anuradhapura, Galle, or surrounding areas, contact our team.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <span className="text-teal-300 font-bold block mb-1">Step 1: Contact</span>
                  <span>Call our helpline or submit a request with clinical diagnosis.</span>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <span className="text-teal-300 font-bold block mb-1">Step 2: Assessment</span>
                  <span>Our medical officer reviews clinic history and needs.</span>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <span className="text-teal-300 font-bold block mb-1">Step 3: Home Visit</span>
                  <span>Outreach team visits the bedside with medicines and supplies.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${siteConfig.contact.headOffice.mobile.replace(/\s+/g, "")}`}
                  className="px-6 py-3 rounded-full font-bold text-sm bg-white text-[#092B4C] hover:bg-teal-50 transition-colors"
                >
                  Call Helpline: {siteConfig.contact.headOffice.mobile}
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full font-bold text-sm border border-white/30 hover:bg-white/10 transition-colors"
                >
                  Send Online Request
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 sm:py-20 bg-[#F5FAFE] border-t border-blue-100/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Common Questions on Palliative Care"
            subtitle="Clear answers to help patients and families understand the scope and benefits of our home visits."
          />

          <div className="mt-10">
            <Accordion items={palliativeFaqs} />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Help Us Reach More Bedridden Cancer Patients"
        subtitle="Your donations supply medical dressings, palliative medications, vehicle fuel for home visits, and nutritional rations for rural families."
        primaryBtnText="Support Home Care Visits"
        primaryBtnHref="/donate"
      />
    </div>
  );
}
