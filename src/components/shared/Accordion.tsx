"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={idx}
            className="border border-blue-100/80 rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-200 hover:border-blue-200"
          >
            <button
              type="button"
              onClick={() => toggleIndex(idx)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-[#092B4C] hover:text-[#1261A0] transition-colors focus:outline-none"
            >
              <span className="text-base sm:text-lg pr-4">{item.question}</span>
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200",
                  isOpen
                    ? "bg-[#1261A0] text-white rotate-180"
                    : "bg-[#EAF5FC] text-[#1261A0]"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm sm:text-base text-[#64748B] leading-relaxed border-t border-slate-50 pt-3 animate-in fade-in duration-150">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
