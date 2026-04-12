"use client";

/* ── DATA ── */
const termsContent = [
  {
    num: "01",
    title: "Scope of Application",
    body: `These Terms & Conditions ("T&C") govern the use of the freshbite App ("App") by registered users ("Users"). The App is operated by freshBITE Ivanov, Zurlindenstrasse 303, 8003 Zurich, Switzerland (hereinafter referred to as "freshbite"). By registering and using the App, Users accept these T&C.`,
  },
  {
    num: "02",
    title: "Services of the App",
    bullets: [
      "Access to cooking recipes, cooking videos, and a how-to video library",
      "Meal planner with portion adjustment, daily overview, and nutritional information",
      "Creation of automatic or individual shopping lists",
      "Storage of personal preferences (e.g., filters for recipe searches)",
      "Push notifications (optional), e.g., reminders of meal planner entries or shopping lists",
      "Possibility to create and upload own recipes (including photos and links)",
      "Data synchronization (for Family Accounts)",
    ],
    note: "freshbite reserves the right to expand, restrict, or modify features at any time.",
  },
  {
    num: "03",
    title: "Account Models",
    bullets: [
      "Free Account: Limited functionality",
      "Premium Account: Full access for one person",
      "Family Account: Full access for one person plus the option to invite additional users and synchronize data",
      "VIP Account: Free full access, granted only by freshbite",
    ],
    note: "Subscriptions are subject to charges unless they are Free or VIP Accounts. Prices and payment terms are based on the information provided in the App Store (Apple/Google).",
  },
  {
    num: "04",
    title: "Registration and User Obligations",
    bullets: [
      "During registration, Users must provide complete and accurate information.",
      "Login credentials must be kept confidential and not shared with third parties.",
      "Users who upload their own recipes, photos, or links confirm that they hold the necessary rights and do not infringe on copyrights or other rights of third parties.",
      "It is prohibited to upload illegal, offensive, discriminatory, or harmful content to the App.",
      "Users may enable or disable push notifications at any time in their device settings.",
    ],
    note: "freshbite reserves the right to remove content or suspend accounts in case of violations.",
  },
  {
    num: "05",
    title: "Disclaimer of Liability",
    bullets: [
      "The contents of the App are provided for general informational and educational purposes only and do not constitute medical or nutritional advice.",
      "Despite careful preparation, freshbite assumes no liability for the accuracy, completeness, or timeliness of the content.",
      "Use of the App is at the User's own risk. freshbite shall not be liable for damages resulting from improper use, intolerances, allergies, or external links.",
    ],
  },
  {
    num: "06",
    title: "Term and Termination",
    bullets: [
      "All subscriptions (Premium, Family) automatically renew on a monthly basis unless cancelled in time via the App Store (Apple/Google).",
      "Subscriptions can be cancelled at any time in the account settings of the respective App Store and will end at the close of the current billing period.",
      "Users are not entitled to a prorated refund of fees already paid.",
    ],
  },
  {
    num: "07",
    title: "Intellectual Property",
    body: `All contents of the App (texts, images, recipes, videos, graphics, logos) are protected by copyright and are the property of freshBITE Ivanov, unless otherwise indicated. Without express written consent from freshBITE Ivanov, contents may not be copied, reproduced, modified, or distributed. The names freshbite® and FRESH Methode® are registered trademarks and legally protected.`,
  },
  {
    num: "08",
    title: "Data Protection",
    body: "The protection of personal data is important to freshbite. Details are set out in the Privacy Policy, which forms an integral part of these T&C.",
  },
  {
    num: "09",
    title: "Final Provisions",
    bullets: [
      "Swiss law shall apply exclusively, excluding conflict-of-law rules.",
      "The place of jurisdiction for all disputes is Zurich, Switzerland, unless mandatory law provides otherwise.",
      "Should individual provisions of these T&C be invalid, the validity of the remaining provisions shall not be affected.",
    ],
  },
];

/* ── SUB-COMPONENTS ── */

interface ClauseCardProps {
  num: string;
  title: string;
  body?: string;
  bullets?: string[];
  note?: string;
}

function ClauseCard({ num, title, body, bullets, note }: ClauseCardProps) {
  return (
    <div className="group relative flex gap-6 py-8 border-b border-[#d4cbbf] last:border-0">
      {/* Number */}
      <div className="shrink-0 w-12 text-right">
        <span
          className="font-mono text-xs font-bold tracking-widest"
          style={{ color: "#2d6a4f", opacity: 0.5 }}
        >
          {num}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3
          className="text-base font-semibold mb-3 leading-snug"
          style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a" }}
        >
          {title}
        </h3>

        {body && (
          <p className="text-sm leading-relaxed" style={{ color: "#5a5a5a" }}>
            {body}
          </p>
        )}

        {bullets && (
          <ul className="space-y-2 mt-1">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#5a5a5a" }}>
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#52b788]" />
                {b}
              </li>
            ))}
          </ul>
        )}

        {note && (
          <p
            className="mt-3 text-xs italic leading-relaxed"
            style={{ color: "#2d6a4f" }}
          >
            {note}
          </p>
        )}
      </div>
    </div>
  );
}

interface DocTabProps {
  clauses: ClauseCardProps[];
}

function DocTab({ clauses }: DocTabProps) {
  return (
    <div>
      {clauses.map((c, i) => (
        <ClauseCard key={i} {...c} />
      ))}

      {/* Footer strip */}
      <div
        className="mt-8 rounded-xl px-6 py-5 text-sm"
        style={{ background: "#f0f7f3", borderLeft: "4px solid #52b788", color: "#2d6a4f" }}
      >
        <span className="font-semibold">freshBITE Ivanov</span> · Zurlindenstrasse 303, 8003 Zurich,
        Switzerland ·{" "}
        <a href="mailto:info@freshbite.ch" className="underline underline-offset-2">
          info@freshbite.ch
        </a>
      </div>
    </div>
  );
}

/* ── MAIN COMPONENT ── */
export default function TermsAndConditions() {
  return (
    <div className="min-h-screen" style={{ background: "#faf7f2", fontFamily: "'Source Serif 4', Georgia, serif" }}>

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
          fresh<span style={{ color: "#52b788" }}>BITE</span>
        </div>
        <p
          className="relative mt-2 text-xs uppercase tracking-[0.18em] font-light"
          style={{ color: "#95d5b2" }}
        >
          Terms & Conditions
        </p>
      </header>

      {/* ── CONTENT ── */}
      <main className="max-w-3xl mx-auto px-5 py-10 pb-20">
        {/* Section heading */}
        <div className="mb-8">
          <h1
            className="text-2xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#2d6a4f" }}
          >
            Terms & Conditions
          </h1>
          <div className="mt-2 h-0.5 w-12 rounded" style={{ background: "#52b788" }} />
        </div>

        <DocTab clauses={termsContent} />
      </main>

      {/* ── FOOTER ── */}
      <footer
        className="text-center py-7 px-4 text-xs tracking-wide"
        style={{ background: "#2d6a4f", color: "#95d5b2" }}
      >
        <p>freshBITE Ivanov &nbsp;·&nbsp; Zurlindenstrasse 303, 8003 Zurich, Switzerland</p>
        <p className="mt-1">
          <a href="mailto:info@freshbite.ch" className="underline underline-offset-2" style={{ color: "#52b788" }}>
            info@freshbite.ch
          </a>
        </p>
      </footer>
    </div>
  );
}
