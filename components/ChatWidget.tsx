"use client";

import { useEffect, useRef, useState } from "react";
import { STRIPE_PAYMENT_LINK, isExternalCheckout } from "@/lib/checkout";

type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
  {
    q: "What do I get?",
    a: "You get repo instruction templates, builder prompts, reviewer prompts, pre-commit/pre-push/pre-deploy checklists, critical flow checklists, security guardrails, and starter docs for checks like Gitleaks, GitHub Actions, k6, and Playwright.",
  },
  {
    q: "Does this replace a developer?",
    a: "No. It does not replace a senior developer, QA process, or security audit. It gives AI-assisted builders a practical review system to catch more issues before commit, push, or deploy.",
  },
  {
    q: "Does it work with Cursor?",
    a: "Yes. The kit is tool-agnostic and includes repo rules and prompt workflows you can adapt for Cursor and similar AI coding tools.",
  },
  {
    q: "Does it work with Claude or Codex?",
    a: "Yes. The kit is designed for AI-assisted coding workflows, including Claude, Codex, Cursor, Windsurf, Copilot, and similar tools.",
  },
  {
    q: "Is this a subscription?",
    a: "No. VibeCode Safety Kit is a one-time digital product. The launch price is $29.99.",
  },
  {
    q: "Can I use it with Supabase?",
    a: "Yes. The kit includes practical checklist guidance for common Supabase risks like RLS, exposed service role keys, storage rules, auth flows, and schema drift.",
  },
  {
    q: "Can I use it with Stripe?",
    a: "Yes. The kit includes billing and checkout safety checks for common issues like webhook validation, protected routes, checkout success flows, environment variables, and test/live mode mistakes.",
  },
  {
    q: "Will it guarantee my app is secure?",
    a: "No. No prompt or checklist can guarantee security. The kit helps reduce risk and improve your review workflow, but important apps should still get professional engineering and security review.",
  },
];

type Message =
  | { role: "user"; text: string }
  | { role: "bot"; text: string };

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const externalCheckout = isExternalCheckout(STRIPE_PAYMENT_LINK);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function ask(faq: FAQ) {
    setMessages((m) => [
      ...m,
      { role: "user", text: faq.q },
      { role: "bot", text: faq.a },
    ]);
  }

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Open Safety Kit guide chat"
        className={`fixed right-4 z-[60] flex items-center gap-2 rounded-full border border-violet-400/40 bg-gradient-to-br from-violetglow-500 to-violetglow-700 px-4 py-2.5 text-sm font-semibold text-white shadow-glow-lg transition hover:brightness-110 ${
          open ? "bottom-[28rem] sm:bottom-[30rem]" : "bottom-24 sm:bottom-6"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
        </svg>
        {open ? "Close" : "Ask about the kit"}
      </button>

      {/* Panel */}
      <div
        role="dialog"
        aria-label="Safety Kit Guide"
        aria-hidden={!open}
        className={`fixed bottom-4 right-4 z-[59] w-[min(380px,calc(100vw-2rem))] origin-bottom-right transition-all duration-200 ${
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="glass-strong flex h-[28rem] flex-col overflow-hidden rounded-2xl shadow-glow-lg sm:h-[30rem]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-black/30 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-violetglow-500 to-violetglow-700">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-white">
                  Safety Kit Guide
                </div>
                <div className="text-[11px] text-gray-400">
                  Quick answers before you buy.
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-3 py-3 text-sm"
          >
            {messages.length === 0 && (
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-gray-300">
                Hi! Tap a question below and I&apos;ll answer instantly.
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 leading-relaxed ${
                    m.role === "user"
                      ? "bg-gradient-to-br from-violetglow-500 to-violetglow-700 text-white"
                      : "border border-white/10 bg-white/[0.03] text-gray-200"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ chips */}
          <div className="border-t border-white/10 bg-black/30 px-3 py-3">
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
              Common questions
            </div>
            <div className="flex flex-wrap gap-1.5">
              {faqs.map((f) => (
                <button
                  key={f.q}
                  type="button"
                  onClick={() => ask(f)}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-gray-200 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                >
                  {f.q}
                </button>
              ))}
            </div>

            <a
              href={STRIPE_PAYMENT_LINK}
              {...(externalCheckout
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="btn-primary mt-3 w-full text-sm"
            >
              Get the Kit for $29.99
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
