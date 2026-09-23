"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { SITE } from "@/constants/site";
import { cn, handleScrollTo } from "@/lib/utils";

interface NavbarProps {
  variant?: "default" | "clients";
}

export default function Navbar({ variant = "default" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (variant !== "clients") return;

    const handleScroll = () => {
      const navbarHeight = 80;
      const gridEl = document.getElementById("clients-grid");
      if (gridEl) {
        const rect = gridEl.getBoundingClientRect();
        if (rect.top <= navbarHeight && rect.bottom > navbarHeight) {
          setTheme("light");
          return;
        }
      }
      setTheme("dark");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [variant]);

  const isClients = variant === "clients";
  const isDark = isClients && theme === "dark";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300 backdrop-blur-md",
        isClients
          ? isDark
            ? "border-b border-white/10 bg-[#111315]/85 text-white"
            : "border-b border-black/10 bg-[#FAF8F5]/85 text-[#171717]"
          : "navbar"
      )}
    >
      <div className="container">
        <div className="flex h-20 items-center justify-between gap-8">
          {/* Logo / Brand */}
          <Link
            href="#about"
            onClick={(e) => handleScrollTo(e, "#about", closeMenu)}
            className="shrink-0"
            aria-label="Foresee Consulting Services - Home"
          >
            <span className="text-2xl font-bold tracking-[-0.04em]">
              <span
                className={cn(
                  "transition-colors duration-300",
                  isClients ? (isDark ? "text-white" : "text-[#171717]") : ""
                )}
              >
                FORE
              </span>
              <span className="text-brand">SEE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {SITE.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={cn(
                  "nav-link transition-colors duration-300",
                  isClients
                    ? isDark
                      ? "!text-white/90 hover:!text-white font-medium"
                      : "!text-[#171717] hover:!text-brand-red font-medium"
                    : ""
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="btn-primary hidden sm:inline-flex"
          >
            Let's Talk
            <ArrowUpRight className="size-4" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden",
              isClients
                ? isDark
                  ? "border-white/20 bg-[#111315] text-white"
                  : "border-black/10 bg-white text-[#171717]"
                : "border-border bg-white text-[#171717]"
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 lg:hidden",
            isOpen
              ? "max-h-[500px] pb-6 opacity-100"
              : "max-h-0 opacity-0"
          )}
        >
          <nav
            className={cn(
              "flex flex-col gap-1 border-t pt-4",
              isClients && isDark ? "border-white/10" : "border-border"
            )}
            aria-label="Mobile navigation"
          >
            {SITE.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href, closeMenu)}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                  isClients && isDark
                    ? "text-white/80 hover:bg-white/10 hover:text-white"
                    : "hover:bg-brand-red-light hover:text-brand-red"
                )}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact", closeMenu)}
              className="btn-primary mt-3 w-full"
            >
              Let's Talk
              <ArrowUpRight className="size-4" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}