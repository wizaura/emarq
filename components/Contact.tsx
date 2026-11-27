
"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  LoaderCircle,
} from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full bg-transparent text-sm text-[#090909] outline-none placeholder:text-[#090909]/25";

const labelClass =
  "mb-2 block text-[10px] uppercase tracking-[0.15em] text-[#090909]/40";

const fieldClass = "border-b border-[#090909]/20 pb-3";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      details: String(formData.get("details") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your enquiry. Please try again."
        );
      }

      setStatus("success");
      setMessage(
        result.message || "Thank you! Your enquiry has been sent successfully."
      );
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section
      id="contact"
      className="bg-[#F7F7F5] px-4 py-20 md:px-8 lg:px-12"
    >
      <div className="relative overflow-hidden text-[#090909]">
        <div className="relative px-6 md:px-10 lg:px-16">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#090909]/15 pb-5">
            <div className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#44345D]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#090909]/55">
                Let&apos;s Talk
              </span>
            </div>
          </div>

          {/* Main CTA */}
          <div className="grid gap-10 py-16 md:py-20 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <h2 className="max-w-6xl text-[clamp(3.5rem,8vw,8.5rem)] font-medium leading-[0.84] tracking-[-0.06em]">
              Let&apos;s create
              <br />
              something that
              <br />
              <span className="text-[#44345D]">leaves a mark.</span>
            </h2>

            <div className="max-w-sm lg:pb-2">
              <p className="text-sm text-justify leading-7 text-[#090909]/60 md:text-base">
                Whether you are building a new brand, planning an activation,
                strengthening your digital presence or looking for a creative
                production partner, we would love to hear about your next
                project.
              </p>

              <a
                href="#enquiry"
                className="group mt-7 inline-flex items-center gap-3 border-b border-[#090909] pb-2 text-xs font-medium uppercase tracking-[0.16em]"
              >
                Start a Conversation
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>

          {/* Contact details + form */}
          <div
            id="enquiry"
            className="grid scroll-mt-24 border-t border-[#090909]/15 lg:grid-cols-[0.75fr_1.25fr]"
          >
            {/* Contact details */}
            <div className="border-b border-[#090909]/15 py-10 lg:border-b-0 lg:border-r lg:py-14 lg:pr-14">
              <p className="mb-8 text-[10px] uppercase tracking-[0.2em] text-[#090909]/40">
                Direct Contact
              </p>

              {/* Phone */}
              <a
                href="tel:+971521569430"
                className="group flex items-center justify-between border-b border-[#090909]/15 py-5"
              >
                <div className="flex items-center gap-4">
                  <Phone size={16} strokeWidth={1.5} className="text-[#44345D]" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#090909]/40">
                      Phone
                    </p>
                    <p className="mt-1 text-sm md:text-base">
                      +971 52 156 9430
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[#090909]/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {/* Email */}
              <a
                href="mailto:info@emarq.ae"
                className="group flex items-center justify-between border-b border-[#090909]/15 py-5"
              >
                <div className="flex items-center gap-4">
                  <Mail size={16} strokeWidth={1.5} className="text-[#44345D]" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#090909]/40">
                      Email
                    </p>
                    <p className="mt-1 text-sm md:text-base">
                      info@emarq.ae
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[#090909]/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {/* Location */}
              <div className="border-b border-[#090909]/15 py-5">
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#090909]/40">
                  Location
                </p>
                <p className="mt-1 text-sm md:text-base">Dubai, UAE</p>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/971521569430"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-between bg-[#090909] px-5 py-4 text-white transition-colors duration-300 hover:bg-[#44345D]"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle size={17} strokeWidth={1.5} />
                  <span className="text-xs font-medium uppercase tracking-[0.14em]">
                    Chat on WhatsApp
                  </span>
                </div>
                <ArrowUpRight size={16} />
              </a>

              {/* Socials */}
              <div className="mt-10">
                <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#090909]/40">
                  Follow Emarq
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  <Link
                    href="#"
                    className="text-xs uppercase tracking-[0.14em] text-[#090909]/55 transition-colors hover:text-[#44345D]"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="#"
                    className="text-xs uppercase tracking-[0.14em] text-[#090909]/55 transition-colors hover:text-[#44345D]"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="#"
                    className="text-xs uppercase tracking-[0.14em] text-[#090909]/55 transition-colors hover:text-[#44345D]"
                  >
                    Facebook
                  </Link>
                </div>
              </div>
            </div>

            {/* Enquiry form */}
            <div className="py-10 lg:py-14 lg:pl-14">
              <div className="mb-10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#090909]/40">
                  Project Enquiry
                </p>
                <h3 className="mt-3 max-w-lg text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                  Tell us a little about your project.
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className={fieldClass}>
                    <label htmlFor="name" className={labelClass}>
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      maxLength={100}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className={fieldClass}>
                    <label htmlFor="company" className={labelClass}>
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Company name"
                      maxLength={150}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div className={fieldClass}>
                    <label htmlFor="email" className={labelClass}>
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      maxLength={254}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className={fieldClass}>
                    <label htmlFor="phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+971..."
                      maxLength={40}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className={fieldClass}>
                  <label htmlFor="service" className={labelClass}>
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    required
                    className="w-full appearance-none bg-transparent text-sm text-[#090909] outline-none"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Social Media &amp; Content</option>
                    <option>Performance Marketing</option>
                    <option>Branding &amp; Visual Identity</option>
                    <option>Brand Activation</option>
                    <option>Personalisation &amp; Gifting</option>
                    <option>Creative Production</option>
                    <option>Printing Services</option>
                    <option>Fit-Out Services</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className={fieldClass}>
                  <label htmlFor="details" className={labelClass}>
                    Project Details *
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    minLength={10}
                    maxLength={5000}
                    required
                    placeholder="Tell us about your project, goals or what you have in mind..."
                    className={`${inputClass} resize-y leading-6`}
                  />
                </div>

                {/* Submission feedback */}
                {message && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`flex items-start gap-3 text-sm leading-6 ${
                      status === "success"
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle2 size={18} className="mt-1 shrink-0" />
                    ) : (
                      <AlertCircle size={18} className="mt-1 shrink-0" />
                    )}
                    <p>{message}</p>
                  </div>
                )}

                {/* Submit */}
                <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-[11px] leading-5 text-[#090909]/40">
                    We&apos;ll review your enquiry and get back to you with
                    the next steps.
                  </p>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group flex shrink-0 items-center justify-center gap-4 bg-[#44345D] px-7 py-4 text-xs font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#090909] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        Sending
                        <LoaderCircle size={16} className="animate-spin" />
                      </>
                    ) : status === "success" ? (
                      <>
                        Sent Successfully
                        <CheckCircle2 size={16} />
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
