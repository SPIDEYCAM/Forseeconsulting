import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { SITE } from "@/constants/site";
import Container from "@/components/ui/Container";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white"
    >
      <Container>
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-24">
          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <p className="eyebrow">
              {SITE.about.eyebrow}
            </p>

            <h1 className="mt-7 max-w-4xl text-[clamp(3.25rem,7vw,6.75rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              <span className="font-normal text-[0.85em]">Connecting</span>{" "}
              <span className="font-accent font-normal text-brand text-[1.08em] px-1 inline-block">
                businessess 
              </span>{" "}
              <br />
          
              <span className="text-brand">
                with the right talent.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.7] text-ink-light">
              {SITE.about.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#services"
                className="btn-primary"
              >
                Explore Services
                <ArrowDownRight className="size-4" />
              </Link>

              <Link
                href="#contact"
                className="btn-secondary"
              >
                Let's Talk
                <ArrowUpRight className="size-4" />
              </Link>
            </div>

            <div className="mt-14 flex items-center gap-4 border-t border-border pt-6">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-light">
                Executive Search
              </span>

              <span className="h-1 w-1 rounded-full bg-brand-red" />

              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-light">
                Recruitment
              </span>

              <span className="h-1 w-1 rounded-full bg-brand-red" />

              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-light">
                Talent Advisory
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-brand-teal-light">
              <Image
                src="/images/d220fb2535.jpg"
                alt="About Foresee Consulting"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/50 bg-white/85 p-6 shadow-soft backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red">
                  Our Reach
                </p>

                <div className="mt-3 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-3xl font-semibold tracking-[-0.04em] text-ink">
                      India
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      Pan-India recruitment
                    </p>
                  </div>

                  <div className="h-10 w-px bg-border" />

                  <div>
                    <p className="text-3xl font-semibold tracking-[-0.04em] text-ink">
                      Middle East
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      International reach
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative detail */}
            <div className="absolute -bottom-5 -left-5 -z-0 hidden size-24 rounded-full bg-brand-red lg:block" />

            <div className="absolute -right-4 -top-4 hidden size-20 rounded-full border border-brand-teal lg:block" />
          </div>
        </div>
      </Container>
    </section>
  );
}