import { ArrowRight } from "lucide-react";

import { SITE } from "@/constants/site";
import Container from "@/components/ui/Container";

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-brand-teal-light"
    >
      <Container>
        <div className="relative py-24 lg:py-32">
          {/* Section intro */}
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="eyebrow text-brand-teal-dark">
                Industries Served
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-[clamp(2.75rem,5.5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-[#171717]">
                Expertise where
                <br />
                <span className="text-brand-teal-dark">
                  it matters most.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.65] text-[#404040]">
                Deep sector understanding helps us identify talent
                that fits the realities of your industry.
              </p>
            </div>
          </div>

          {/* Industry list */}
          <div className="mt-20 border-t border-[#2c687b]/25">
            {SITE.industries.map((industry, index) => (
              <div
                key={industry.title}
                className="group relative grid gap-5 border-b border-[#2c687b]/25 py-8 lg:grid-cols-[90px_1fr_auto] lg:items-center lg:gap-10 lg:py-10"
              >
                {/* Number */}
                <span className="text-sm font-semibold tracking-[0.12em] text-brand-red">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Industry */}
                <div>
                  <h3 className="text-[clamp(2rem,4vw,4.25rem)] font-semibold leading-none tracking-[-0.055em] text-[#171717] transition-transform duration-500 group-hover:translate-x-3">
                    {industry.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-[1.55] text-[#404040] lg:hidden">
                    {industry.description}
                  </p>
                </div>

                {/* Description */}
                <div className="hidden max-w-sm items-center gap-5 lg:flex">
                  <p className="text-sm leading-[1.55] text-[#404040]">
                    {industry.description}
                  </p>

                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#2c687b]/30 text-brand-teal-dark transition-all duration-300 group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white">
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Reach statement */}
          <div className="mt-14 flex flex-col gap-4 border-t border-[#2c687b]/25 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-[#404040]">
              Sector expertise across diverse business environments.
            </p>

            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-brand-teal-dark">
              <span>India</span>
              <span className="size-1 rounded-full bg-brand-red" />
              <span>Middle East</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}