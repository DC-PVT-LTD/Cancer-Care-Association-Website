import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3",
            light
              ? "bg-white/15 text-teal-300 border border-white/20"
              : "bg-[#EAF5FC] text-[#1261A0] border border-blue-200/50"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight",
          light ? "text-white" : "text-[#092B4C]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed",
            light ? "text-blue-100/90" : "text-[#64748B]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
