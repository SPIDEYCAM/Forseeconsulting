"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SITE } from "@/constants/site";
import Container from "@/components/ui/Container";
import { handleScrollTo } from "@/lib/utils";

export default function Clients() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-white"
    >
      <Container>
        <div className="py-24 lg:py-32">
          {/* Header */}
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">
                Our Network
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-[clamp(2.75rem,5vw,5rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-[#171717]">
                Trusted relationships.
                <br />
                <span className="text-brand-red">
                  Built over time.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-[1.7] text-[#737373]">
                {SITE.clients.description}
              </p>
            </div>
          </div>

          {/* Trust statement */}
          <div className="mt-20 border-y border-[#171717]/10 py-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#404040]">
                Sector experience
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                {SITE.clients.items.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-5"
                  >
                    <span className="text-sm font-medium text-[#171717]">
                      {item}
                    </span>

                    {index < SITE.clients.items.length - 1 && (
                      <span className="size-1 rounded-full bg-brand-red" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Logo area */}
          <div className="mt-16 border-t border-[#171717]/10 pt-16 sm:pt-20">
            <div className="mb-12 text-center sm:mb-16">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-red">
                Trusted by leading organizations
              </p>

              <h3 className="text-3xl font-light uppercase tracking-[0.12em] text-[#171717] sm:text-4xl md:text-5xl">
                Our Clients
              </h3>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#666]">
                Valued organizations we have served across industries and sectors.
              </p>
            </div>

            <div className="grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
              {SITE.clients.logos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex h-24 w-full items-center justify-center p-4 transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={180}
                    height={72}
                    className="max-h-12 w-auto max-w-[140px] object-contain sm:max-h-14 sm:max-w-[160px]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom trust points */}
          <div className="mt-14 grid gap-8 border-b border-[#171717]/10 pb-14 sm:grid-cols-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-red">
                01
              </p>

              <p className="mt-3 text-base font-semibold text-[#171717]">
                Responsive communication
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-red">
                02
              </p>

              <p className="mt-3 text-base font-semibold text-[#171717]">
                Transparent relationships
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-red">
                03
              </p>

              <p className="mt-3 text-base font-semibold text-[#171717]">
                Focused on long-term fit
              </p>
            </div>
          </div>

          {/* Centered CTA to full Clients page */}
          <div className="mt-14 flex justify-center">
            <Link
              href="/clients"
              className="group inline-flex items-center gap-3.5 rounded-full border border-[#111315] bg-[#111315] px-7 py-3.5 text-sm font-semibold text-brand-red shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:shadow-lg"
            >
              <span className="text-brand-red">Explore All Clients &amp; Success Stories</span>
              <span className="flex size-7 items-center justify-center rounded-full bg-brand-red text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="size-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}