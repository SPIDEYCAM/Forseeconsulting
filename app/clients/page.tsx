import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Clients | Forsee Consulting Services",
  description:
    "Discover the leading organizations across Automotive, Manufacturing, FMCG, Engineering, and allied sectors that trust Forsee Consulting Services for executive search and recruitment.",
};

interface Client {
  name: string;
  src: string;
  logoClass?: string;
}

const clients: Client[] = [
  {
    name: "Goodyear",
    src: "/client_page/Goodyear Logo SVG.svg",
  },
  {
    name: "Exide",
    src: "/client_page/Exide.svg",
  },
  {
    name: "Apollo Tyres",
    src: "/client_page/Apollo_Tyres_logo.svg",
  },
  {
    name: "Bunge",
    src: "/client_page/Bunge_Limited_Logo.svg",
  },
  {
    name: "Tata Steel",
    src: "/client_page/Tata_Group_Logo.png",
    logoClass: "max-h-24 sm:max-h-30 max-w-[240px] sm:max-w-[300px]",
  },
  {
    name: "Bridgestone",
    src: "/client_page/Bridgestone_logo.svg",
  },
  {
    name: "Pepsi",
    src: "/client_page/pepsi-logo-svgrepo-com.svg",
    logoClass: "max-h-28 sm:max-h-36 max-w-[280px] sm:max-w-[360px]",
  },
  {
    name: "JK Tyre",
    src: "/client_page/jk-tyre-1.svg",
    logoClass: "max-h-36 sm:max-h-48 max-w-[95%] sm:max-w-[90%] scale-110 sm:scale-125",
  },
  {
    name: "Tata Motors",
    src: "/client_page/Tata_Motors_Logo.svg",
  },
  {
    name: "Schneider Electric",
    src: "/client_page/SchneiderElectric_Logo.svg",
  },
  {
    name: "V-Mart",
    src: "/client_page/V-Mart Logo SVG.svg",
  },
  {
    name: "Amara Raja",
    src: "/client_page/ARE&M.NS_BIG.svg",
  },
  {
    name: "Avery Weigh-Tronix",
    src: "/client_page/Avery_weigh-tronix_logo.png",
  },
  {
    name: "Dainik Bhaskar",
    src: "/client_page/Dainik_Bhaskar_Logo.svg",
  },
  {
    name: "GMR Group",
    src: "/client_page/cdnlogo.com_gmr-group-logo.svg",
    logoClass: "max-h-28 sm:max-h-36 max-w-[260px] sm:max-w-[340px] scale-125 sm:scale-140",
  },
  {
    name: "JK Paper",
    src: "/client_page/JKPAPER.NS_BIG.svg",
  },
  {
    name: "Norton",
    src: "/client_page/Norton.png",
  },
  {
    name: "Religare",
    src: "/client_page/RELIGARE.NS_BIG.svg",
  },
];

export default function ClientsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#111315] text-white">
      <Navbar variant="clients" />

      <main className="flex-1">
        {/* HERO / INTRODUCTION SECTION (DARK) */}
        <section id="clients" className="relative overflow-hidden bg-[#111315] pt-12 pb-16 lg:pt-20 lg:pb-24">
          <Container>
            {/* Navigation back link */}
            <div className="mb-8">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#a3a3a3] transition-colors duration-200 hover:text-white"
              >
                <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
                Back to Home
              </Link>
            </div>

            <div className="max-w-4xl">
              <p className="eyebrow text-brand-red">Our Network</p>

              <h1 className="mt-4 text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white">
                Our{" "}
                <span className="font-playfair font-normal text-brand-red">
                  Clients
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.65] text-[#a3a3a3]">
                Trusted by organizations across industries.
                <br className="hidden sm:block" />
                Building lasting relationships through expertise and results.
              </p>
            </div>
          </Container>
        </section>

        {/* EDITORIAL 2-COLUMN RULED CLIENT DIRECTORY SECTION (LIGHT) */}
        <section id="clients-grid" className="relative overflow-hidden bg-[#FAF8F5] py-20 text-[#171717] lg:py-28">
          <Container>
            <div className="grid grid-cols-1 border-t border-[#171717]/15 sm:grid-cols-2">
              {clients.map((client, index) => (
                <div
                  key={client.name}
                  className={cn(
                    "group relative flex aspect-[4/3] sm:aspect-square w-full flex-col items-center justify-between p-8 sm:p-12 border-b border-[#171717]/15 transition-colors duration-300 hover:bg-[#171717]/[0.025] motion-reduce:transform-none",
                    index % 2 === 0 ? "sm:border-r border-[#171717]/15" : ""
                  )}
                >
                  {/* Centered Logo */}
                  <div className="flex flex-1 w-full items-center justify-center py-6">
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={400}
                      height={200}
                      className={cn(
                        "w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]",
                        client.logoClass || "max-h-16 sm:max-h-20 max-w-[170px] sm:max-w-[220px]"
                      )}
                    />
                  </div>

                  {/* Company Name */}
                  <div className="pt-4 text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#525252] transition-colors duration-300 group-hover:text-[#171717]">
                      {client.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SUCCESS STORIES TRANSITION SECTION (DARK) */}
        <section id="success-stories" className="relative overflow-hidden bg-[#111315] py-16 text-white lg:py-24">
          <Container>
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow text-brand-red">Success Stories</p>

                <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,3rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-white">
                  How we've helped organizations
                  <br className="hidden sm:block" />
                  {" "}find the right people and build stronger teams.
                </h2>
              </div>

              <div className="shrink-0 md:pb-1">
                <Link
                  href="/#why-foresee"
                  className="group inline-flex items-center gap-2.5 text-base font-semibold text-brand-red transition-colors hover:text-brand-red-light"
                >
                  <span>Explore Stories</span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* CONTACT SECTION */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
