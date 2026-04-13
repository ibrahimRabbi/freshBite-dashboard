"use client";

/* ── DATA ── */
const privacyContent = [
  {
    num: "01",
    title: "Controller",
    body: "The controller responsible for data processing in this App is: freshBITE Ivanov, Zurlindenstrasse 303, 8003 Zurich, Switzerland — info@freshbite.ch",
  },
  {
    num: "02",
    title: "Data Collected",
    bullets: [
      "Registration data (name, e-mail address, password)",
      "Subscription and payment information (via App Store / Google Play; payment data is processed exclusively there)",
      "Usage data within the App (e.g., created recipes, shopping lists, meal plans, saved preferences/filters)",
      "Notification tokens (for push notifications)",
      "Technical data (device type, operating system, log files, IP address)",
    ],
  },
  {
    num: "03",
    title: "Purpose of Data Processing",
    bullets: [
      "Provision and functionality of the App",
      "Management of user accounts and subscriptions",
      "Synchronization of data (e.g., Family Accounts)",
      "Storage of personal preferences and filter settings",
      "Sending of push notifications, if voluntarily activated",
      "Improvement of the App and analysis of user behavior (in anonymized form)",
      "Communication with users (e.g., support requests, in-app notifications)",
    ],
  },
  {
    num: "04",
    title: "Disclosure of Data",
    bullets: [
      "Payment processing is carried out exclusively via the respective App Stores (Apple / Google). freshbite has no access to payment details.",
      "Push notifications are delivered via external services (e.g., Apple Push Notification Service, Firebase Cloud Messaging).",
      "Personal data will only be shared with third parties if necessary for the performance of the contract or if required by law.",
      "No data will be shared with advertising networks or unauthorized third parties.",
    ],
  },
  {
    num: "05",
    title: "Data Storage and Security",
    bullets: [
      "All personal data is protected in accordance with the legal requirements in Switzerland and the EU (GDPR).",
      "Data is stored only as long as necessary for the use of the App or to fulfill legal obligations.",
      "Appropriate technical and organizational measures are taken to protect data from loss, misuse, and unauthorized access.",
    ],
  },
  {
    num: "06",
    title: "Rights of Users",
    bullets: [
      "Request information about the data stored concerning them",
      "Request correction of inaccurate data",
      "Request deletion of data ('right to be forgotten')",
      "Restrict or object to the processing of their data",
      "Receive their data in a portable format (data portability)",
    ],
    note: "Requests may be sent to info@freshbite.ch",
  },
  {
    num: "07",
    title: "Deletion of Account",
    body: "When a user account is deleted, all personal data will be permanently erased, unless legal retention obligations require otherwise.",
  },
  {
    num: "08",
    title: "Changes to the Privacy Policy",
    body: "freshbite reserves the right to amend this Privacy Policy at any time. The current version available in the App shall apply.",
  },
  {
    num: "09",
    title: "Contact",
    body: "For questions regarding data protection: freshBITE Ivanov, Zurlindenstrasse 303, 8003 Zurich, Switzerland — info@freshbite.ch",
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
export default function PrivacyPolicy() {
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
          Privacy Policy
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
            Privacy Policy
          </h1>
          <div className="mt-2 h-0.5 w-12 rounded" style={{ background: "#52b788" }} />
          <p className="mt-3 text-sm" style={{ color: "#5a5a5a" }}>
            Effective date: 12 April 2026
          </p>
        </div>

        <DocTab clauses={privacyContent} />
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
