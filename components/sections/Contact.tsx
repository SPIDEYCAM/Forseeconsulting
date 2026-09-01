"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Mail, MessageCircle } from "lucide-react";

import { SITE } from "@/constants/site";
import Container from "@/components/ui/Container";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const whatsappNumber = SITE.contact.whatsapp.replace(/\D/g, "");

  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(
    "Hi Foresee Consulting Services, I would like to discuss a hiring requirement."
  )}`;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""
    );

    formData.append(
      "subject",
      "New Hiring Enquiry — Forsee Consulting Services"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        form.reset();
        setSubmitted(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-brand-red text-white"
    >
      {/* Decorative graphic */}
      <div className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -bottom-48 left-1/4 size-[420px] rounded-full bg-brand-teal/15 blur-3xl" />

      <Container>
        <div className="relative py-24 lg:py-32">
          {/* Intro */}
          <div className="max-w-5xl">
            <p className="eyebrow text-white">
              {SITE.contact.eyebrow}
            </p>

            <h2 className="mt-7 max-w-4xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              {SITE.contact.title}
            </h2>

            <p className="mt-7 max-w-xl text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.65] text-white/75">
              {SITE.contact.description}
            </p>
          </div>

          {/* Contact area */}
          <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            {/* Direct contact */}
            <div className="lg:pt-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">
                Prefer a direct conversation?
              </p>

              <div className="mt-7 space-y-4">
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="group flex items-center gap-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 transition-colors duration-300 group-hover:bg-white group-hover:text-brand-red">
                    <Mail className="size-4" />
                  </span>

                  <span className="text-sm font-medium break-all text-white/90">
                    {SITE.contact.email}
                  </span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 transition-colors duration-300 group-hover:bg-white group-hover:text-brand-red">
                    <MessageCircle className="size-4" />
                  </span>

                  <span className="text-sm font-medium text-white/90">
                    WhatsApp
                  </span>
                </a>
              </div>

              <div className="mt-12 border-t border-white/15 pt-6">
                <p className="text-xs uppercase tracking-[0.12em] text-white/45">
                  Based in
                </p>

                <p className="mt-2 text-sm font-medium text-white/85">
                  {SITE.contact.address}
                </p>

                <p className="mt-1 text-sm text-white/60">
                  Serving India & Middle East
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-[2rem] bg-white p-6 text-[#171717] sm:p-8 lg:p-10">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center px-4 py-8">
                  <span className="flex size-16 items-center justify-center rounded-full bg-brand-red text-white">
                    <Check className="size-7" />
                  </span>

                  <h3 className="mt-8 text-3xl font-semibold tracking-[-0.04em]">
                    Thank you.
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#737373]">
                    Your enquiry has been received. Our team will
                    get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold uppercase tracking-[0.1em] text-[#404040]"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="mt-2 h-12 w-full border-b border-[#171717]/15 bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-[#737373]/60 focus:border-brand-red"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="text-xs font-semibold uppercase tracking-[0.1em] text-[#404040]"
                      >
                        Company
                      </label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        className="mt-2 h-12 w-full border-b border-[#171717]/15 bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-[#737373]/60 focus:border-brand-red"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-[0.1em] text-[#404040]"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-2 h-12 w-full border-b border-[#171717]/15 bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-[#737373]/60 focus:border-brand-red"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="text-xs font-semibold uppercase tracking-[0.1em] text-[#404040]"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="mt-2 h-12 w-full border-b border-[#171717]/15 bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-[#737373]/60 focus:border-brand-red"
                        placeholder="+91"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="requirement"
                      className="text-xs font-semibold uppercase tracking-[0.1em] text-[#404040]"
                    >
                      Hiring Requirement
                    </label>

                    <input
                      id="requirement"
                      name="requirement"
                      type="text"
                      required
                      className="mt-2 h-12 w-full border-b border-[#171717]/15 bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-[#737373]/60 focus:border-brand-red"
                      placeholder="What role or talent are you looking for?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-[0.1em] text-[#404040]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="mt-3 w-full resize-none rounded-xl border border-[#171717]/10 bg-[#fafafa] p-4 text-sm outline-none transition-colors placeholder:text-[#737373]/60 focus:border-brand-red"
                      placeholder="Tell us briefly about your requirement..."
                    />
                  </div>

                  {error && (
                    <p className="text-xs font-medium text-brand-red">
                      {error}
                    </p>
                  )}

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xs text-xs leading-relaxed text-[#737373]">
                      By submitting this form, you agree that Forsee Consulting Services may use the information provided to respond to your enquiry. See our{" "}
                      <Link
                        href="/privacy"
                        className="font-medium text-brand-red underline hover:text-brand-red-dark"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Sending..." : "Send Enquiry"}
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}