"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          company: formData.get("company"),
        }),
      });

      if (!response.ok) {
        setState("error");
        return;
      }

      form.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="text-sm font-medium text-gray-200"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-300/60 focus:ring-2 focus:ring-violet-500/20"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="text-sm font-medium text-gray-200"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-300/60 focus:ring-2 focus:ring-violet-500/20"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-gray-200"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={3000}
          rows={6}
          className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-300/60 focus:ring-2 focus:ring-violet-500/20"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "submitting" ? "Sending..." : "Send Message"}
        </button>

        <p aria-live="polite" className="min-h-5 text-sm text-gray-300">
          {state === "success"
            ? "Message sent. I’ll get back to you soon."
            : state === "error"
              ? "Something went wrong. Please try again."
              : ""}
        </p>
      </div>

      <p className="text-xs leading-6 text-gray-500">
        No spam. Use this for product questions, access issues, or setup help.
      </p>
    </form>
  );
}
