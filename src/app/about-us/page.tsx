"use client";

/* ── DATA ── */
const brand = {
  first: "fresh",
  second: "Bite",
};

const aboutContent = {
  headline: "Making healthy cooking part of everyday life.",
  paragraphs: [
    "freshbite makes healthy cooking part of everyday life – and weight loss more relaxed.",
    "The app is for everyone who is tired of strict diets or calorie trackers that only add stress to daily life.",
    "Instead, freshbite is built on a simple idea: if you make your everyday cooking practical, tasty, and balanced, you've already mastered the hardest part of losing weight.",
    "That's why the app offers not only recipes with video instructions, but also a meal planner, shopping lists, and kitchen skills videos that make everyday cooking easier step by step.",
    "The freshbite app stands for relief in everyday life instead of rigid discipline, for self-care instead of control, and for cooking skills instead of dieting – so you can reach your feel-good weight sustainably and with ease.",
  ],
  pillars: [
    { icon: "🥗", label: "Practical Recipes", desc: "Plant-based, whole-food meals with video guidance" },
    { icon: "📅", label: "Meal Planner", desc: "Plan, prep, and balance your week effortlessly" },
    { icon: "🛒", label: "Smart Lists", desc: "Auto-generated shopping lists from your meal plan" },
    { icon: "🎓", label: "Kitchen Skills", desc: "Step-by-step cooking videos for every level" },
  ],
};

/* ── SUB-COMPONENTS ── */

function AboutTab() {
  return (
    <div>
      {/* Hero */}
      <div
        className="relative rounded-2xl overflow-hidden mb-12 px-8 py-14 text-white"
        style={{ background: "linear-gradient(135deg, #2d6a4f 0%, #1b4332 60%, #0d2d1f 100%)" }}
      >
        {/* Decorative circle */}
        <div
          className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-10"
          style={{ background: "#52b788" }}
        />
        <div
          className="absolute -left-8 -bottom-12 w-48 h-48 rounded-full opacity-5"
          style={{ background: "#d8f3dc" }}
        />

        <p
          className="text-xs uppercase tracking-[0.2em] mb-4 font-semibold"
          style={{ color: "#95d5b2" }}
        >
          Our Story
        </p>

        <h2
          className="text-2xl md:text-3xl font-bold leading-tight mb-6 max-w-xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {aboutContent.headline}
        </h2>

        <div className="space-y-3 max-w-2xl">
          {aboutContent.paragraphs.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed" style={{ color: "#c8e6d4" }}>
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {aboutContent.pillars.map((p, i) => (
          <div
            key={i}
            className="flex items-start gap-4 rounded-xl p-5 border transition-shadow hover:shadow-md"
            style={{ borderColor: "#d4cbbf", background: "#fdf9f4" }}
          >
            <span className="text-2xl">{p.icon}</span>
            <div>
              <p className="font-semibold text-sm mb-0.5" style={{ color: "#1a1a1a" }}>
                {p.label}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "#5a5a5a" }}>
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact strip */}
      <div
        className="mt-10 rounded-xl px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
        style={{ background: "#f0f7f3", borderLeft: "4px solid #52b788" }}
      >
        <p className="text-sm font-medium" style={{ color: "#2d6a4f" }}>
          Questions? Reach us anytime.
        </p>
        <a
          href="mailto:info@freshbite.ch"
          className="text-sm font-semibold underline underline-offset-2"
          style={{ color: "#2d6a4f" }}
        >
          info@freshbite.ch
        </a>
      </div>
    </div>
  );
}

/* ── MAIN COMPONENT ── */
export default function AboutUs() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#faf7f2", fontFamily: "'Source Serif 4', Georgia, serif" }}
    >
      {/* ── HEADER ── */}
      <header
        className="relative overflow-hidden text-white text-center px-6 py-14"
        style={{ background: "linear-gradient(160deg, #2d6a4f 0%, #1b4332 100%)" }}
      >
        {/* radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 70% 30%, rgba(82,183,136,0.2) 0%, transparent 65%)",
          }}
        />

        <div
          className="relative text-4xl font-bold tracking-wide"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {brand.first}
          <span style={{ color: "#52b788" }}>{brand.second}</span>
        </div>

        <p
          className="relative mt-2 text-xs uppercase tracking-[0.18em] font-light"
          style={{ color: "#95d5b2" }}
        >
          About Us
        </p>
      </header>

      {/* ── CONTENT ── */}
      <main className="max-w-3xl mx-auto px-5 py-10 pb-20">
        <div className="mb-8">
          <h1
            className="text-2xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#2d6a4f" }}
          >
            About Us
          </h1>
          <div className="mt-2 h-0.5 w-12 rounded" style={{ background: "#52b788" }} />
        </div>

        <AboutTab />
      </main>

      {/* ── FOOTER ── */}
      <footer
        className="text-center py-7 px-4 text-xs tracking-wide"
        style={{ background: "#2d6a4f", color: "#95d5b2" }}
      >
        <p>
          {brand.first}
          {brand.second} Ivanov · Zurlindenstrasse 303, 8003 Zurich, Switzerland
        </p>
        <p className="mt-1">
          <a
            href="mailto:info@freshbite.ch"
            className="underline underline-offset-2"
            style={{ color: "#52b788" }}
          >
            info@freshbite.ch
          </a>
        </p>
      </footer>
    </div>
  );
}