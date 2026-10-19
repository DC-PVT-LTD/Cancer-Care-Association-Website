"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  Clock,
  ShieldCheck,
  Loader2,
  ExternalLink,
} from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionHeading from "@/components/shared/SectionHeading";
import { siteConfig } from "@/config/site";
import InnerPageHero from "@/components/shared/InnerPageHero";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [serverStatus, setServerStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerStatus({ type: "idle", message: "" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setServerStatus({
          type: "success",
          message: resData.message,
        });
        reset();
      } else {
        setServerStatus({
          type: "error",
          message:
            resData.message ||
            "Unable to send message at this time. Please call our direct helpline at +94 77 340 9787.",
        });
      }
    } catch (err) {
      setServerStatus({
        type: "error",
        message:
          "Network connection failed. Please call our direct care helpline at +94 77 340 9787.",
      });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header Hero Banner with Real Photo Background */}
      <InnerPageHero
        title="Contact Cancer Care Association"
        subtitle="We are here to support cancer patients, families, donors, volunteers, and healthcare partners. Connect with our central secretariat or regional hospice teams."
        badgeText="Reach Our Care Team"
        badgeIcon={<Mail className="w-4 h-4 text-amber-300" />}
        breadcrumbItems={[{ label: "Contact Us" }]}
        imageSrc="/images/hero-community.jpg"
        imageAlt="Cancer Care Association community outreach and central contact office"
      />

      {/* Main Form & Contact Information */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#F5FAFE] border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-sm">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1261A0]">
                  Send a Direct Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092B4C] mt-1">
                  How Can We Help You Today?
                </h2>
                <p className="text-sm text-[#64748B] mt-2">
                  Complete the form below. For immediate emergency patient hospice admission,
                  please call our 24/7 care helpline directly at +94 77 340 9787.
                </p>
              </div>

              {serverStatus.type === "success" && (
                <div className="mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Message Registered Successfully</strong>
                    <p className="mt-1 leading-relaxed text-xs sm:text-sm">
                      {serverStatus.message}
                    </p>
                  </div>
                </div>
              )}

              {serverStatus.type === "error" && (
                <div className="mb-6 p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Submission Issue</strong>
                    <p className="mt-1 leading-relaxed text-xs sm:text-sm">
                      {serverStatus.message}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold uppercase tracking-wider text-[#092B4C] mb-1.5"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Priyantha Silva"
                      {...register("fullName")}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#1261A0] text-sm text-[#092B4C] transition-colors focus:outline-none"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-[#092B4C] mb-1.5"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      {...register("email")}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#1261A0] text-sm text-[#092B4C] transition-colors focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone (optional) */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold uppercase tracking-wider text-[#092B4C] mb-1.5"
                    >
                      Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+94 77 123 4567"
                      {...register("phone")}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#1261A0] text-sm text-[#092B4C] transition-colors focus:outline-none"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-bold uppercase tracking-wider text-[#092B4C] mb-1.5"
                    >
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="subject"
                      {...register("subject")}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#1261A0] text-sm text-[#092B4C] transition-colors focus:outline-none"
                    >
                      <option value="">Select an Inquiry Topic</option>
                      <option value="Hospice Admission Inquiry">Hospice Admission Inquiry</option>
                      <option value="Home-Based Palliative Care Request">Home-Based Palliative Care Request</option>
                      <option value="Donation & Bank Transfer Query">Donation & Bank Transfer Query</option>
                      <option value="Volunteer With CCA">Volunteer With CCA</option>
                      <option value="Corporate CSR Partnership">Corporate CSR Partnership</option>
                      <option value="General Information">General Information</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-[#092B4C] mb-1.5"
                  >
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Please include relevant patient details, hospital clinic card references if applicable, or your inquiry details..."
                    {...register("message")}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#1261A0] text-sm text-[#092B4C] transition-colors focus:outline-none resize-y"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500 font-medium">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm text-white bg-[#1261A0] hover:bg-[#092B4C] disabled:bg-slate-400 transition-colors shadow-md shadow-blue-800/20 active:scale-95 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Your Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column: Verified Office Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Head Office Card */}
              <div className="bg-[#092B4C] text-white rounded-3xl p-8 shadow-xl space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                  Central Secretariat
                </span>
                <h3 className="text-xl font-bold text-white">
                  Cancer Care Association Head Office
                </h3>

                <ul className="space-y-3.5 text-xs sm:text-sm text-blue-100">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>No. 56, Munasinghe Rd, Galawilawatte, Homagama, Sri Lanka</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <span className="text-slate-300 block text-[11px]">24/7 Care Helpline / Mobile:</span>
                      <a
                        href={`tel:${siteConfig.contact.headOffice.mobile.replace(/\s+/g, "")}`}
                        className="text-white hover:text-teal-300 font-bold"
                      >
                        {siteConfig.contact.headOffice.mobile}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <span className="text-slate-300 block text-[11px]">Landline Office:</span>
                      <span className="text-white font-medium">{siteConfig.contact.headOffice.phone}</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <span className="text-slate-300 block text-[11px]">Official Email:</span>
                      <a
                        href={`mailto:${siteConfig.contact.headOffice.email}`}
                        className="text-teal-300 hover:underline"
                      >
                        {siteConfig.contact.headOffice.email}
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="pt-4 border-t border-white/10 text-xs text-blue-200">
                  <span>Voluntary Social Service Reg. No: <strong>L147405</strong></span>
                </div>
              </div>

              {/* Regional Hospice Hotlines */}
              <div className="bg-[#F5FAFE] border border-blue-100 rounded-3xl p-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1261A0]">
                  Regional Hospice Hotlines
                </span>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3 bg-white rounded-xl border border-slate-100">
                    <strong className="text-[#092B4C] block font-bold">
                      Cancer Care Hospice — Anuradhapura
                    </strong>
                    <span className="text-slate-500 block text-xs">Kurundankulama (45 Beds)</span>
                    <a
                      href="tel:+94253243077"
                      className="text-[#1261A0] font-semibold hover:underline inline-block mt-1"
                    >
                      Tel: +94 25 324 3077
                    </a>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-100">
                    <strong className="text-[#092B4C] block font-bold">
                      Saku Nikethana — Karapitiya, Galle
                    </strong>
                    <span className="text-slate-500 block text-xs">Near Teaching Hospital Karapitiya</span>
                    <a
                      href="tel:+94775696000"
                      className="text-[#1261A0] font-semibold hover:underline inline-block mt-1"
                    >
                      Tel: +94 77 569 6000
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
