"use client";

import { useEffect, useState } from "react";

const EMAIL = "winyelsimp@gmail.com";
const NAME = "Phinehas Winyelsim";
const GITHUB = "https://github.com/phinehaswinyelsim";
const LINKEDIN = "https://www.linkedin.com/in/phinehas-winyelsim-8662a73b1";

const projects = [
  {
    title: "FixMate Ghana",
    tag: "Startup · Marketplace",
    status: "Concept / in development",
    live: false,
    desc: "A platform concept connecting homeowners and businesses with trusted artisans and service providers in Ghana.",
    gradient: "from-emerald-500 via-teal-600 to-slate-900",
    year: "2026",
  },
  {
    title: "PrimeTech",
    tag: "Media · Tech Channel",
    status: "100 followers",
    live: false,
    desc: "A WhatsApp technology channel making technology understandable and interesting for beginners and non-technical audiences.",
    gradient: "from-sky-400 via-indigo-600 to-slate-950",
    year: "2026",
  },
  {
    title: "Developer Portfolio",
    tag: "Web · Portfolio",
    status: "Live — you're here",
    live: true,
    desc: "Personal portfolio showcasing my development journey, projects, technical interests and work.",
    gradient: "from-violet-600 via-fuchsia-600 to-amber-400",
    year: "2026",
  },
  {
    title: "Backend & Web Apps",
    tag: "Software · Full-stack path",
    status: "In progress",
    live: false,
    desc: "Projects tracing my progression from frontend into backend and full-stack development — Next.js, APIs, databases, auth and deployment.",
    gradient: "from-amber-400 via-orange-600 to-zinc-900",
    year: "2026",
  },
];

const services = [
  {
    n: "01",
    title: "Website Development",
    desc: "Responsive websites for individuals, organizations and small businesses.",
    items: ["Responsive", "Small business", "Personal sites"],
  },
  {
    n: "02",
    title: "Frontend Development",
    desc: "Modern, responsive interfaces using HTML, CSS, JavaScript and modern frameworks.",
    items: ["HTML / CSS", "JavaScript", "Modern frameworks"],
  },
  {
    n: "03",
    title: "Web Application Development",
    desc: "Building functional web applications and MVPs.",
    items: ["MVPs", "Forms & data", "Full-stack path"],
  },
  {
    n: "04",
    title: "Landing Pages",
    desc: "Fast, clean landing pages for businesses, products and startups.",
    items: ["Fast", "SEO basics", "Launch-ready"],
  },
  {
    n: "05",
    title: "Deployment & Setup",
    desc: "Helping deploy websites and get them online — domains, hosting, go-live.",
    items: ["Vercel", "Domains", "Go-live help"],
  },
  {
    n: "06",
    title: "Technical Content",
    desc: "Beginner-friendly technology education and technical content.",
    items: ["Explainers", "PrimeTech", "Beginners first"],
  },
  {
    n: "07",
    title: "AI-Assisted Development",
    desc: "Using modern AI tools to accelerate development, research and prototyping.",
    items: ["Research", "Prototyping", "Faster builds"],
  },
];

const socials: { label: string; href?: string }[] = [
  { label: "GitHub", href: GITHUB },
  { label: "LinkedIn", href: LINKEDIN },
  { label: "X" },
  { label: "Facebook" },
];

type Theme = "dark" | "light";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [form, setForm] = useState({ name: "", email: "", interest: "Website Development", message: "" });

  useEffect(() => {
    try {
      const saved = localStorage.getItem("pw-theme");
      if (saved === "light" || saved === "dark") {
        setTheme(saved);
        document.documentElement.classList.toggle("dark", saved === "dark");
      }
    } catch {
      /* private mode — stay dark */
    }
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("pw-theme", next);
    } catch {
      /* ignore */
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "your site"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nInterested in: ${form.interest}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#FAF9F6] font-sans text-zinc-900 dark:bg-ink dark:text-zinc-100">
      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-violet-300/40 blur-[140px] dark:bg-violet-700/25" />
        <div className="absolute right-[-180px] top-[38%] h-[480px] w-[480px] rounded-full bg-amber-300/30 blur-[130px] dark:bg-amber-400/10" />
        <div className="absolute left-[-180px] top-[68%] h-[420px] w-[420px] rounded-full bg-fuchsia-300/25 blur-[130px] dark:bg-fuchsia-700/15" />
      </div>

      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-900/5 bg-white/70 backdrop-blur-xl dark:border-white/5 dark:bg-ink/70">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-violet-600 font-serif text-sm font-bold text-black">
              P
            </span>
            <span className="text-sm font-semibold tracking-wide">
              {NAME} <span className="text-zinc-400 dark:text-zinc-500">©26</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-zinc-600 dark:text-zinc-400 md:flex">
            <a href="#work" className="transition hover:text-black dark:hover:text-white">Work</a>
            <a href="#services" className="transition hover:text-black dark:hover:text-white">Services</a>
            <a href="#contact" className="transition hover:text-black dark:hover:text-white">Contact</a>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="grid h-10 w-10 place-items-center rounded-full border border-zinc-900/10 text-base transition hover:bg-zinc-900/5 dark:border-white/10 dark:hover:bg-white/5"
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>
            <a
              href="#contact"
              className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gold"
            >
              Get in touch →
            </a>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid h-10 w-10 place-items-center rounded-full border border-zinc-900/10 dark:border-white/10"
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="grid h-10 w-10 place-items-center rounded-full border border-zinc-900/10 dark:border-white/10"
              aria-label="Toggle menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </nav>
        {open && (
          <div className="border-t border-zinc-900/5 bg-white/95 px-5 py-4 backdrop-blur-xl dark:border-white/5 dark:bg-ink/95">
            {["work", "services", "contact"].map((l) => (
              <a
                key={l}
                href={`#${l}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm capitalize text-zinc-700 dark:text-zinc-300"
              >
                {l}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-900/10 bg-white px-4 py-1.5 text-xs text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              </span>
              Open to internships, freelance & collaboration
            </div>
            <h1 className="font-serif text-5xl leading-[1.02] tracking-tight sm:text-7xl">
              I build <em className="text-gradient not-italic">websites</em>
              <br />
              & web apps that
              <br />
              solve <em className="font-medium italic text-amber-700 dark:text-gold">real problems.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
              I&apos;m {NAME} — Student Software Developer & Aspiring Tech Entrepreneur.
              Telecommunications Engineering student building practical digital
              products while exploring AI, backend development, and technology
              entrepreneurship.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gold"
              >
                Get in touch →
              </a>
              <a
                href="#work"
                className="rounded-full border border-zinc-900/15 px-7 py-3.5 text-sm font-semibold transition hover:bg-zinc-900/5 dark:border-white/15 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/5"
              >
                See my work
              </a>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-zinc-900/10 pt-8 dark:border-white/10">
              {[
                ["4", "Projects building"],
                ["100", "PrimeTech followers"],
                ["24h", "Response time"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-serif text-3xl sm:text-4xl">{v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-zinc-500">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* portrait card */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="grain relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel p-2">
              <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
                <div className="flex h-[420px] flex-col justify-between p-7">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="rounded-full border border-white/15 px-3 py-1">● Ghana / remote</span>
                    <span>GMT (UTC+0)</span>
                  </div>
                  <div className="animate-float mx-auto grid h-44 w-44 place-items-center rounded-full bg-gradient-to-br from-amber-200 via-violet-500 to-fuchsia-700 p-[3px]">
                    <div className="grid h-full w-full place-items-center rounded-full bg-zinc-950 font-serif text-6xl text-white">
                      P<span className="text-gold">.</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-white">{NAME}</p>
                    <p className="text-sm text-zinc-400">Telecom Engineering Student × Developer</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["HTML/CSS", "JavaScript", "Next.js", "AI Tools"].map((t) => (
                        <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-4 rotate-[-4deg] rounded-2xl border border-zinc-900/10 bg-white px-4 py-3 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-zinc-950/90">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Currently</p>
              <p className="text-sm font-semibold">Open to work · 1st-year dev</p>
            </div>
            <div className="absolute -right-3 -top-5 rotate-[3deg] rounded-2xl border border-zinc-900/10 bg-white px-4 py-3 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-zinc-950/90">
              <p className="text-xs font-medium text-emerald-600 dark:text-emerald-300">↗ 100 followers</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">PrimeTech channel</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-zinc-900/5 bg-zinc-900/[0.02] py-5 dark:border-white/5 dark:bg-white/[0.015]">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12 text-sm uppercase tracking-[0.2em] text-zinc-500">
            {["HTML", "CSS", "JavaScript", "Next.js", "Git & GitHub", "Responsive Design", "UI/UX Basics", "AI Tools", "Vercel", "Content Creation"].concat(["HTML", "CSS", "JavaScript", "Next.js", "Git & GitHub", "Responsive Design", "UI/UX Basics", "AI Tools", "Vercel", "Content Creation"]).map((b, i) => (
              <span key={i} className="flex items-center gap-12">
                <span className="hover:text-zinc-800 dark:hover:text-zinc-200">{b}</span>
                <span className="text-amber-600/60 dark:text-gold/60">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 dark:text-gold">01 — Selected work</p>
            <h2 className="font-serif text-4xl sm:text-5xl">What I&apos;m <em className="italic text-zinc-500 dark:text-zinc-400">building.</em></h2>
            <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
              Real projects, honestly labelled. A record of what I&apos;ve shipped
              and what&apos;s still in progress — no filler.
            </p>
          </div>
          <a href="#contact" className="text-sm text-zinc-500 underline underline-offset-8 hover:text-black dark:text-zinc-400 dark:hover:text-white">
            Have an idea? Let&apos;s talk →
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="card-ring group overflow-hidden rounded-3xl transition hover:-translate-y-1">
              <div className={`relative h-48 bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/10" />
                <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur">{p.tag}</span>
                <span className={`absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-semibold ${p.live ? "bg-emerald-400 text-black" : "bg-white/90 text-zinc-900 dark:bg-white/15 dark:text-white"}`}>{p.status}</span>
                <span className="absolute bottom-4 right-4 text-xs text-white/70">{p.year}</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 border-y border-zinc-900/5 bg-white dark:border-white/5 dark:bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 dark:text-gold">02 — Services</p>
          <h2 className="max-w-2xl font-serif text-4xl sm:text-5xl">Focused services, <em className="italic text-zinc-500 dark:text-zinc-400">done well.</em></h2>
          <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
            Early-career and honest about it — these are the things I can
            actually deliver for you today.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.n} className="card-ring rounded-3xl p-8 transition hover:border-amber-600/30 dark:hover:border-gold/30">
                <p className="font-serif text-sm italic text-amber-700 dark:text-gold">{s.n}</p>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.desc}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li key={it} className="rounded-full border border-zinc-900/10 bg-zinc-900/[0.03] px-3.5 py-1.5 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                      ✓ {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-zinc-500">
            Pricing? <a href="#contact" className="underline underline-offset-4 hover:text-black dark:hover:text-zinc-300">Tell me your requirements</a> and I&apos;ll quote based on scope — no inflated packages.
          </p>
        </div>
      </section>

      {/* KIND WORDS — coming soon */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="card-ring rounded-[2rem] p-8 text-center sm:p-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 dark:text-gold">Kind words</p>
          <h2 className="font-serif text-3xl sm:text-4xl">Testimonials <em className="italic text-zinc-500 dark:text-zinc-400">coming soon.</em></h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
            Currently building projects and working with early clients and
            collaborators. Once the first launches land, their real words go here.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gold"
          >
            Work with me →
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="card-ring grid overflow-hidden rounded-[2rem] lg:grid-cols-2">
          <div className="relative p-8 sm:p-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 dark:text-gold">03 — Contact</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Have a project?
              <br />
              Let&apos;s <em className="italic text-amber-700 dark:text-gold">talk.</em>
            </h2>
            <p className="mt-4 max-w-md text-zinc-600 dark:text-zinc-400">
              Tell me your requirements — I reply within 24 hours and quote based on scope.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-white">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-zinc-900/10 dark:border-white/10">✉</span>
                {EMAIL}
              </a>
              <div className="flex items-center gap-3 text-zinc-800 dark:text-zinc-300">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-zinc-900/10 dark:border-white/10">◷</span>
                Ghana · GMT (UTC+0) · Replies in ~24h
              </div>
            </div>
            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-widest text-zinc-500">Find me on</p>
              <div className="flex flex-wrap gap-2.5">
                {socials.map((s) =>
                  s.href ? (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-zinc-900/10 px-4 py-2 text-xs font-medium text-zinc-700 transition hover:border-amber-600/50 hover:text-black dark:border-white/10 dark:text-zinc-300 dark:hover:border-gold/50 dark:hover:text-white"
                    >
                      {s.label} ↗
                    </a>
                  ) : (
                    <span
                      key={s.label}
                      title="Phinehas Winyelsim"
                      className="rounded-full border border-zinc-900/10 px-4 py-2 text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-400"
                    >
                      {s.label} · Phinehas Winyelsim
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-900/10 bg-zinc-900/[0.02] p-8 dark:border-white/10 dark:bg-black/40 sm:p-12 lg:border-l lg:border-t-0">
            {sent ? (
              <div className="grid h-full min-h-[320px] place-items-center text-center">
                <div>
                  <p className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-500/15 text-2xl text-emerald-600 dark:text-emerald-300">✓</p>
                  <h3 className="mt-4 font-serif text-3xl">Message ready in your mail app.</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Thanks {form.name || "there"} — I&apos;ll get back to you within 24 hours at {form.email || "your email"}.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-sm text-amber-700 underline underline-offset-4 dark:text-gold">
                    Send another →
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs uppercase tracking-widest text-zinc-500">Name</span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Cooper"
                      className="w-full rounded-xl border border-zinc-900/10 bg-white px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-amber-600/60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-600 dark:focus:border-gold/60"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs uppercase tracking-widest text-zinc-500">Email</span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full rounded-xl border border-zinc-900/10 bg-white px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-amber-600/60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-600 dark:focus:border-gold/60"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-xs uppercase tracking-widest text-zinc-500">I&apos;m interested in</span>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full appearance-none rounded-xl border border-zinc-900/10 bg-white px-4 py-3 text-sm text-zinc-800 outline-none focus:border-amber-600/60 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:focus:border-gold/60 [&>option]:bg-white dark:[&>option]:bg-zinc-950"
                  >
                    <option>Website Development</option>
                    <option>Web Application / MVP</option>
                    <option>Landing Page</option>
                    <option>Deployment & Setup</option>
                    <option>Technical Content</option>
                    <option>Collaboration / Other</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs uppercase tracking-widest text-zinc-500">Project details</span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What do you need, timeline, links to anything you like…"
                    className="w-full resize-none rounded-xl border border-zinc-900/10 bg-white px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-amber-600/60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-600 dark:focus:border-gold/60"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-full bg-zinc-900 py-4 text-sm font-semibold text-white transition hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gold"
                >
                  Send message →
                </button>
                <p className="text-center text-xs text-zinc-500 dark:text-zinc-600">Opens your mail app addressed to {EMAIL}. No spam. NDA-friendly.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900/5 dark:border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-xs text-zinc-500 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {NAME}. All rights reserved.</p>
          <p className="font-serif italic text-zinc-500 dark:text-zinc-400">“Building in public, learning fast.”</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-black dark:hover:text-white">Back to top ↑</a>
            <a href="#work" className="hover:text-black dark:hover:text-white">Work</a>
            <a href="#contact" className="hover:text-black dark:hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
