import Link from "next/link";
import { Heart, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-[#F5FAFE]">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-blue-100 shadow-lg text-center space-y-5">
        <div className="w-16 h-16 rounded-3xl bg-[#EAF5FC] text-[#1261A0] flex items-center justify-center mx-auto">
          <Heart className="w-8 h-8 text-[#1261A0]" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
          Page Not Found (404)
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#092B4C]">
          We Couldn&apos;t Find That Page
        </h1>

        <p className="text-sm text-[#64748B] leading-relaxed">
          The page you are looking for may have been moved or is currently being updated.
          Please return to our homepage or reach out to our care team.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white bg-[#1261A0] hover:bg-[#092B4C] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-[#092B4C] border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
