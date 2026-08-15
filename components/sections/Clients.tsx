import { ArrowUpRight } from "lucide-react";

import { SITE } from "@/constants/site";
import Container from "@/components/ui/Container";

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
          <div className="mt-16">
            <div className="grid min-h-[260px] place-items-center rounded-[2rem] border border-[#171717]/10 bg-brand-cream px-6 py-16">
              <div className="max-w-xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-red">
                  Client Partners
                </p>

                <p className="mt-4 text-[clamp(1.5rem,2.5vw,2.25rem)] font-semibold leading-tight tracking-[-0.04em] text-[#171717]">
                  Your trusted partners belong here.
                </p>

                <p className="mx-auto mt-4 max-w-md text-sm leading-[1.6] text-[#737373]">
                  Client logos will be added once the final
                  brand assets are provided.
                </p>
              </div>
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

          {/* Small transition */}
          <div className="mt-12 flex items-center justify-between">
            <p className="text-sm text-[#737373]">
              Ready to discuss your next hiring requirement?
            </p>

            <a
              href="#contact"
              className="group hidden items-center gap-2 text-sm font-semibold text-[#171717] sm:flex"
            >
              Start a conversation

              <span className="flex size-8 items-center justify-center rounded-full bg-[#171717] text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight className="size-3.5" />
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}