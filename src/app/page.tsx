import React from "react";

// Drop this file into a Next.js app under app/page.tsx (or pages/index.tsx)
// Then run: npm run dev
// Styling uses Tailwind CSS. If you don't have it yet, run `npx tailwindcss init -p`
// and follow the Tailwind Next.js setup guide.

const apps = [
  {
    name: "Design Right-Sizer",
    href: "https://example.com/right-sizer",
    description: "Compress big PDFs, upload to Drive, and reply in Slack with the optimized file.",
    tag: "Slack Bot",
    status: "Live",
  },
  {
    name: "Upload Portal",
    href: "https://example.com/upload-portal",
    description: "Customer dropbox for >1GB files with Monday.com + Gmail integration.",
    tag: "Web App",
    status: "Beta",
  },
  {
    name: "Overnight Assistant",
    href: "https://example.com/overnight",
    description: "Collects tagged messages while you're offline and emails a morning digest.",
    tag: "Slack Bot",
    status: "Prototype",
  },
  {
    name: "Weather → Calendar",
    href: "https://example.com/weather-cal",
    description: "Writes 7‑day forecasts to Google Calendar and backfills yesterday's actuals.",
    tag: "Automation",
    status: "Live",
  },
];

export default function TakeoLanding() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Takeo</h1>
            <p className="mt-1 text-sm text-gray-600">Tiny, useful tools for pre‑construction teams</p>
          </div>
          <nav className="hidden gap-4 sm:flex">
            <a className="text-sm hover:underline" href="#apps">Apps</a>
            <a className="text-sm hover:underline" href="#about">About</a>
            <a className="text-sm hover:underline" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="hero" className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
          <h2 className="text-2xl font-semibold">Ship scrappy. Learn fast.</h2>
          <p className="mt-2 max-w-3xl text-sm text-gray-600">
            This is a playground to demo in‑house widgets and automations. Most of these are
            proofs‑of‑concept—expect rough edges. Feedback welcome!
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#apps" className="rounded-xl bg-gray-900 px-4 py-2 text-sm text-white hover:bg-black">Explore Apps</a>
            <a href="#about" className="rounded-xl border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100">How this is built</a>
          </div>
        </div>
      </section>

      <section id="apps" className="mx-auto mt-12 max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <h3 className="text-xl font-semibold">Apps & Widgets</h3>
          <a href="#" className="text-sm text-gray-600 hover:underline">View all</a>
        </div>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <li key={app.name} className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{app.name}</span>
                <span className={`rounded-full px-2 py-0.5 text-xs ${
                  app.status === "Live"
                    ? "bg-green-100 text-green-700"
                    : app.status === "Beta"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-700"
                }`}>
                  {app.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{app.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-lg bg-gray-100 px-2 py-1 text-xs text-gray-700">{app.tag}</span>
                <a
                  href={app.href}
                  className="rounded-xl bg-gray-900 px-3 py-1.5 text-xs text-white transition hover:bg-black"
                >
                  Open
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="about" className="mx-auto mt-16 max-w-6xl px-6">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
          <h3 className="text-xl font-semibold">About this site</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-600">
            <li>Frontend: Next.js + Tailwind (static export friendly)</li>
            <li>Hosting: Cloudflare Pages (free, fast, easy)</li>
            <li>Backends: Cloud Run (containerized) or Cloudflare Workers (serverless)</li>
            <li>Auth: Cloudflare Access (Zero‑Trust) to gate internal demos</li>
            <li>Domains: Managed in Cloudflare; GoDaddy registrar is fine</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="mx-auto mt-16 max-w-6xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="mt-2 text-sm text-gray-600">Questions or ideas? Email <a className="underline" href="mailto:hello@example.com">hello@example.com</a>.</p>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Takeo — Built for learning and demos
      </footer>
    </main>
  );
}
