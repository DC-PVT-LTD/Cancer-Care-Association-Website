"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Calendar,
  Check,
  Copy,
  Building2,
  PackageCheck,
  Box,
  Bed,
  Utensils,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  const [copiedBank, setCopiedBank] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const copyBankDetails = () => {
    const text = `Cancer Care Association (Approved Charity)
Bank: Commercial Bank of Ceylon - Homagama Branch
Account: 8290025562 / 1290025562
Cheques Payable To: "Cancer Care Association"
Helpline: +94 77 340 9787`;
    navigator.clipboard.writeText(text);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 3000);
  };

  const newsItems = [
    {
      title: "Anuradhapura Hospice Phase II 45-Bed Capacity Milestone",
      tag: "Hospice Milestone",
      date: "Kurundankulama Center",
      category: "Events",
      excerpt:
        "The World Health Organization (WHO) donated 22 specialized hospital beds to complete Phase II, expanding inpatient capacity to 45 beds for North Central cancer patients.",
    },
    {
      title: "Palliative Care is a Fundamental Human Right",
      tag: "Clinical Discourse",
      date: "Medical Feature",
      category: "Press",
      excerpt:
        "Special discourse by Dr. Samadhi W. Rajapaksa on expanding low-tech, high-touch community palliative care, pain relief, and free hospice accessibility across Sri Lanka.",
    },
    {
      title: "October Breast Cancer Awareness & Free Screening Drives",
      tag: "Community Health",
      date: "Public Screening Drive",
      category: "Community",
      excerpt:
        "Free clinical breast examination clinics and early detection workshops conducted by our nursing and medical volunteers for rural communities.",
    },
    {
      title: "Specialized Palliative Nursing Workshops & Training",
      tag: "Capacity Building",
      date: "Medical Training",
      category: "Training",
      excerpt:
        "Training hospital nurses and home-care teams in ethical pain management, wound dressing, and emotional counseling in partnership with APHN.",
    },
  ];

  const filteredNews =
    selectedFilter === "All"
      ? newsItems
      : newsItems.filter((item) =>
          selectedFilter === "Events"
            ? item.category === "Events"
            : selectedFilter === "Press"
            ? item.category === "Press"
            : selectedFilter === "Training"
            ? item.category === "Training"
            : item.category === "Community"
        );

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Full-screen with transparent image background & ipm.lk style content) */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden text-white py-20 lg:py-28">
        {/* Full-screen background image with subtle transparent overlay - crisp and clear */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-sanctuary.jpg"
            alt="Cancer Care Hospice Sanctuary Sri Lanka"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Transparent Dark Gradient Overlays for optimal readability and natural image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/45 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-white/25 text-xs font-semibold shadow-lg">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-900 font-extrabold text-[10px] uppercase tracking-wider">
                  Est. 2003
                </span>
                <span className="text-white">
                  Sri Lanka&apos;s Pioneer Cancer Care &amp; Palliative Association
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] drop-shadow-md">
                Compassionate Care,{" "}
                <span className="text-amber-300">Dignity &amp; Peace</span> for Every Life Journey
              </h1>

              <p className="text-base sm:text-lg text-blue-50/95 max-w-2xl leading-relaxed mx-auto lg:mx-0 drop-shadow-sm font-medium">
                Providing free-of-charge hospice inpatient care, chronic pain management,
                transit shelter housing for outpatient cancer patients, and home-based clinical
                visits across Sri Lanka.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/what-we-do"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-[#092B4C] bg-white hover:bg-amber-100 transition-all shadow-xl shadow-black/30 hover:scale-105 active:scale-95"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/donate"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white bg-amber-500 hover:bg-amber-400 transition-all shadow-xl shadow-amber-900/40 hover:scale-105 active:scale-95"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Support Our Mission</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Card 1 */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/20 flex items-center gap-4 shadow-xl hover:bg-slate-900/80 transition-all">
                <div className="w-12 h-12 rounded-xl bg-teal-500/25 text-teal-300 flex items-center justify-center shrink-0">
                  <HomeIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white">
                    45-Bed Hospice Inpatient Suites
                  </h3>
                  <p className="text-xs text-slate-300">
                    WHO-recognized sanctuary in Kurundankulama, Anuradhapura
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/20 flex items-center gap-4 shadow-xl hover:bg-slate-900/80 transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-500/25 text-amber-300 flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white">
                    Saku Nikethana Galle Refuge
                  </h3>
                  <p className="text-xs text-slate-300">
                    Outpatient cancer shelter near Karapitiya Hospital
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/20 flex items-center gap-4 shadow-xl hover:bg-slate-900/80 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/25 text-emerald-300 flex items-center justify-center shrink-0">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white">
                    Clinical Home-Based Visits
                  </h3>
                  <p className="text-xs text-slate-300">
                    100% Free bedside pain relief &amp; wound dressing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION (ipm.lk layout with quote highlight and institutional identity) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual image wrapper with floating card - exact ipm.lk style */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/hero-care.jpg"
                    alt="Compassionate Palliative Healthcare - Cancer Care Association Sri Lanka"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#092B4C]/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="badge-teal-ipm shadow-md">
                      Approved Charity Reg: L147405
                    </span>
                  </div>
                </div>

                {/* Floating Card at bottom */}
                <div className="p-5 bg-white border-t border-slate-100 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 font-bold">
                    <Heart className="w-6 h-6 fill-teal-600/30 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#092B4C]">
                      Cancer Care &amp; Palliative Relief
                    </h4>
                    <p className="text-xs text-slate-500">
                      Holistic Inpatient &amp; Home-Based Patient Comfort
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content & Quote Highlight */}
            <div className="lg:col-span-7 space-y-5">
              <span className="badge-teal-ipm">Institutional Identity</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#092B4C] tracking-tight">
                Pioneering Hospice &amp; Palliative Medicine in Sri Lanka
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Cancer Care Association of Sri Lanka (CCA) was founded in 2003 with a compassionate
                motive to ensure the physical, mental, social, and spiritual wellbeing of those
                affected by cancer. From humble beginnings in the Anuradhapura district, CCA has
                grown into a registered National NGO uniting 4,500 active volunteers.
              </p>

              {/* Quote Highlight - ipm.lk style */}
              <div className="quote-highlight-ipm">
                <div className="text-base sm:text-lg font-bold text-[#092B4C] italic">
                  &ldquo;Whoever would tend to me, should tend to the sick.&rdquo;
                </div>
                <div className="text-xs text-teal-700 font-bold mt-1">
                  — Lord Buddha • Cancer Care Association Philosophy
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Our mission encompasses clinical hospice care, home visits, outpatient family
                shelter, academic research, education, and advocacy, addressing all physical,
                emotional, and social needs free of charge.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-[#1261A0] border border-[#1261A0] hover:bg-[#EAF5FC] transition-colors"
                >
                  <span>Learn More About Our Philosophy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOSPICE FACILITIES & CAPACITY (ipm.lk style facility cards) */}
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Infrastructure"
            title="Hospice Facilities &amp; Capacity"
            subtitle="Designed to provide utmost comfort, peaceful garden environments, and compassionate medical care for patients and families."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Facility Card 1 */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1261A0] flex items-center justify-center">
                    <HomeIcon className="w-6 h-6" />
                  </div>
                  <span className="badge-teal-ipm">45 Beds Capacity</span>
                </div>
                <h3 className="text-xl font-bold text-[#092B4C]">
                  Anuradhapura Inpatient Hospice
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Located in Kurundankulama, offering 24/7 skilled palliative nursing, medical
                  pain alleviation, and serene surroundings with a sacred Jaya Sri Maha Bodhi sapling.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>45-bed capacity across Phase I &amp; Phase II</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>22 WHO-donated specialized hospital beds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>100% free accommodation, medicines &amp; meals</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/hospices/anuradhapura"
                  className="text-xs font-bold text-[#1261A0] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Facility Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Facility Card 2 */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                    <Building className="w-6 h-6" />
                  </div>
                  <span className="badge-gold-ipm">Galle Transit Refuge</span>
                </div>
                <h3 className="text-xl font-bold text-[#092B4C]">
                  Saku Nikethana Karapitiya
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Near Teaching Hospital Karapitiya, providing temporary lodging, rest quarters,
                  and hot meals for out-of-town patients traveling for chemotherapy and clinics.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Overnight shelter beds for outpatient families</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Clean sanitary washrooms and shower amenities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Assistance with return bus fares &amp; rations</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/hospices/saku-nikethana-karapitiya"
                  className="text-xs font-bold text-[#1261A0] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Saku Nikethana</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Facility Card 3 */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                    <Activity className="w-6 h-6" />
                  </div>
                  <span className="badge-teal-ipm">Doorstep Care</span>
                </div>
                <h3 className="text-xl font-bold text-[#092B4C]">
                  Mobile Home Palliative Care
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Clinical outreach teams traveling directly to homes of bedridden cancer patients
                  with pain medication, sterile wound dressings, and family caregiver training.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Bedside evaluation by qualified palliative nurses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Dressing of fungating malignant tumors &amp; ulcers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Counseling &amp; spiritual bereavement guidance</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/home-based-palliative-care"
                  className="text-xs font-bold text-[#1261A0] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Home Visits</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMPREHENSIVE PALLIATIVE CARE SERVICES (ipm.lk services grid) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Holistic Humanitarian Relief"
            title="Comprehensive Palliative Care Services"
            subtitle="Care should come closer to the patient. Discover our interconnected continuum of inpatient, home-based, and community-rooted services delivered 100% free of charge."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all card-hover-ipm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1261A0] flex items-center justify-center font-bold">
                    <HomeIcon className="w-5 h-5" />
                  </div>
                  <span className="badge-teal-ipm">24/7 Inpatient</span>
                </div>
                <h3 className="font-bold text-lg text-[#092B4C]">Hospice / Inpatient Care</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Specialized 45-bed facility in Kurundankulama providing round-the-clock symptom
                  control, nursing, and peaceful terminal support.
                </p>
              </div>
              <Link
                href="/hospices"
                className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#1261A0] hover:underline flex items-center gap-1"
              >
                <span>Select Service &amp; View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all card-hover-ipm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                    <Activity className="w-5 h-5" />
                  </div>
                  <span className="badge-teal-ipm">Doorstep Care</span>
                </div>
                <h3 className="font-bold text-lg text-[#092B4C]">Home-Based Palliative Care</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Extending professional clinical evaluations, medication management, wound
                  dressing, and nursing directly into patients&apos; homes.
                </p>
              </div>
              <Link
                href="/home-based-palliative-care"
                className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#1261A0] hover:underline flex items-center gap-1"
              >
                <span>Select Service &amp; View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all card-hover-ipm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="badge-teal-ipm">Community Network</span>
                </div>
                <h3 className="font-bold text-lg text-[#092B4C]">Community-Based Care Model</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Mobilizing 4,500 local volunteers, religious centers, and healthcare staff to bring
                  care closer to cancer sufferers across Sri Lanka.
                </p>
              </div>
              <Link
                href="/what-we-do"
                className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#1261A0] hover:underline flex items-center gap-1"
              >
                <span>Select Service &amp; View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all card-hover-ipm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <span className="badge-teal-ipm">Ward Support</span>
                </div>
                <h3 className="font-bold text-lg text-[#092B4C]">Project &apos;Revive to Survive&apos;</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Supplying medical equipment, pediatric cancer items, and urgent supplies to
                  oncology wards at Maharagama, Anuradhapura, and Karapitiya.
                </p>
              </div>
              <Link
                href="/what-we-do"
                className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#1261A0] hover:underline flex items-center gap-1"
              >
                <span>Select Service &amp; View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all card-hover-ipm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                    <Heart className="w-5 h-5" />
                  </div>
                  <span className="badge-teal-ipm">Caregiver Solace</span>
                </div>
                <h3 className="font-bold text-lg text-[#092B4C]">Family &amp; Caregiver Support</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Empowering families with hands-on caregiving training, symptom recognition
                  guidance, emotional solace, and bereavement accompaniment.
                </p>
              </div>
              <Link
                href="/home-based-palliative-care"
                className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#1261A0] hover:underline flex items-center gap-1"
              >
                <span>Select Service &amp; View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all card-hover-ipm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="badge-teal-ipm">Training &amp; Policy</span>
                </div>
                <h3 className="font-bold text-lg text-[#092B4C]">Palliative Training &amp; Research</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Conducting training workshops for doctors and nurses through APHN affiliation to
                  standardize compassionate palliative healthcare nationwide.
                </p>
              </div>
              <Link
                href="/what-we-do"
                className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#1261A0] hover:underline flex items-center gap-1"
              >
                <span>Select Service &amp; View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SUPPORT US / DONATIONS WITH IN-KIND CARE PACKS & BANK CARD (Exact ipm.lk layout) */}
      <section id="support" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Your Help is Always Appreciated"
            title="Support Us — Donate or Volunteer"
            subtitle="All our projects are supported by well-wishers and philanthropists. You are donating to the Cancer Care Association of Sri Lanka, which is an approved charity. Human beings cannot escape death, but with care and love, we can help each other through pain, loneliness, and fear."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* In-Kind Care Packs (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#092B4C] flex items-center gap-2">
                  <PackageCheck className="w-5 h-5 text-teal-600" />
                  <span>In-Kind Care Pack Donations</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  You can donate essential packs directly to CCA facilities in Homagama,
                  Anuradhapura, or Galle:
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 font-bold">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#092B4C]">Dry Ration Care Pack</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Rice 2kg, dhal 500g, grains 500g, sugar 500g, tea 200g, noodles 1 pck, soya
                      meat 2 packs, spices 50g each &amp; salt.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 font-bold">
                    <PackageCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#092B4C]">Sanitary Care Pack</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Adult diapers (Size M &amp; L), underpads, antiseptic soap, shampoo, eau de
                      cologne, body lotions, talc, and sterile surgical gauze.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1261A0] flex items-center justify-center shrink-0 font-bold">
                    <Bed className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#092B4C]">Bedding &amp; Patient Linen</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      White single bedsheets, pillowcases, flannel blankets, and soft towels for
                      hospice resident beds.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Card (5 cols - exact ipm.lk style) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bank-card-ipm space-y-4">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <h3 className="font-bold text-lg text-white flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-amber-300" />
                    <span>Bank Account Information</span>
                  </h3>
                  <span className="text-[10px] bg-amber-400 text-slate-900 px-2 py-0.5 rounded font-bold uppercase">
                    Approved Charity
                  </span>
                </div>

                <p className="text-xs text-blue-100/90 leading-relaxed">
                  You are donating to Cancer Care Association of Sri Lanka (Reg No: L147405).
                  Monetary donations directly fund medical supplies, patient meals, and free hospice stays.
                </p>

                <div className="space-y-2.5 text-xs">
                  <div className="p-2.5 bg-black/20 rounded-xl">
                    <div className="text-[10px] text-blue-200 uppercase font-semibold">
                      Bank &amp; Branch
                    </div>
                    <div className="font-bold text-white text-sm">
                      Commercial Bank of Ceylon — Homagama Branch
                    </div>
                  </div>

                  <div className="p-2.5 bg-black/20 rounded-xl">
                    <div className="text-[10px] text-blue-200 uppercase font-semibold">
                      Account Name
                    </div>
                    <div className="font-bold text-white text-sm">
                      Cancer Care Association
                    </div>
                  </div>

                  <div className="p-2.5 bg-black/20 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-blue-200 uppercase font-semibold">
                        Account Numbers
                      </div>
                      <div className="font-mono font-bold text-amber-300 text-sm">
                        8290025562 / 1290025562
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={copyBankDetails}
                      className="px-2.5 py-1 rounded bg-white/20 hover:bg-white/30 text-[11px] font-bold text-white flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      {copiedBank ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedBank ? "Copied" : "Copy"}</span>
                    </button>
                  </div>

                  <div className="p-2.5 bg-black/20 rounded-xl">
                    <div className="text-[10px] text-blue-200 uppercase font-semibold">
                      Cheques Payable To
                    </div>
                    <div className="font-bold text-amber-200 text-sm">
                      &quot;Cancer Care Association&quot;
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-blue-200">
                  Treasury Helpline for Receipts:{" "}
                  <strong className="text-white">{siteConfig.contact.headOffice.mobile}</strong>
                </div>
              </div>

              {/* Volunteer callout */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
                <span className="font-bold text-[#092B4C] text-sm flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-teal-600" />
                  <span>Volunteer With Us</span>
                </span>
                <p>
                  Your time spent volunteering can change someone&apos;s life. We welcome doctors,
                  nurses, counselors, and compassionate well-wishers nationwide.
                </p>
                <Link href="/contact" className="font-bold text-[#1261A0] hover:underline block pt-1">
                  Sign up as a Volunteer →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NEWS & RECENT EVENTS (ipm.lk filter pill layout) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Updates &amp; Media"
            title="News &amp; Recent Events"
            subtitle="Stay connected with our hospice developments, palliative care workshops, and community initiatives."
          />

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {["All", "Events", "Press", "Training", "Community"].map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === filter
                    ? "bg-[#1261A0] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {filter === "All" ? "All Updates" : filter}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredNews.map((news, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all card-hover-ipm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="badge-teal-ipm">{news.tag}</span>
                    <span className="text-slate-400 font-medium flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {news.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#092B4C] leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {news.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    href="/about"
                    className="text-xs font-bold text-[#1261A0] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. QUICK CONTACT & WHATSAPP ACTION (ipm.lk style) */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Contact &amp; Institutional Details"
            title="Contact Us"
            subtitle="Have questions regarding patient admissions, home-based visits, donations, or volunteering? Contact our 24/7 care desk directly via WhatsApp or phone hotline."
          />

          <div className="mt-12 max-w-4xl mx-auto bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-xl font-bold text-[#092B4C]">
                24/7 Hospice Care Desk &amp; Emergency Admission
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed">
                Free residential hospice admission for cancer patients in Kurundankulama,
                Anuradhapura and outpatient refuge in Karapitiya, Galle.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-slate-700 pt-1">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  {siteConfig.contact.headOffice.mobile}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-teal-600" />
                  {siteConfig.contact.headOffice.email}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/94773409787?text=Hello%20Cancer%20Care%20Association`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba5a] transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Direct</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-[#092B4C] bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <span>Full Contact Form</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
