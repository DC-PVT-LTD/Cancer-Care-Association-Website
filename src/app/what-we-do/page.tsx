import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  Building,
  Home as HomeIcon,
  Activity,
  HeartHandshake,
  Users,
  Sparkles,
  ArrowRight,
  Stethoscope,
  Smile,
  GraduationCap,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionHeading from "@/components/shared/SectionHeading";
import CallToAction from "@/components/shared/CallToAction";
import InnerPageHero from "@/components/shared/InnerPageHero";

export const metadata: Metadata = {
  title: "What We Do | Comprehensive Cancer Care Programmes",
  description:
    "Discover Cancer Care Association Sri Lanka's verified charitable initiatives: free hospices, home palliative visits, Project Revive to Survive, cancer awareness clinics, and medical training.",
};

const programmes = [
  {
    id: "hospice-care",
    number: "01",
    title: "Free Inpatient Hospice Care",
    badge: "Residential Sanctuary",
    description:
      "Our 45-bed WHO-recognized Cancer Care Hospice in Kurundankulama, Anuradhapura, provides dignified residential palliative accommodation completely free of charge. Terminally ill patients receive round-the-clock nursing care, skilled pain alleviation, three daily wholesome meals, and spiritual peace beneath our sacred Bodhi tree sapling.",
    benefits: [
      "24/7 skilled palliative nursing contingent",
      "Over 15,000 free hot meals served to inpatients",
      "Zero cost to patients or families",
      "Serene natural setting promoting peace of mind",
    ],
    ctaText: "Learn About Anuradhapura Hospice",
    ctaHref: "/hospices/anuradhapura",
    color: "from-blue-600 to-indigo-800",
  },
  {
    id: "home-care",
    number: "02",
    title: "Home-Based Palliative Clinical Outreach",
    badge: "Bedside Medical Visits",
    description:
      "For advanced cancer patients who are bedbound or unable to undertake exhausting hospital journeys, our mobile outreach teams travel directly to rural and suburban homes. We provide prescription symptom management, wound and stoma dressings, catheter care, and practical caregiver training to relieve suffering.",
    benefits: [
      "Clinical pain & symptom management",
      "Dressing of fungating malignant wounds",
      "Family caregiver turning & feeding guidance",
      "Bereavement and spiritual companionship",
    ],
    ctaText: "Explore Home-Based Palliative Care",
    ctaHref: "/home-based-palliative-care",
    color: "from-teal-600 to-emerald-800",
  },
  {
    id: "patient-shelter",
    number: "03",
    title: "Saku Nikethana Outpatient Family Refuge",
    badge: "Community Care Centre",
    description:
      "Established in Karapitiya, Galle, Saku Nikethana provides temporary overnight lodging, rest facilities, clean washrooms, and hot meals for rural patients visiting Teaching Hospital Karapitiya for oncology clinics and chemotherapy. Relieves the severe financial burden of paid lodging for impoverished families.",
    benefits: [
      "Temporary lodging & clean bedding for clinic patients",
      "Clean sanitary amenities and showers",
      "Free wholesome meals to alleviate hunger",
      "Financial assistance for return bus fares",
    ],
    ctaText: "View Saku Nikethana Karapitiya",
    ctaHref: "/hospices/saku-nikethana-karapitiya",
    color: "from-[#1261A0] to-[#092B4C]",
  },
  {
    id: "project-revive",
    number: "04",
    title: "Project 'Revive to Survive'",
    badge: "Hospital Ward Support",
    description:
      "A dedicated welfare project supporting government oncology wards across Sri Lanka, including the National Cancer Institute Maharagama. Provides urgent medical consumables, infusion accessories, pediatric ward educational items, and patient comfort amenities that state budgets may not immediately cover.",
    benefits: [
      "Supply of essential ward medical items",
      "Nutritional supplement packages for patients",
      "Support for pediatric oncology play areas",
      "Collaborative aid for emergency ward needs",
    ],
    ctaText: "Support Revive to Survive",
    ctaHref: "/donate",
    color: "from-indigo-600 to-purple-800",
  },
  {
    id: "awareness-prevention",
    number: "05",
    title: "Cancer Awareness & Free Screening Clinics",
    badge: "Public Health Education",
    description:
      "Early diagnosis saves lives. CCA regularly conducts grassroots awareness campaigns, October Breast Cancer Awareness initiatives, and free clinical breast examination clinics in collaboration with medical specialists, encouraging communities to identify early warning signs promptly.",
    benefits: [
      "Free clinical breast examination clinics",
      "Public seminars on lifestyle & risk factors",
      "Community educational pamphlets in local languages",
      "Workplace cancer education partnerships",
    ],
    ctaText: "Contact for Community Seminars",
    ctaHref: "/contact",
    color: "from-rose-600 to-pink-800",
  },
  {
    id: "research-training",
    number: "06",
    title: "Palliative Research & Healthcare Capacity Building",
    badge: "Medical Training",
    description:
      "As a recognized member of the Asia Pacific Hospice Palliative Care Network (APHN), CCA actively fosters palliative care education in Sri Lanka. We conduct clinical seminars and workshops for doctors, nursing officers, and social volunteers to elevate ethical standards of end-of-life care.",
    benefits: [
      "Palliative clinical skill workshops for nurses & doctors",
      "Volunteer training in compassionate caregiving",
      "Promotion of palliative research in Sri Lanka",
      "International knowledge exchange through APHN",
    ],
    ctaText: "Join Our Volunteer Network",
    ctaHref: "/contact",
    color: "from-cyan-700 to-blue-900",
  },
];

export default function WhatWeDoPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Hero Banner with Real Sanctuary Photo */}
      <InnerPageHero
        title="What We Do at Cancer Care Association"
        subtitle="Explore our verified clinical, community, and educational initiatives providing hope, holistic relief, and compassionate care to cancer sufferers and families throughout Sri Lanka."
        badgeText="Charitable Programmes & Initiatives"
        badgeIcon={<Sparkles className="w-4 h-4 text-amber-300" />}
        breadcrumbItems={[{ label: "What We Do" }]}
        imageSrc="/images/hero-sanctuary.jpg"
        imageAlt="Cancer Care Association community programmes and healthcare facilities"
      />

      {/* Programme Showcase Cards */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Verified Initiatives"
            title="Comprehensive Healthcare & Social Welfare Programmes"
            subtitle="Every programme is strictly rooted in verified activities carried out by Cancer Care Association Sri Lanka since 2003."
          />

          <div className="mt-14 space-y-12">
            {programmes.map((prog, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={prog.id}
                  id={prog.id}
                  className="rounded-3xl border border-blue-100/80 bg-[#F5FAFE] overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6 sm:p-10"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Visual Number Card (4 cols) */}
                    <div className="lg:col-span-4">
                      <div
                        className={`rounded-2xl bg-gradient-to-br ${prog.color} p-8 text-white shadow-lg space-y-4`}
                      >
                        <span className="text-3xl font-extrabold text-white/50 block">
                          {prog.number}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-white/10 px-3 py-1 rounded-full inline-block">
                          {prog.badge}
                        </span>
                        <h3 className="text-2xl font-bold text-white leading-tight">
                          {prog.title}
                        </h3>
                        <p className="text-xs text-blue-100/90 leading-relaxed pt-2 border-t border-white/10">
                          Operated under Cancer Care Association Sri Lanka • Reg: L147405
                        </p>
                      </div>
                    </div>

                    {/* Details (8 cols) */}
                    <div className="lg:col-span-8 space-y-4">
                      <p className="text-base text-[#18334A] leading-relaxed">
                        {prog.description}
                      </p>

                      <div className="pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#092B4C] mb-2">
                          Key Programme Features:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#64748B]">
                          {prog.benefits.map((benefit, bIdx) => (
                            <div key={bIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 flex items-center gap-4">
                        <Link
                          href={prog.ctaHref}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#1261A0] hover:bg-[#092B4C] transition-colors shadow-sm"
                        >
                          <span>{prog.ctaText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Help Sustaining These Vital Cancer Care Programmes"
        subtitle="Cancer Care Association relies wholly on the voluntary kindness of well-wishers and donors to keep these programs free for all Sri Lankans."
        primaryBtnText="Support Our Programmes"
        primaryBtnHref="/donate"
      />
    </div>
  );
}
