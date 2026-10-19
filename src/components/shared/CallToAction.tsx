import Link from "next/link";
import { Heart, Phone, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/config/site";

interface CallToActionProps {
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
}

export default function CallToAction({
  title = "Your Support Brings Dignity & Comfort to Cancer Patients",
  subtitle = "Every donation directly funds free hospice accommodation, essential pain medication, nutritious hot meals, and home-based palliative outreach for Sri Lankan families facing cancer.",
  primaryBtnText = "Donate Now",
  primaryBtnHref = "/donate",
  secondaryBtnText = "Contact Our Helpline",
  secondaryBtnHref = "/contact",
}: CallToActionProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-[#092B4C] via-[#1261A0] to-[#092B4C] text-white">
      {/* Background radial shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/15 text-teal-300 border border-white/20 mb-6 backdrop-blur-sm">
          <ShieldCheck className="w-3.5 h-3.5" />
          100% Free Patient Support • Voluntary Registered NGO
        </span>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          {title}
        </h2>

        <p className="mt-5 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryBtnHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-base text-[#092B4C] bg-white hover:bg-teal-50 shadow-xl shadow-black/20 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <span>{primaryBtnText}</span>
            <ArrowRight className="w-4 h-4 text-[#1261A0]" />
          </Link>

          <Link
            href={secondaryBtnHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white border-2 border-white/30 hover:border-white hover:bg-white/10 active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 text-teal-300" />
            <span>{secondaryBtnText}</span>
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200">
          <span className="flex items-center gap-1.5">
            <HeartHandshake className="w-4 h-4 text-teal-300" />
            Tax-exempt charitable receipts issued
          </span>
          <span>•</span>
          <span>Member of Asia Pacific Hospice Palliative Care Network</span>
          <span>•</span>
          <span>Direct helpline: {siteConfig.contact.headOffice.mobile}</span>
        </div>
      </div>
    </section>
  );
}
