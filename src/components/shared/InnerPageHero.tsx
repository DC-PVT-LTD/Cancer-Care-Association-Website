import React from "react";
import Image from "next/image";
import Breadcrumb, { BreadcrumbItem } from "@/components/shared/Breadcrumb";

interface InnerPageHeroProps {
  title: string;
  subtitle: string;
  badgeText: string;
  badgeIcon?: React.ReactNode;
  breadcrumbItems: BreadcrumbItem[];
  imageSrc: string;
  imageAlt: string;
  children?: React.ReactNode;
}

export default function InnerPageHero({
  title,
  subtitle,
  badgeText,
  badgeIcon,
  breadcrumbItems,
  imageSrc,
  imageAlt,
  children,
}: InnerPageHeroProps) {
  return (
    <section className="relative min-h-[360px] lg:min-h-[420px] flex items-center overflow-hidden text-white py-14 lg:py-20 border-b border-slate-800">
      {/* Background Image: sharp, clear, no blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Transparent dark gradient overlay: reduced blue saturation, high clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Breadcrumb items={breadcrumbItems} inverted />

        <div className="mt-4 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/15 border border-white/25 text-amber-300 shadow-sm">
            {badgeIcon}
            <span>{badgeText}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-md leading-[1.2]">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-slate-100/90 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
            {subtitle}
          </p>

          {children && <div className="pt-2">{children}</div>}
        </div>
      </div>
    </section>
  );
}
