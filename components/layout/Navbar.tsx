"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="flex h-20 items-center justify-between gap-8">
          {/* Logo / Brand */}
          <Link
            href="#about"
            onClick={closeMenu}
            className="shrink-0"
            aria-label="Foresee Consulting Services - Home"
          >
            <span className="text-xl font-bold tracking-[-0.04em]">
              FORESEE
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
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="#contact"
            className="btn-primary hidden sm:inline-flex"
          >
            Let's Talk
            <ArrowUpRight className="size-4" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-white lg:hidden"
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
            className="flex flex-col gap-1 border-t border-border pt-4"
            aria-label="Mobile navigation"
          >
            {SITE.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-brand-red-light hover:text-brand-red"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={closeMenu}
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