import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import aiHumanizer from "@/assets/ai-humanizer.png.asset.json";
import heroMobile from "@/assets/hero-mobile.png.asset.json";
import logo from "@/assets/proofolio-logo.png.asset.json";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PROOFOLIO — Your potential, with proof." },
      {
        name: "description",
        content:
          "Positioning, LinkedIn, 30-day content, proof of work, resume, projects and a portfolio website — one connected professional presence for college students.",
      },
      { property: "og:title", content: "PROOFOLIO — Your potential, with proof." },
      {
        property: "og:description",
        content:
          "Your degree isn't your whole profile. Build a professional presence that shows what you can actually do.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Why it matters", href: "#why" },
  { label: "What's included", href: "#build" },
  { label: "Plans", href: "#plans" },
];

const YEARS = [
  { year: "1st Year", steps: "Explore → Learn → Build" },
  { year: "2nd Year", steps: "Build → Document → Publish" },
  { year: "3rd Year", steps: "Show → Refine → Get noticed" },
  { year: "Final Year", steps: "Apply → Interview → Demonstrate" },
];

const TOOLS = [
  { name: "LinkedIn", desc: "Professional identity, networking and visibility." },
  { name: "GitHub", desc: "Code, technical projects and development work." },
  { name: "Behance", desc: "Design work and visual case studies." },
  { name: "Dribbble", desc: "Design exploration and creative work." },
  { name: "Notion", desc: "Organised knowledge, projects and documentation." },
  { name: "Personal Website", desc: "Your own professional home on the internet." },
];

const FLOW = [
  {
    n: "01",
    title: "Positioning",
    desc: "What you should be known for, and where you're heading.",
  },
  {
    n: "02",
    title: "LinkedIn",
    desc: "Complete profile creation and optimisation built on that positioning.",
  },
  {
    n: "03",
    title: "30-Day Content",
    desc: "A personalised LinkedIn content system for your niche — ready to publish or schedule.",
  },
  {
    n: "04",
    title: "Proof of Work",
    desc: "The right platform set up for your field: GitHub, Behance, Notion, Dribbble or another fit.",
  },
  {
    n: "05",
    title: "Resume",
    desc: "An ATS-friendly resume written around your actual experience and direction.",
  },
  {
    n: "06",
    title: "2 Projects",
    desc: "Two portfolio projects built with guidance — real, visible proof, never fabricated employment.",
  },
];

const TRUST = [
  { k: "Personal", v: "We start with your goals, not a template." },
  { k: "Relevant", v: "Your platform stack depends on your field and target role." },
  { k: "Practical", v: "Real projects. Real proof. Clear presentation." },
  { k: "College-friendly", v: "Built around your existing college schedule." },
  { k: "Honest", v: "No job guarantees. No fake experience. No inflated promises." },
  { k: "Ownership", v: "Your professional identity stays yours, and keeps growing." },
];

const PLAN_1 = [
  "Complete LinkedIn profile creation & optimisation",
  "30-day LinkedIn content system, ready to schedule",
  "Relevant professional platform setup",
  "GitHub / Behance / Notion / Dribbble or another suitable platform",
  "Connected digital presence",
  "ATS-friendly resume",
  "Personal career positioning",
  "Two portfolio / demo projects, built with guidance",
];

const PLAN_2 = [
  "Custom portfolio website",
  "Personal domain-ready structure",
  "Custom design aligned with your positioning",
  "Portfolio project showcase",
  "Social profile integration",
  "Future project additions",
  "Editable portfolio content",
  "Portfolio admin panel to update work over time",
];

function Wordmark({ className = "h-8" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="PROOFOLIO — Your potential, with proof."
      className={`${className} w-auto logo-blend`}
    />
  );
}

function Cta({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "signal" | "quiet";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-colors rounded-sm";
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-signal",
    signal: "bg-signal text-signal-foreground hover:bg-primary",
    quiet: "border border-foreground/25 text-foreground hover:border-signal hover:text-signal",
  } as const;
  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </a>
  );
}

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="label mb-8 flex items-center gap-3">
      <span className="text-signal">{n}</span>
      <span className="h-px w-8 bg-border" aria-hidden="true" />
      {children}
    </p>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/90 backdrop-blur-sm transition-colors ${
        solid ? "border-b border-border" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" aria-label="PROOFOLIO home" className="shrink-0">
          <Wordmark className="h-14 md:h-16" />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {NAV.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-sm text-foreground/70 transition-colors hover:text-signal"
            >
              {i.label}
            </a>
          ))}
          <Cta href="#plans" className="px-5 py-3">
            Get started
          </Cta>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="md:hidden p-2 -mr-2"
        >
          <span className="sr-only">Menu</span>
          <span className="block space-y-1.5" aria-hidden="true">
            <span
              className={`block h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span className={`block h-px w-6 bg-foreground ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border px-6 pb-6 pt-2 md:hidden"
        >
          {NAV.map((i) => (
            <a
              key={i.href}
              href={i.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-4 text-base"
            >
              {i.label}
            </a>
          ))}
          <Cta href="#plans" className="mt-6 w-full" >
            Get started
          </Cta>
        </nav>
      )}
    </header>
  );
}

function Index() {
  return (
    <div id="top">
      <Nav />

      <main>
        {/* 01 — HERO */}
        <section className="mx-auto max-w-[1240px] px-6 pb-20 pt-16 md:px-10 md:pb-32 md:pt-28">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <Reveal as="p" className="label mb-10">
                A career presence system for college students
              </Reveal>
              <Reveal
                as="h1"
                delay={60}
                className="max-w-[15ch] text-[2.6rem] leading-[0.98] sm:text-6xl lg:text-[5.4rem]"
              >
                Your degree isn't your whole profile<span className="text-signal">.</span>
              </Reveal>
              <Reveal as="div" delay={140} className="mt-10 max-w-xl">
                <p className="text-xl leading-relaxed text-foreground md:text-[1.4rem]">
                  Build a professional presence that shows what you can actually do.
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  A personalised digital presence system for students — built around your field,
                  your goals and your college life.
                </p>
                <img
                  src={heroMobile.url}
                  alt="Student digital presence preview with LinkedIn, GitHub and portfolio cards"
                  className="mt-8 block w-full rounded-lg lg:hidden"
                />
              </Reveal>
              <Reveal as="div" delay={220} className="mt-12 flex flex-col gap-3 sm:flex-row">
                <Cta href="#plans" variant="signal">
                  Build my presence
                </Cta>
                <Cta href="#build" variant="quiet">
                  See what's included
                </Cta>
              </Reveal>
            </div>

            {/* Quiet structural diagram: the presence, connected */}
            <Reveal
              as="aside"
              delay={300}
              className="lg:col-span-4 lg:border-l lg:border-border lg:pl-10"
            >
              <p className="label mb-6">One connected presence</p>
              <ul className="space-y-0">
                {[
                  "Positioning",
                  "LinkedIn",
                  "Content",
                  "Projects",
                  "Proof of work",
                  "Resume",
                  "Portfolio",
                ].map((step, i) => (
                  <li
                    key={step}
                    className="flex items-baseline justify-between border-b border-border py-3.5 text-sm"
                  >
                    <span>{step}</span>
                    <span className="font-mono text-[0.7rem] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.16em] text-verified">
                <span aria-hidden="true">✓</span> Nothing disconnected
              </p>
            </Reveal>
          </div>
        </section>

        {/* 02 — WHY DIGITAL PRESENCE MATTERS */}
        <section id="why" className="border-t border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
            <Reveal>
              <p className="label mb-8 flex items-center gap-3 text-primary-foreground/50">
                <span className="text-signal">02</span>
                <span className="h-px w-8 bg-primary-foreground/25" aria-hidden="true" />
                Why digital presence matters
              </p>
              <h2 className="max-w-[24ch] text-4xl md:text-6xl">
                Your work shouldn't disappear after the assignment is submitted.
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
              <Reveal className="space-y-6 text-base leading-relaxed text-primary-foreground/75">
                <p>
                  You're already building things — projects, competitions, internships, club work,
                  freelance gigs, independent learning. Most of it stays invisible.
                </p>
                <p>
                  A resume tells someone what you claim to have done. A digital presence gives them
                  somewhere to actually explore it.
                </p>
                <p>
                  When someone is evaluating you, your digital presence can give them far more
                  context than a single-page resume ever can.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="label mb-5 text-primary-foreground/50">
                  Where people look for context
                </p>
                <ul className="grid grid-cols-2 gap-x-8">
                  {[
                    "LinkedIn",
                    "Search",
                    "Projects",
                    "GitHub",
                    "Behance",
                    "Case studies",
                    "Personal website",
                    "Field-specific platforms",
                  ].map((x) => (
                    <li
                      key={x}
                      className="border-b border-primary-foreground/15 py-3 text-sm text-primary-foreground/85"
                    >
                      {x}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal className="mt-20 max-w-[26ch] font-[family-name:var(--font-display)] text-3xl leading-tight md:max-w-[34ch] md:text-5xl">
              Don't just tell people what you can do. Give them something to see
              <span className="text-signal">.</span>
            </Reveal>
          </div>
        </section>

        {/* 03 — WHY START EARLY */}
        <section className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <SectionLabel n="03">Why start early</SectionLabel>
            <h2 className="max-w-[22ch] text-4xl md:text-6xl">
              The earlier you start, the more you have to show.
            </h2>
          </Reveal>

          <Reveal className="mt-14 border-t border-border">
            {YEARS.map((y) => (
              <div
                key={y.year}
                className="flex flex-col gap-1 border-b border-border py-6 sm:flex-row sm:items-baseline sm:gap-10"
              >
                <p className="w-40 shrink-0 text-sm font-medium">{y.year}</p>
                <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl">
                  {y.steps}
                </p>
              </div>
            ))}
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                The goal isn't to become a professional overnight. It's to gradually accumulate
                projects, experience, proof, content, connections, case studies — a visible body of
                work.
              </p>
              <p className="text-foreground">
                You don't need your career figured out. You just need to start building it.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="grid gap-x-8 sm:grid-cols-2">
                {[
                  "Projects",
                  "Experience",
                  "Proof",
                  "Content",
                  "Connections",
                  "Case studies",
                ].map((x) => (
                  <li key={x} className="border-b border-border py-3 text-sm">
                    {x}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 04 — PRIMARY CTA */}
        <section className="bg-signal text-signal-foreground">
          <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-28">
            <div className="grid items-end gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <h2 className="text-4xl leading-[1.05] md:text-[3.4rem]">
                  That's why your digital presence deserves to exist in your own name.
                </h2>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-5">
                <p className="text-base leading-relaxed text-signal-foreground/85">
                  Tell us what you're studying, what you're interested in and where you want to go.
                  We'll help position everything around your direction.
                </p>
                <div className="mt-8">
                  <a
                    href="#plans"
                    className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-85"
                  >
                    Get your presence started
                  </a>
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.16em] text-signal-foreground/70">
                  Built around your goals. Your field. Your schedule.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 05 — TOOLKIT */}
        <section className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <SectionLabel n="05">Your digital toolkit</SectionLabel>
              <h2 className="text-4xl md:text-5xl">The right tools. Connected around you.</h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                There is no universal platform stack. Different careers require different proof. We
                choose yours based on your degree, domain, target role, existing experience and the
                kind of work you want to showcase.
              </p>
              <p className="mt-6 max-w-md text-base leading-relaxed">
                You don't need all of them. You need the right ones for where you're going.
              </p>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-7 lg:pl-10">
              <ul className="border-t border-border">
                {TOOLS.map((t) => (
                  <li
                    key={t.name}
                    className="group grid gap-1 border-b border-border py-5 sm:grid-cols-[12rem_1fr] sm:gap-8"
                  >
                    <p className="text-base font-medium transition-colors group-hover:text-signal">
                      {t.name}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 06 — WHAT WE BUILD */}
        <section id="build" className="border-t border-border bg-secondary/60">
          <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
            <Reveal>
              <SectionLabel n="06">What we build</SectionLabel>
              <h2 className="max-w-[20ch] text-4xl md:text-6xl">
                One presence. Everything connected.
              </h2>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
                This isn't a set of disconnected deliverables. Every piece is positioned around a
                single professional identity, and each one reinforces the others.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-x-12 gap-y-0 sm:grid-cols-2">
              {FLOW.map((f, i) => (
                <Reveal
                  key={f.n}
                  delay={i * 60}
                  className="border-t border-border py-8 sm:py-10"
                >
                  <p className="font-mono text-[0.7rem] text-signal">{f.n}</p>
                  <h3 className="mt-3 text-2xl md:text-[1.75rem]">{f.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border pt-8 text-sm text-muted-foreground">
              {["Your goals", "Positioning", "LinkedIn", "Content", "Projects", "Proof of work", "Resume", "Portfolio"].map(
                (s, i, arr) => (
                  <span key={s} className="flex items-center gap-3">
                    <span className="text-foreground">{s}</span>
                    {i < arr.length - 1 && (
                      <span className="text-signal" aria-hidden="true">
                        →
                      </span>
                    )}
                  </span>
                ),
              )}
            </Reveal>
          </div>
        </section>


        {/* 07 — PLANS */}
        <section id="plans" className="border-t border-border">
          <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
            <Reveal>
              <SectionLabel n="07">Two plans</SectionLabel>
              <h2 className="max-w-[20ch] text-4xl md:text-6xl">
                Two ways to start. Same standard of work.
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-6 lg:grid-cols-5 lg:gap-8">
              {/* Plan 01 */}
              <Reveal className="lg:col-span-2">
                <div className="flex h-full flex-col border border-border bg-background p-8 md:p-10">
                  <p className="label">Plan 01</p>
                  <h3 className="mt-4 text-3xl">Portfolio System</h3>
                  <p className="mt-6 font-[family-name:var(--font-display)] text-5xl">₹5,000</p>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                    Everything you need to build a credible professional presence while you're
                    still in college.
                  </p>
                  <ul className="mt-8 space-y-3 border-t border-border pt-8 text-sm">
                    {PLAN_1.map((f) => (
                      <li key={f} className="flex gap-3 leading-relaxed">
                        <span className="mt-[2px] text-verified" aria-hidden="true">
                          ✓
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Cta href="#final" variant="quiet" className="mt-10 w-full">
                    Start with the portfolio system
                  </Cta>
                </div>
              </Reveal>

              {/* Plan 02 */}
              <Reveal delay={120} className="lg:col-span-3">
                <div className="flex h-full flex-col bg-primary p-8 text-primary-foreground md:p-12">
                  <div className="flex items-center justify-between gap-4">
                    <p className="label text-primary-foreground/50">Plan 02</p>
                    <p className="rounded-sm bg-signal px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-signal-foreground">
                      Most complete
                    </p>
                  </div>
                  <h3 className="mt-4 text-3xl md:text-4xl">Portfolio + Website</h3>
                  <p className="mt-6 font-[family-name:var(--font-display)] text-5xl md:text-6xl">
                    ₹12,000
                  </p>
                  <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/75">
                    Everything in the Portfolio System, plus your own professional website.
                  </p>

                  <div className="mt-8 border-t border-primary-foreground/15 pt-8">
                    <p className="label text-primary-foreground/50">
                      Everything in Plan 01, plus
                    </p>
                    <ul className="mt-5 grid gap-3 text-sm sm:grid-cols-2 sm:gap-x-8">
                      {PLAN_2.map((f) => (
                        <li key={f} className="flex gap-3 leading-relaxed">
                          <span className="mt-[2px] text-verified" aria-hidden="true">
                            ✓
                          </span>
                          <span className="text-primary-foreground/90">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-8 font-[family-name:var(--font-display)] text-2xl md:text-3xl">
                    Not just a template. A portfolio you can keep building on
                    <span className="text-signal">.</span>
                  </p>

                  <a
                    href="#final"
                    className="mt-10 inline-flex w-full items-center justify-center rounded-sm bg-signal px-6 py-4 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-signal-foreground transition-opacity hover:opacity-90 sm:w-auto sm:self-start sm:px-8"
                  >
                    Build my portfolio + website
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 08 — AI HUMANIZER */}
        <section className="border-t border-border bg-secondary/60">
          <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10 md:py-20">
            <div className="grid gap-10 md:grid-cols-12 md:items-center">
              <Reveal className="md:col-span-5">
                <p className="label mb-4">Assignment support</p>
                <h3 className="text-2xl md:text-3xl">Already stuck on an assignment?</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Get your academic work reviewed, refined or humanised when you need an extra hand.
                </p>
              </Reveal>
              <Reveal delay={100} className="md:col-span-7">
                <div className="grid gap-6 border-t border-border pt-6 sm:grid-cols-2 sm:border-l sm:border-t-0 sm:pl-10 sm:pt-0">
                  <div>
                    <p className="label">AI Humanizer — ₹199</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Up to 5 pages per assignment. We humanise AI-assisted writing so it reads
                      clearer, more natural and closer to your own voice.
                    </p>
                  </div>
                  <div>
                    <p className="label">Need help with an assignment?</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Get it reviewed, refined or audited by us.
                    </p>
                    <Cta href="#final" variant="quiet" className="mt-5">
                      Get help for ₹199
                    </Cta>
                    <p className="mt-3 text-xs text-muted-foreground">
                      Terms &amp; conditions apply.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 09 — FINAL CTA */}
        <section id="final" className="border-t border-border">
          <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-36">
            <div className="grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <h2 className="max-w-[18ch] text-4xl leading-[1.03] md:text-[4rem]">
                  You focus on college. We'll help build what comes next
                  <span className="text-signal">.</span>
                </h2>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-5 lg:pt-3">
                <p className="text-base leading-relaxed text-muted-foreground">
                  You don't need to spend hours figuring out LinkedIn, portfolios, projects and
                  digital presence on your own.
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  Tell us what you're studying, what interests you and where you want to go. We'll
                  help build the system around you.
                </p>
                <Cta
                  href="mailto:hello@proofolio.in?subject=Start%20building%20my%20presence"
                  variant="signal"
                  className="mt-9"
                >
                  Start building my presence
                </Cta>
                <p className="mt-8 text-sm leading-relaxed">
                  Your career doesn't start when you graduate.
                  <br />
                  It starts with what you build now.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* 10 — FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1240px] px-6 py-14 md:px-10">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <Wordmark className="h-[120px]" />
            </div>
            <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {[
                { l: "Instagram", h: "https://instagram.com" },
                { l: "LinkedIn", h: "https://linkedin.com" },
                { l: "Contact", h: "mailto:hello@proofolio.in" },
                { l: "Terms", h: "#" },
                { l: "Privacy", h: "#" },
              ].map((x) => (
                <a key={x.l} href={x.h} className="text-foreground/70 hover:text-signal">
                  {x.l}
                </a>
              ))}
            </nav>
          </div>
          <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
            A brand by Ashra Designs
          </p>
        </div>
      </footer>
    </div>
  );
}
