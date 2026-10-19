"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Heart,
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  ShieldCheck,
  Building,
  Home as HomeIcon,
  Activity,
  Copy,
  Check,
  MapPin,
  HeartHandshake,
  BookOpen,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hospiceDropdownOpen, setHospiceDropdownOpen] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setHospiceDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
    setHospiceDropdownOpen(false);
  }, [pathname]);

  const copyBankInfo = () => {
    const info = `Cancer Care Association Sri Lanka
Bank: Commercial Bank of Ceylon - Homagama Branch
Account: 8290025562 / 1290025562
Helpline: +94 77 340 9787`;
    navigator.clipboard.writeText(info);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 3000);
  };

  const isHospiceActive = pathname.startsWith("/hospices");

  return (
    <>
      {/* Top Bar - ipm.lk style */}
      <div className="top-bar-ipm py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-slate-300">24/7 Care Helpline:</span>
              <a
                href={`tel:${siteConfig.contact.headOffice.mobile.replace(/\s+/g, "")}`}
                className="text-white hover:text-amber-300 font-bold transition-colors"
              >
                {siteConfig.contact.headOffice.mobile}
              </a>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>Anuradhapura &amp; Galle, Sri Lanka</span>
            </div>

            <div className="hidden lg:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 text-[11px] font-bold border border-amber-500/30">
              <Heart className="w-3 h-3 fill-amber-300" />
              <span>100% Free Care</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={copyBankInfo}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer border border-white/10"
              title="Copy Main Bank Account Information"
            >
              {copiedBank ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-amber-300" />
                  <span>Copy Bank Info</span>
                </>
              )}
            </button>

            <Link
              href="/donate"
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md text-xs font-bold text-white bg-amber-600 hover:bg-amber-500 transition-colors shadow-sm"
            >
              <Heart className="w-3 h-3 fill-white" />
              <span>Donate</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar - ipm.lk clean institutional style */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 bg-white border-b",
          isScrolled ? "shadow-md border-slate-200 py-2.5" : "border-slate-100 py-3.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Emblem & Institutional Subtitle */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-11 h-11 rounded-xl bg-[#092B4C] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
              <Heart className="w-6 h-6 text-amber-400 fill-amber-400/20" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#092B4C] leading-none">
                CCA SRI LANKA
              </span>
              <span className="text-[11px] font-semibold text-teal-700 tracking-wide mt-1 uppercase">
                Cancer Care Association • Approved Charity
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={cn(
                "relative px-3.5 py-2 text-sm font-bold transition-colors",
                pathname === "/"
                  ? "text-[#1261A0]"
                  : "text-slate-700 hover:text-[#1261A0]"
              )}
            >
              Home
              {pathname === "/" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#1261A0] rounded-full" />
              )}
            </Link>

            <Link
              href="/about"
              className={cn(
                "relative px-3.5 py-2 text-sm font-bold transition-colors",
                pathname === "/about"
                  ? "text-[#1261A0]"
                  : "text-slate-700 hover:text-[#1261A0]"
              )}
            >
              About
              {pathname === "/about" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#1261A0] rounded-full" />
              )}
            </Link>

            {/* Hospices Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setHospiceDropdownOpen(true)}
              onMouseLeave={() => setHospiceDropdownOpen(false)}
            >
              <button
                type="button"
                className={cn(
                  "relative px-3.5 py-2 text-sm font-bold flex items-center gap-1 transition-colors focus:outline-none cursor-pointer",
                  isHospiceActive
                    ? "text-[#1261A0]"
                    : "text-slate-700 hover:text-[#1261A0]"
                )}
                aria-expanded={hospiceDropdownOpen}
                onClick={() => setHospiceDropdownOpen((prev) => !prev)}
              >
                <span>Hospices</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    hospiceDropdownOpen ? "rotate-180 text-[#1261A0]" : "text-slate-400"
                  )}
                />
                {isHospiceActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#1261A0] rounded-full" />
                )}
              </button>

              {hospiceDropdownOpen && (
                <div className="absolute left-0 mt-1 w-80 rounded-2xl bg-white shadow-xl border border-slate-100 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    href="/hospices"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 text-[#1261A0] group-hover:bg-[#1261A0] group-hover:text-white transition-colors">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#092B4C] group-hover:text-[#1261A0]">
                        Hospices &amp; Facilities
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Overview of inpatient and transit shelters.
                      </p>
                    </div>
                  </Link>

                  <div className="h-px bg-slate-100 my-1" />

                  <Link
                    href="/hospices/anuradhapura"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                      <HomeIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#092B4C] group-hover:text-teal-700 flex items-center gap-1.5">
                        <span>Anuradhapura Hospice</span>
                        <span className="text-[10px] bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded font-bold">
                          45 Beds
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        WHO-recognized residential palliative sanctuary.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/hospices/saku-nikethana-karapitiya"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-amber-50 text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#092B4C] group-hover:text-amber-700">
                        Saku Nikethana Karapitiya
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Galle outpatient transit shelter and rest refuge.
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/home-based-palliative-care"
              className={cn(
                "relative px-3.5 py-2 text-sm font-bold transition-colors",
                pathname === "/home-based-palliative-care"
                  ? "text-[#1261A0]"
                  : "text-slate-700 hover:text-[#1261A0]"
              )}
            >
              Home Care
              {pathname === "/home-based-palliative-care" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#1261A0] rounded-full" />
              )}
            </Link>

            <Link
              href="/what-we-do"
              className={cn(
                "relative px-3.5 py-2 text-sm font-bold transition-colors",
                pathname === "/what-we-do"
                  ? "text-[#1261A0]"
                  : "text-slate-700 hover:text-[#1261A0]"
              )}
            >
              Services &amp; Projects
              {pathname === "/what-we-do" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#1261A0] rounded-full" />
              )}
            </Link>

            <Link
              href="/donate"
              className={cn(
                "relative px-3.5 py-2 text-sm font-bold transition-colors",
                pathname === "/donate"
                  ? "text-[#1261A0]"
                  : "text-slate-700 hover:text-[#1261A0]"
              )}
            >
              Support Us
              {pathname === "/donate" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#1261A0] rounded-full" />
              )}
            </Link>

            <Link
              href="/contact"
              className={cn(
                "relative px-3.5 py-2 text-sm font-bold transition-colors",
                pathname === "/contact"
                  ? "text-[#1261A0]"
                  : "text-slate-700 hover:text-[#1261A0]"
              )}
            >
              Contact Us
              {pathname === "/contact" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#1261A0] rounded-full" />
              )}
            </Link>
          </nav>

          {/* Action Button & Hamburger Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-white bg-[#092B4C] hover:bg-[#1261A0] transition-colors shadow-sm"
            >
              <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Support Us</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[96px] bg-white border-b border-slate-200 shadow-2xl max-h-[calc(100vh-96px)] overflow-y-auto px-5 py-6 space-y-4">
            <div className="space-y-1">
              <Link
                href="/"
                className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#092B4C] hover:bg-slate-50"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#092B4C] hover:bg-slate-50"
              >
                About
              </Link>
              <Link
                href="/hospices"
                className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#092B4C] hover:bg-slate-50"
              >
                Hospices &amp; Facilities
              </Link>
              <Link
                href="/home-based-palliative-care"
                className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#092B4C] hover:bg-slate-50"
              >
                Home-Based Palliative Care
              </Link>
              <Link
                href="/what-we-do"
                className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#092B4C] hover:bg-slate-50"
              >
                Services &amp; Projects
              </Link>
              <Link
                href="/donate"
                className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#092B4C] hover:bg-slate-50"
              >
                Support Us / Donate
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2.5 rounded-lg text-base font-bold text-[#092B4C] hover:bg-slate-50"
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <Link
                href="/donate"
                className="w-full py-3 rounded-xl text-center font-bold text-sm bg-amber-600 text-white flex items-center justify-center gap-2 shadow-sm"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate &amp; Support Cancer Patients</span>
              </Link>

              <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                <div>
                  <span className="font-bold text-[#092B4C] block">24/7 Hospice Helpline</span>
                  <a href={`tel:${siteConfig.contact.headOffice.mobile.replace(/\s+/g, "")}`}>
                    {siteConfig.contact.headOffice.mobile}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Mobile Bottom Navigation Bar - ipm.lk style */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200 py-2 px-3 shadow-lg flex items-center justify-around text-[10px] font-bold text-slate-600">
        <Link
          href="/"
          className={cn(
            "flex flex-col items-center gap-1",
            pathname === "/" ? "text-[#1261A0]" : "hover:text-[#1261A0]"
          )}
        >
          <HomeIcon className="w-4 h-4" />
          <span>Home</span>
        </Link>

        <Link
          href="/hospices"
          className={cn(
            "flex flex-col items-center gap-1",
            isHospiceActive ? "text-[#1261A0]" : "hover:text-[#1261A0]"
          )}
        >
          <Building className="w-4 h-4" />
          <span>Hospices</span>
        </Link>

        <Link
          href="/what-we-do"
          className={cn(
            "flex flex-col items-center gap-1",
            pathname === "/what-we-do" ? "text-[#1261A0]" : "hover:text-[#1261A0]"
          )}
        >
          <Activity className="w-4 h-4" />
          <span>Services</span>
        </Link>

        <Link
          href="/about"
          className={cn(
            "flex flex-col items-center gap-1",
            pathname === "/about" ? "text-[#1261A0]" : "hover:text-[#1261A0]"
          )}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>About</span>
        </Link>

        <Link
          href="/donate"
          className={cn(
            "flex flex-col items-center gap-1 text-amber-600"
          )}
        >
          <Heart className="w-4 h-4 fill-amber-500" />
          <span>Donate</span>
        </Link>
      </div>
    </>
  );
}
