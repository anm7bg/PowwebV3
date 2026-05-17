"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "За нас", href: "/#za-nas" },
  { label: "Услуги", href: "/#uslugi" },
  { label: "Блог", href: "/blog" },
  { label: "Проекти", href: "/proekti" },
  { label: "Контакти", href: "/#kontakti-home" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  // Close menu on route change / resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10 shadow-sm dark:shadow-[0_0_20px_rgba(0,229,255,0.05)]">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/"><img className="h-16" src="/images/logo.png" alt="Logo" /></Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="text-label-md font-label-md text-on-surface-variant hover:text-primary transition-all duration-300"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex bg-primary-container text-black font-label-md text-label-md px-6 py-2 rounded-DEFAULT border border-transparent hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-300 active:scale-95">
            Започнете проект
          </button>

          {/* Hamburger – mobile only */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg border border-white/10 bg-surface-container hover:bg-surface-container-high transition-colors duration-200"
            aria-label={open ? "Затвори менюто" : "Отвори менюто"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block w-5 h-[2px] bg-on-surface rounded-full transition-all duration-300 origin-center ${open ? "translate-y-[7px] rotate-45" : ""
                }`}
            />
            <span
              className={`block w-5 h-[2px] bg-on-surface rounded-full transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""
                }`}
            />
            <span
              className={`block w-5 h-[2px] bg-on-surface rounded-full transition-all duration-300 origin-center ${open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 top-20 z-40 transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 left-0 right-0 bg-surface-container-low border-b border-white/10 shadow-2xl transition-transform duration-300 ${open ? "translate-y-0" : "-translate-y-4"
            }`}
        >
          <ul className="flex flex-col px-margin-mobile py-6 gap-1">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-label-md font-label-md text-on-surface-variant hover:text-primary hover:bg-white/5 transition-all duration-200"
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="px-margin-mobile pb-6">
            <button
              className="w-full bg-primary-container text-black font-label-md text-label-md px-6 py-3 rounded-DEFAULT hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-300 active:scale-95"
              onClick={() => setOpen(false)}
            >
              Започнете проект
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
