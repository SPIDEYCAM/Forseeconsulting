import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SITE } from "@/constants/site";
import Container from "@/components/ui/Container";

const serviceGroups = [
  {
    number: "01",
    title: "Executive Search",
    services: [
      "Executive Search & Leadership Hiring",
      "Mid & Senior Level Recruitment",
    ],
  },
  {
    number: "02",
    title: "Specialist Hiring",
    services: [
      "Niche & Critical Position Hiring",
    ],
  },
  {
    number: "03",
    title: "Manufacturing & Volume",
    services: [
      "Plant & Manufacturing Hiring",
      "Bulk Hiring",
    ],
  },
  {
    number: "04",
    title: "Talent Intelligence",
    services: [
      "Market Mapping & Talent Research",
      "Salary Benchmarking",
    ],
  },
  {
    number: "05",
    title: "Recruitment Advisory",
    services: [
      "Recruitment Process Consulting",
      "Offer Management & Joining Follow-up",
    ],
  },
  {
    number: "06",
    title: "HR & Talent Consulting",
    services: [
      "HR Advisory & Talent Consulting",
      "Training Needs",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-brand-cream"
    >
      {/* Subtle transition glow */}
      <div className="pointer-events-none absolute -right-40 top-20 size-[500px] rounded-full bg-brand-teal/10 blur-3xl" />

      <Container>
        <div className="relative py-24 lg:py-32">
          {/* Intro */}
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="eyebrow">
                What We Do
              </p>

              <h2 className="mt-5 max-w-xl text-[clamp(2.75rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#171717]">
                Talent solutions built around your business.
              </h2>
            </div>

            <div className="lg:pb-2 lg:pl-12">
              <p className="max-w-xl text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.65] text-[#737373]">
                From leadership search to specialist and volume hiring,
                we support businesses with focused recruitment and talent
                advisory solutions.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mt-20 border-t border-[#171717]/15">
            {serviceGroups.map((group) => (
              <div
                key={group.number}
                className="group grid gap-6 border-b border-[#171717]/15 py-8 transition-all duration-300 lg:grid-cols-[80px_0.8fr_1.2fr] lg:items-start lg:gap-10 lg:py-10"
              >
                {/* Number */}
                <span className="text-sm font-semibold tracking-[0.08em] text-brand-red">
                  {group.number}
                </span>

                {/* Category */}
                <h3 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-semibold leading-tight tracking-[-0.04em] text-[#171717] transition-transform duration-300 group-hover:translate-x-2">
                  {group.title}
                </h3>

                {/* Services */}
                <div className="space-y-3 lg:max-w-lg">
                  {group.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-start gap-3 text-[15px] leading-[1.5] text-[#404040]"
                    >
                      <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-brand-red" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm leading-relaxed text-[#737373]">
              Looking for a specific role or hiring solution?
              Let's discuss your requirement.
            </p>

            <Link
              href="#contact"
              className="group inline-flex w-fit items-center gap-3 text-sm font-semibold text-[#171717]"
            >
              Discuss your requirement

              <span className="flex size-9 items-center justify-center rounded-full bg-brand-red text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="size-4" />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}         