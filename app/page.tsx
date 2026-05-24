import Link from "next/link";

const insideItems = [
  "AGENTS.md template",
  "CLAUDE.md / Cursor rules template",
  "Builder prompt template",
  "Reviewer prompt template",
  "Architecture doc template",
  "Critical flows checklist",
  "Security boundaries checklist",
  "Schema contracts checklist",
  "Pre-deploy checklist",
  "GitHub Actions starter",
  "Gitleaks setup guide",
  "k6 smoke test template",
  "“How to use it after every AI coding prompt” guide",
];

const audience = [
  {
    title: "Solo founders",
    body: "Ship faster without shipping disconnected vibe code.",
  },
  {
    title: "Non-technical founders",
    body: "Get a structured way to review AI-generated changes.",
  },
  {
    title: "Designers building SaaS",
    body: "Add engineering guardrails without becoming an engineer.",
  },
  {
    title: "Indie hackers",
    body: "A tool-agnostic review system that fits your stack.",
  },
  {
    title: "Small agencies",
    body: "Standardize AI review across client repos.",
  },
  {
    title: "Vibe coders",
    body: "Works with Claude, Codex, Cursor, Windsurf, or similar tools.",
  },
];

const steps = [
  {
    n: "01",
    title: "Build the change",
    body: "Use the builder prompt to scope, plan, and implement with context the AI can actually keep.",
  },
  {
    n: "02",
    title: "Review the diff",
    body: "Run the reviewer prompt against the full diff — not just the file the AI touched.",
  },
  {
    n: "03",
    title: "Check critical flows",
    body: "Walk the critical flows checklist: auth, billing, data writes, schema, security boundaries.",
  },
  {
    n: "04",
    title: "Run automated checks",
    body: "Trigger CI: type-check, build, gitleaks, k6 smoke tests.",
  },
  {
    n: "05",
    title: "Commit only when it passes",
    body: "Block the commit until the review returns PASS or PASS WITH WARNINGS you accept.",
  },
];

const statuses = [
  {
    label: "PASS",
    body: "Safe to commit.",
    tone: "from-emerald-400/20 to-emerald-500/5 border-emerald-400/40 text-emerald-300",
    dot: "bg-emerald-400",
  },
  {
    label: "PASS WITH WARNINGS",
    body: "Review follow-ups.",
    tone: "from-amber-400/20 to-amber-500/5 border-amber-400/40 text-amber-300",
    dot: "bg-amber-400",
  },
  {
    label: "BLOCKED",
    body: "Fix before push/deploy.",
    tone: "from-rose-400/20 to-rose-500/5 border-rose-400/40 text-rose-300",
    dot: "bg-rose-400",
  },
];

const faqs = [
  {
    q: "Does this replace a developer?",
    a: "No. It helps solo founders and AI-assisted builders review changes more systematically before commit or deploy.",
  },
  {
    q: "Does it work with Claude, Codex, Cursor, Windsurf, and other AI coding tools?",
    a: "Yes. It is tool-agnostic because it is based on repo instructions, prompts, checklists, and automated checks.",
  },
  {
    q: "Is this a SaaS subscription?",
    a: "No. The first version is a one-time digital kit.",
  },
  {
    q: "What problem does it solve?",
    a: "It helps catch AI-generated changes that break architecture, auth, billing, schemas, security boundaries, or critical flows.",
  },
  {
    q: "Can I use it with my existing app?",
    a: "Yes. You add the templates and docs to your repo, then use the review prompt after each AI coding change.",
  },
  {
    q: "Will this guarantee my app is secure?",
    a: "No. It reduces risk, but it does not replace professional engineering or security review.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background orbs */}
      <div
        aria-hidden
        className="orb left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 bg-emerald-500/30"
      />
      <div
        aria-hidden
        className="orb right-[-120px] top-[300px] h-[360px] w-[360px] bg-teal-500/20"
      />

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              For solo founders building with AI
            </span>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Make AI <span className="emerald-text">check the AI</span> before
              you ship.
            </h1>
            <p className="mt-6 text-pretty text-lg text-gray-400 md:text-xl">
              VibeCode Safety Kit gives you the prompts, checklists, repo
              rules, and pre-deploy workflow to review AI-generated code
              against your whole app — not just the one file it changed.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="#pricing" className="btn-primary">
                Get the kit
              </Link>
              <Link href="#whats-inside" className="btn-secondary">
                See what&apos;s inside
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              One-time purchase. No subscription required.
            </p>
          </div>

          {/* Status preview */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
            {statuses.map((s) => (
              <div
                key={s.label}
                className={`glass rounded-2xl border bg-gradient-to-b p-5 ${s.tone}`}
              >
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider">
                  <span className={`h-2 w-2 rounded-full ${s.dot}`} />
                  {s.label}
                </div>
                <p className="mt-2 text-sm text-gray-300">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              AI can write code fast.
              <br />
              <span className="gradient-text">
                That doesn&apos;t mean it&apos;s safe to ship.
              </span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                t: "Works in one file, breaks the app",
                b: "AI edits the file you asked about — and silently breaks the route, the schema, or the auth boundary it didn't read.",
              },
              {
                t: "No architecture memory",
                b: "Without repo rules and shared context, every prompt starts from scratch and forgets your conventions.",
              },
              {
                t: "The final 20% is where risk lives",
                b: "Auth, billing, secrets, and schema drift fail in production — long after the demo looked fine.",
              },
            ].map((c) => (
              <div key={c.t} className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white">{c.t}</h3>
                <p className="mt-2 text-sm text-gray-400">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="relative border-t border-white/5 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              How it works
            </h2>
            <p className="mt-3 text-gray-400">
              A simple loop you run after every AI coding change.
            </p>
          </div>
          <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-5">
            {steps.map((s) => (
              <li key={s.n} className="glass rounded-2xl p-5">
                <div className="text-xs font-mono text-emerald-300">{s.n}</div>
                <div className="mt-2 font-semibold text-white">{s.title}</div>
                <p className="mt-2 text-sm text-gray-400">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {statuses.map((s) => (
              <div
                key={s.label}
                className={`glass rounded-xl border bg-gradient-to-b p-4 ${s.tone}`}
              >
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider">
                  <span className={`h-2 w-2 rounded-full ${s.dot}`} />
                  {s.label}
                </div>
                <p className="mt-1 text-sm text-gray-300">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section id="whats-inside" className="relative border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              What&apos;s inside
            </h2>
            <p className="mt-3 text-gray-400">
              Everything you need to review AI-generated changes against your
              whole app.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {insideItems.map((item) => (
              <div
                key={item}
                className="glass flex items-start gap-3 rounded-xl p-4"
              >
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-emerald-400 shadow-glow" />
                <span className="text-sm text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Who it&apos;s for
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {audience.map((a) => (
              <div key={a.title} className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white">{a.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{a.body}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center text-sm text-gray-400">
            This does not replace a senior developer. It gives you a practical
            guardrail system so you stop shipping disconnected vibe code.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="relative border-t border-white/5 bg-gradient-to-b from-transparent to-emerald-500/[0.03]"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              One kit. One price.
            </h2>
            <p className="mt-3 text-gray-400">
              No subscription. No seats. Lifetime access to the current kit.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-xl">
            <div className="glass relative rounded-3xl p-8 shadow-glow">
              <div className="absolute inset-x-0 -top-px mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
              <div className="text-sm font-medium uppercase tracking-wider text-emerald-300">
                VibeCode Safety Kit
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-semibold text-white">$49</span>
                <span className="text-gray-400">one-time</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {[
                  "All templates",
                  "All prompt workflows",
                  "All checklists",
                  "CI / Gitleaks / k6 starter docs",
                  "Usage guide",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-emerald-400 shadow-glow" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/success"
                className="btn-primary mt-8 w-full"
              >
                Get the kit
              </Link>
              <p className="mt-3 text-center text-xs text-gray-500">
                Checkout coming soon — secure payments via Stripe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Frequently asked
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="glass group rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-white">
                  <span className="font-medium">{f.q}</span>
                  <span className="text-emerald-300 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-400">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Before you commit, push, or deploy —{" "}
            <span className="emerald-text">run the review.</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <Link href="/success" className="btn-primary">
              Get the kit
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-400">Make AI check the AI.</p>
        </div>
      </section>
    </div>
  );
}
