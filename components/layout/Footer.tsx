import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SITE } from "@/constants/site";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      <Container>
        <div className="py-16 lg:py-20">
          {/* Top */}
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr_0.6fr] lg:gap-16">
            {/* Brand */}
            <div>
              <Link
                href="#about"
                className="inline-block text-2xl font-bold tracking-[-0.05em]"
              >
                FORESEE
              </Link>

              <p className="mt-5 max-w-md text-sm leading-[1.7] text-white/55">
                {SITE.footer.tagline}
              </p>

              <Link
                href="#contact"
                className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white"
              >
                Start a conversation

                <span className="flex size-8 items-center justify-center rounded-full bg-brand-red transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">
                Navigation
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                {SITE.navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="w-fit text-sm text-white/65 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">
                Contact
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm">
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="break-all text-white/65 transition-colors duration-200 hover:text-white"
                >
                  {SITE.contact.email}
                </a>

                <a
                  href={`mailto:${SITE.contact.alternateEmail}`}
                  className="break-all text-white/65 transition-colors duration-200 hover:text-white"
                >
                  {SITE.contact.alternateEmail}
                </a>

                <a
                  href={`https://wa.me/91${SITE.contact.whatsapp.replace(
                    /\D/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-white/65 transition-colors duration-200 hover:text-white"
                >
                  WhatsApp
                </a>

                <p className="mt-2 leading-relaxed text-white/45">
                  {SITE.contact.address}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/35">
              {SITE.footer.copyright}
            </p>

            <p className="text-xs uppercase tracking-[0.12em] text-white/30">
              India · Middle East
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}