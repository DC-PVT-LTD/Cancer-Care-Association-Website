import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  Target,
  Compass,
  Users,
  Award,
  Sparkles,
  CheckCircle2,
  Calendar,
  Building,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionHeading from "@/components/shared/SectionHeading";
import CallToAction from "@/components/shared/CallToAction";
import { siteConfig } from "@/config/site";

import InnerPageHero from "@/components/shared/InnerPageHero";

export const metadata: Metadata = {
  title: "About Us | Our Mission, History & Leadership",
  description:
    "Learn about Cancer Care Association Sri Lanka (CCA), founded in 2003 by Dr. Samadhi W. Rajapaksa to ensure physical, mental, social, and spiritual wellbeing for cancer patients.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Hero Banner with Real Photo Background */}
      <InnerPageHero
        title="About Cancer Care Association Sri Lanka"
        subtitle="Dedicated to ensuring the physical, mental, social, and spiritual wellbeing of individuals and families affected by cancer across Sri Lanka since 2003."
        badgeText="Organization Background • Est. 2003"
        breadcrumbItems={[{ label: "About Us" }]}
        imageSrc="/images/hero-community.jpg"
        imageAlt="Cancer Care Association healthcare team and community volunteers"
      />

      {/* Main Narrative & Founder Story */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1261A0]">
                Our Inception & Roots
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092B4C] tracking-tight">
                From a Compassionate Vision in Anuradhapura to a National Movement
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                <strong>Cancer Care Association Sri Lanka (CCA)</strong> was founded by{" "}
                <strong>Dr. Samadhi W. Rajapaksa</strong> with a deeply compassionate motive
                and unwavering dedication to provide physical and mental relief to patients facing
                often fatal and painful diagnoses.
              </p>
              <p className="text-base text-[#64748B] leading-relaxed">
                Starting as a small grassroots initiative in the North Central district of
                Anuradhapura, the organization steadily developed into a National Level
                Non-Governmental Organization registered under the Government of Sri Lanka
                (Registration No: <strong>L147405</strong>). Today, CCA unites over 4,500 dedicated
                members and volunteers who give their time, care, and skills to patient welfare.
              </p>
              <p className="text-base text-[#64748B] leading-relaxed">
                CCA works closely with the National Cancer Institute (Apeksha Hospital) Maharagama,
                the key national institution for oncology treatments and research, while operating
                vital branches and hospices at Anuradhapura and Karapitiya (Galle) Teaching Hospitals.
              </p>

              <div className="p-5 rounded-2xl bg-[#F5FAFE] border border-blue-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1261A0] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#092B4C]">
                    National Legal Recognition & Transparency
                  </h4>
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                    Registered under the Voluntary Social Services Organizations Act 31 of 1980
                    (amended Act No 08 of 1998) at The National Secretariat for Non-Governmental
                    Organizations, Sri Lanka.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder & Philosophy Highlight */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-gradient-to-br from-[#092B4C] to-[#1261A0] p-8 text-white shadow-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                  Founder & Leadership
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">
                  Dr. Samadhi W. Rajapaksa
                </h3>
                <p className="text-xs text-blue-200 mt-1">
                  Founder & Patron • Cancer Care Association Sri Lanka
                </p>

                <p className="text-sm text-blue-100 mt-4 leading-relaxed">
                  &ldquo;A cancer diagnosis challenges every dimension of human life — the
                  physical body, the family livelihood, the mental tranquility, and the spirit.
                  Our duty is to ensure no human being suffers in solitude or abandonment.&rdquo;
                </p>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-teal-300 font-serif font-bold">
                    &ldquo;
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Lord Buddha&apos;s Inscription</p>
                    <p className="text-xs text-blue-200 italic">
                      &quot;Whoever would tend to me, should tend to the sick.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 bg-[#F5FAFE] border-y border-blue-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Our Vision
                </span>
                <h3 className="text-2xl font-bold text-[#092B4C] mt-2">
                  A Society Where No Cancer Patient Suffers in Pain or Isolation
                </h3>
                <p className="text-base text-[#64748B] mt-4 leading-relaxed">
                  To envision a compassionate Sri Lanka where comprehensive palliative care,
                  pain alleviation, emotional solace, and dignified hospice sanctuaries are
                  accessible to every affected citizen regardless of social, economic, or
                  geographical status.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1261A0] flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1261A0]">
                  Our Mission
                </span>
                <h3 className="text-2xl font-bold text-[#092B4C] mt-2">
                  Uplifting Physical, Mental, Social & Spiritual Wellbeing
                </h3>
                <p className="text-base text-[#64748B] mt-4 leading-relaxed">
                  To provide free, highest-quality inpatient hospice accommodation, expert
                  home-based palliative healthcare, spiritual accompaniment, nutritional
                  sustenance, and public preventive awareness, standing firmly beside cancer
                  patients and their families throughout their journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Milestones Timeline */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Two Decades of Impact"
            title="Our History & Key Milestones"
            subtitle="How a compassionate initiative blossomed into Sri Lanka's leading community palliative care association."
          />

          <div className="mt-14 max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-1/2 before:w-0.5 before:bg-blue-100 before:-translate-x-1/2">
            {/* 2003 */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group">
              <div className="sm:w-5/12 text-left sm:text-right space-y-1">
                <span className="text-xs font-bold uppercase text-[#1261A0] tracking-wider">
                  Foundation
                </span>
                <h4 className="text-lg font-bold text-[#092B4C]">Inception in Anuradhapura</h4>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Founded by Dr. Samadhi W. Rajapaksa with local volunteers to assist needy
                  oncology patients at the Anuradhapura hospital.
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#1261A0] text-white flex items-center justify-center font-bold text-xs shadow-md shrink-0 z-10 mx-auto">
                2003
              </div>
              <div className="sm:w-5/12 hidden sm:block" />
            </div>

            {/* 2011 */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group">
              <div className="sm:w-5/12 hidden sm:block" />
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs shadow-md shrink-0 z-10 mx-auto">
                2011
              </div>
              <div className="sm:w-5/12 space-y-1">
                <span className="text-xs font-bold uppercase text-teal-700 tracking-wider">
                  Major Facilities
                </span>
                <h4 className="text-lg font-bold text-[#092B4C]">
                  Hospice Phase I & Galle Branch
                </h4>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  June 2011: Opened the 20-bed Anuradhapura Hospice in Kurundankulama.
                  August 2011: Established Karapitiya branch at Teaching Hospital Karapitiya.
                </p>
              </div>
            </div>

            {/* 2014 */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group">
              <div className="sm:w-5/12 text-left sm:text-right space-y-1">
                <span className="text-xs font-bold uppercase text-[#1261A0] tracking-wider">
                  Expansion & Recognition
                </span>
                <h4 className="text-lg font-bold text-[#092B4C]">
                  WHO Recognition & 45-Bed Capacity
                </h4>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Completion of Phase II brought hospice capacity to 45 beds. The World Health
                  Organization (WHO) recognized the facility and donated 22 specialized hospital beds.
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#1261A0] text-white flex items-center justify-center font-bold text-xs shadow-md shrink-0 z-10 mx-auto">
                2014
              </div>
              <div className="sm:w-5/12 hidden sm:block" />
            </div>

            {/* Present */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group">
              <div className="sm:w-5/12 hidden sm:block" />
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs shadow-md shrink-0 z-10 mx-auto">
                Today
              </div>
              <div className="sm:w-5/12 space-y-1">
                <span className="text-xs font-bold uppercase text-teal-700 tracking-wider">
                  National Outreach
                </span>
                <h4 className="text-lg font-bold text-[#092B4C]">
                  Home Palliative Care & Saku Nikethana
                </h4>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Mobilizing home visits across multiple provinces, operating Saku Nikethana
                  outpatient family shelter in Galle, and driving nationwide awareness campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Verified Facts */}
      <section className="py-16 sm:py-20 bg-[#EAF5FC]/50 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Verified Impact"
            title="Real Care Delivered to Real Lives"
            subtitle="Transparent and accountable healthcare charity at the service of Sri Lankan cancer sufferers."
          />

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#1261A0]">45</span>
              <p className="text-xs sm:text-sm font-semibold text-[#092B4C] mt-2">
                Hospice Beds
              </p>
              <p className="text-[11px] text-[#64748B] mt-0.5">WHO recognized facility</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#1261A0]">15,000+</span>
              <p className="text-xs sm:text-sm font-semibold text-[#092B4C] mt-2">
                Meals Served
              </p>
              <p className="text-[11px] text-[#64748B] mt-0.5">Free hot meals to patients</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#1261A0]">4,500+</span>
              <p className="text-xs sm:text-sm font-semibold text-[#092B4C] mt-2">
                Dedicated Members
              </p>
              <p className="text-[11px] text-[#64748B] mt-0.5">Volunteers nationwide</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#1261A0]">20+</span>
              <p className="text-xs sm:text-sm font-semibold text-[#092B4C] mt-2">
                Years of Service
              </p>
              <p className="text-[11px] text-[#64748B] mt-0.5">Established 2003</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Be Part of Our Mission of Hope & Compassion"
        subtitle="Your tax-exempt contribution directly funds free hospice accommodation, medical nutrition, and community palliative care visits."
      />
    </div>
  );
}
