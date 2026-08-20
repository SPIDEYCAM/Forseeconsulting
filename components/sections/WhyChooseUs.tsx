import { ArrowRight } from "lucide-react";

import { SITE } from "@/constants/site";
import Container from "@/components/ui/Container";

export default function WhyChooseUs() {
  return (
    <section
      id="why-foresee"
      className="relative overflow-hidden bg-brand-teal-dark text-white"
    >
      {/* Decorative graphic */}
      <div className="pointer-events-none absolute -right-32 top-1/2 hidden size-[520px] -translate-y-1/2 rounded-full border border-white/10 lg:block">
        <div className="absolute inset-12 rounded-full border border-white/10" />
        <div className="absolute inset-24 rounded-full border border-white/10" />
        <div className="absolute inset-36 rounded-full border border-brand-teal/20" />
      </div>

      <Container>
        <div className="relative py-24 lg:py-32">
          {/* Opening statement */}
          <div className="max-w-5xl">
            <p className="eyebrow text-brand-teal">
              Why Foresee
            </p>

            <h2 className="font-playfair mt-7 text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              Not just a
              <br />
              <span className="text-brand-teal font-sans">
                candidate.
              </span>
              <br />
              The right fit.
            </h2>
          </div>

          {/* Divider */}
          <div className="my-16 h-px w-full bg-white/15 lg:my-20" />

          {/* Intro + points */}
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="max-w-sm text-base leading-[1.7] text-white/65">
                Our approach combines sector expertise, responsiveness
                and a consultative understanding of what businesses
                actually need from their talent.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-brand-teal">
                <span className="flex size-9 items-center justify-center rounded-full border border-brand-teal/40">
                  <ArrowRight className="size-4" />
                </span>

                <span>Built around long-term fit</span>
              </div>
            </div>

            {/* Differentiators */}
            <div className="grid gap-x-12 gap-y-0 sm:grid-cols-2">
              {SITE.whyChooseUs.map((item, index) => (
                <div
                  key={item.title}
                  className="group border-t border-white/15 py-7"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="text-xs font-semibold tracking-[0.12em] text-brand-teal">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="mt-1 size-2 rounded-full bg-brand-red opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-[1.6] text-white/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom commitment */}
          <div className="mt-16 border-t border-white/15 pt-8 lg:mt-20 lg:flex lg:items-end lg:justify-between">
            <p className="max-w-2xl text-[clamp(1.25rem,2vw,1.75rem)] font-medium leading-[1.3] tracking-[-0.025em] text-white/90">
              Strong relationships. Clear communication.
              Focused execution. Better hiring outcomes.
            </p>

            <span className="mt-6 block text-xs font-bold uppercase tracking-[0.14em] text-brand-teal lg:mt-0">
              India · Middle East
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}