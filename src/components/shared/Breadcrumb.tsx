import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  inverted?: boolean;
}

export default function Breadcrumb({ items, inverted = false }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-2">
      <ol
        className={`flex items-center flex-wrap gap-1.5 text-xs sm:text-sm ${
          inverted ? "text-white/80" : "text-slate-500"
        }`}
      >
        <li className="flex items-center gap-1">
          <Link
            href="/"
            className={`flex items-center gap-1 transition-colors ${
              inverted ? "hover:text-amber-300" : "hover:text-[#1261A0]"
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              <ChevronRight
                className={`w-3.5 h-3.5 shrink-0 ${
                  inverted ? "text-white/40" : "text-slate-400"
                }`}
              />
              {isLast || !item.href ? (
                <span
                  className={`font-semibold truncate max-w-[200px] sm:max-w-none ${
                    inverted ? "text-amber-300" : "text-[#1261A0]"
                  }`}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    inverted ? "hover:text-amber-300" : "hover:text-[#1261A0]"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
