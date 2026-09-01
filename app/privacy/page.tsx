import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Forsee Consulting Services",
  description:
    "Privacy Policy for Forsee Consulting Services.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#171717]">
      <Navbar />

      <main className="flex-1">
        <Container>
          <div className="mx-auto max-w-4xl py-20 lg:py-28">
            {/* Back */}
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#737373] transition-colors duration-200 hover:text-brand-red"
            >
              <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
              Back to Home
            </Link>

            {/* Header */}
            <header className="mt-16 max-w-3xl lg:mt-20">
              <p className="eyebrow">Privacy</p>

              <h1 className="mt-5 font-playfair text-[clamp(3.5rem,7.5vw,6.5rem)] font-normal leading-[0.95] tracking-[-0.03em] text-[#171717]">
                Your{" "}
                <span className="font-sans font-medium uppercase tracking-[-0.04em] text-brand-red">
                  PRIVACY
                </span>
                <br />
                <span className="font-playfair">matters.</span>
              </h1>

              <div className="mt-8 flex flex-col gap-2 text-sm text-[#737373] sm:flex-row sm:items-center sm:gap-4">
                <span>Privacy Policy</span>
                <span className="hidden size-1 rounded-full bg-brand-red sm:block" />
                <span>Last updated: September 1, 2026</span>
              </div>
            </header>

            {/* Intro */}
            <div className="mt-20 max-w-2xl lg:mt-24">
              <p className="text-xl font-medium leading-[1.5] tracking-[-0.02em] text-[#303030] sm:text-2xl">
                Forsee Consulting Services respects your privacy and
                handles the information you share with us responsibly.
              </p>

              <p className="mt-6 text-base leading-[1.8] text-[#737373]">
                This page explains what information we collect when you
                contact us through this website, why we need it, and how
                we handle it.
              </p>
            </div>

            {/* Content */}
            <div className="mt-20 max-w-3xl space-y-16 lg:mt-28 lg:space-y-20">
              {/* Information */}
              <section>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red">
                  What you share
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-3xl">
                  Information you provide
                </h2>

                <p className="mt-5 text-base leading-[1.8] text-[#737373]">
                  When you contact us through the website, you may
                  provide your name, company name, email address, phone
                  number, hiring requirements, and anything else you
                  choose to include in your message.
                </p>
              </section>

              {/* Use */}
              <section>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red">
                  Why we use it
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-3xl">
                  How we use your information
                </h2>

                <p className="mt-5 text-base leading-[1.8] text-[#737373]">
                  We use the information you provide to respond to your
                  enquiry, understand your recruitment or talent
                  requirements, and communicate with you about our
                  services.
                </p>

                <p className="mt-5 text-base leading-[1.8] text-[#737373]">
                  Information may also be kept as part of our normal
                  business records or where we are required to do so by
                  law.
                </p>
              </section>

              {/* Enquiries */}
              <section>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red">
                  Website enquiries
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-3xl">
                  When you contact us
                </h2>

                <p className="mt-5 text-base leading-[1.8] text-[#737373]">
                  Information submitted through our contact form is
                  securely transmitted to our team by email so that we
                  can respond to your request.
                </p>

                <p className="mt-5 text-base leading-[1.8] text-[#737373]">
                  We use third-party services to help operate the
                  website and deliver enquiries. These services may
                  process information submitted through the website in
                  accordance with their own privacy policies.
                </p>
              </section>

              {/* Sharing */}
              <section>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red">
                  Your information
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-3xl">
                  How it is handled
                </h2>

                <p className="mt-5 text-base leading-[1.8] text-[#737373]">
                  We do not sell your personal information. Where
                  third-party services are needed to operate our website
                  or respond to enquiries, information is shared only
                  where necessary for those purposes.
                </p>
              </section>

              {/* Retention */}
              <section>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red">
                  Keeping information
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-3xl">
                  How long we keep it
                </h2>

                <p className="mt-5 text-base leading-[1.8] text-[#737373]">
                  We keep enquiry information for as long as reasonably
                  necessary to respond to enquiries, maintain relevant
                  business records, and meet applicable legal
                  requirements.
                </p>

                <p className="mt-5 text-base leading-[1.8] text-[#737373]">
                  When information is no longer needed, it may be
                  deleted or otherwise disposed of in accordance with
                  our normal business practices.
                </p>
              </section>

              {/* Security */}
              <section>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red">
                  Security
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-3xl">
                  Protecting what you share
                </h2>

                <p className="mt-5 text-base leading-[1.8] text-[#737373]">
                  We take reasonable steps to protect the information
                  we receive from unauthorized access, misuse, loss, or
                  disclosure.
                </p>

                <p className="mt-5 text-base leading-[1.8] text-[#737373]">
                  No online service can guarantee complete security, but
                  we take appropriate care in handling the information
                  entrusted to us.
                </p>
              </section>

              {/* Rights */}
              <section>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red">
                  Your choices
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-3xl">
                  Your privacy rights
                </h2>

                <p className="mt-5 text-base leading-[1.8] text-[#737373]">
                  Depending on applicable law, you may have the right to
                  ask about the personal information we hold about you,
                  request corrections, or request deletion where
                  applicable.
                </p>

                <p className="mt-5 text-base leading-[1.8] text-[#737373]">
                  If you have a privacy-related request, simply get in
                  touch with us using the contact details below.
                </p>
              </section>

              {/* Changes */}
              <section>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red">
                  Updates
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-3xl">
                  Changes to this policy
                </h2>

                <p className="mt-5 text-base leading-[1.8] text-[#737373]">
                  We may update this page from time to time. When we do,
                  the date at the top of the policy will be updated.
                </p>
              </section>

              {/* Contact */}
              <section className="relative overflow-hidden rounded-[2rem] bg-brand-cream px-7 py-9 sm:px-10 sm:py-11">
                <div className="max-w-xl">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red">
                    Questions?
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-3xl">
                    Talk to us.
                  </h2>

                  <p className="mt-4 text-base leading-[1.7] text-[#737373]">
                    If you have any questions about this policy or how
                    your information is handled, contact us directly.
                  </p>

                  <a
                    href="mailto:anamika@forseeconsultingservices.in"
                    className="mt-6 inline-flex text-sm font-semibold text-[#171717] underline decoration-brand-red underline-offset-4 transition-colors hover:text-brand-red"
                  >
                    anamika@forseeconsultingservices.in
                  </a>
                </div>
              </section>
            </div>

            {/* Return */}
            <div className="mt-20 lg:mt-28">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#171717] transition-colors hover:text-brand-red"
              >
                <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
                Return to Forsee
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}