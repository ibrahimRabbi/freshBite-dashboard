"use client";

import { useState } from "react";

/* ── CONFIRM MODAL ── */
function ConfirmModal({ open, onConfirm, onCancel }:{ open: boolean; onConfirm: () => void; onCancel: () => void }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
    >
      <div
        className="w-full max-w-md rounded-2xl p-7 shadow-2xl"
        style={{ background: "#fff", fontFamily: "'Source Serif 4', Georgia, serif" }}
      >
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl" style={{ background: "#fff5f5" }}>
            ⚠️
          </div>
        </div>
        <h2 className="text-center text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#d32f2f" }}>
          Are you sure?
        </h2>
        <p className="text-center text-sm mb-5" style={{ color: "#5a5a5a" }}>
          This action is <strong style={{ color: "#d32f2f" }}>permanent</strong> and cannot be undone. The following will be deleted:
        </p>
        <ul className="mb-6 space-y-2">
          {[
            "Your personal data and profile information",
            "All saved recipes, meal plans, and shopping lists",
            "Account settings and preferences",
            "Subscription and payment history",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm" style={{ color: "#5a5a5a" }}>
              <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#d32f2f" }} />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-3 rounded-lg text-sm font-semibold border transition-all hover:shadow"
            style={{ borderColor: "#52b788", color: "#52b788", background: "#fff" }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-lg text-sm font-semibold text-white transition-all hover:shadow-lg"
            style={{ background: "#d32f2f" }}
          >
            Yes, delete my account
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── SUCCESS MODAL ── */
function SuccessModal({ open, onClose }:{ open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
    >
      <div
        className="w-full max-w-sm rounded-2xl p-8 shadow-2xl text-center"
        style={{ background: "#fff", fontFamily: "'Source Serif 4', Georgia, serif" }}
      >
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ background: "#f0f7f3" }}>
            ✅
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#2d6a4f" }}>
          Account Deleted
        </h2>
        <p className="text-sm mb-6" style={{ color: "#5a5a5a" }}>
          Your account has been permanently deleted. We're sorry to see you go.
        </p>
        <button
          onClick={onClose}
          className="w-full py-3 rounded-lg text-sm font-semibold text-white transition-all hover:shadow-lg"
          style={{ background: "#52b788" }}
        >
          OK
        </button>
      </div>
    </div>
  );
}

/* ── MAIN COMPONENT ── */
export default function DeleteAccount() {
  const [confirmText, setConfirmText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const isConfirmed = confirmText.toLowerCase() === "delete my account";

  const handleDeleteClick = () => {
    if (!isConfirmed) return;
    setShowConfirmModal(true);
  };

  const handleConfirm = async () => {
    setShowConfirmModal(false);
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setShowSuccessModal(true);
  };

  const handleCancel = () => setShowConfirmModal(false);

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    setConfirmText("");
    // window.location.href = "/auth/sign-in"; // uncomment to redirect
  };

  return (
    <div className="min-h-screen" style={{ background: "#faf7f2", fontFamily: "'Source Serif 4', Georgia, serif" }}>

      {/* Modals */}
      <ConfirmModal open={showConfirmModal} onConfirm={handleConfirm} onCancel={handleCancel} />
      <SuccessModal open={showSuccessModal} onClose={handleSuccessClose} />

      {/* ── HEADER ── */}
      <header
        className="relative overflow-hidden text-white text-center px-6 py-14"
        style={{ background: "linear-gradient(160deg, #d32f2f 0%, #b71c1c 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(255,138,128,0.2) 0%, transparent 65%)" }}
        />
        <div className="relative text-4xl font-bold tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
          fresh<span style={{ color: "#ff8a80" }}>Bite</span>
        </div>
        <p className="relative mt-2 text-xs uppercase tracking-[0.18em] font-light" style={{ color: "#ffcdd2" }}>
          Delete Account
        </p>
      </header>

      {/* ── CONTENT ── */}
      <main className="max-w-3xl mx-auto px-5 py-10 pb-20">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#d32f2f" }}>
            Delete Your Account
          </h1>
          <div className="mt-2 h-0.5 w-12 rounded" style={{ background: "#d32f2f" }} />
        </div>

        {/* Warning Card */}
        <div className="rounded-xl px-6 py-6 mb-8 border-l-4" style={{ background: "#fff5f5", borderColor: "#d32f2f" }}>
          <div className="flex gap-4">
            <span className="text-3xl">⚠️</span>
            <div>
              <h2 className="text-lg font-semibold mb-2" style={{ color: "#d32f2f" }}>
                This action cannot be undone
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#5a5a5a" }}>
                Once you delete your account, all your data will be permanently removed. This includes:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Personal information and profile data",
                  "Saved recipes, meal plans, and shopping lists",
                  "Account settings and preferences",
                  "Subscription history and payment records",
                  "Any uploaded content (recipes, photos, links)",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "#5a5a5a" }}>
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#d32f2f" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* What happens */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a" }}>
            What happens after deletion?
          </h2>
          <div className="space-y-3">
            {[
              { icon: "🗑️", title: "Immediate Deletion", desc: "Your account and personal data will be permanently deleted from our servers." },
              { icon: "💳", title: "Subscription Cancelled", desc: "Any active subscriptions will be cancelled. No further charges will be made." },
              { icon: "📧", title: "Email Confirmation", desc: "You'll receive an email confirmation once your account has been deleted." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl p-5 border" style={{ borderColor: "#d4cbbf", background: "#fdf9f4" }}>
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-sm mb-0.5" style={{ color: "#1a1a1a" }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#5a5a5a" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Confirmation Input */}
        <div className="rounded-xl p-6 border mb-6" style={{ borderColor: "#d4cbbf", background: "#fdf9f4" }}>
          <label className="block text-sm font-semibold mb-3" style={{ color: "#1a1a1a" }}>
            Type <span style={{ color: "#d32f2f" }}>"delete my account"</span> to confirm:
          </label>
          <input
            type="text"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder="delete my account"
            className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none transition-all"
            style={{
              borderColor: isConfirmed ? "#52b788" : "#d4cbbf",
              background: "#ffffff",
              color: "#000000",
            }}
          />
        </div>

        {/* Delete Button */}
        <button
          onClick={handleDeleteClick}
          disabled={!isConfirmed || isLoading}
          className={`w-full py-4 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all ${
            isConfirmed && !isLoading ? "cursor-pointer hover:shadow-lg" : "cursor-not-allowed opacity-50"
          }`}
          style={{ background: isConfirmed ? "#d32f2f" : "#cccccc", color: "#ffffff" }}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Deleting...
            </span>
          ) : (
            "Permanently Delete My Account"
          )}
        </button>

        {/* Help strip */}
        <div className="mt-8 rounded-xl px-6 py-5 text-center" style={{ background: "#f0f7f3", borderLeft: "4px solid #52b788" }}>
          <p className="text-sm font-medium mb-2" style={{ color: "#2d6a4f" }}>Having issues? We're here to help.</p>
          <p className="text-xs" style={{ color: "#5a5a5a" }}>
            Contact us at{" "}
            <a href="mailto:info@freshbite.ch" className="font-semibold underline underline-offset-2" style={{ color: "#2d6a4f" }}>
              info@freshbite.ch
            </a>
          </p>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="text-center py-7 px-4 text-xs tracking-wide" style={{ background: "#2d6a4f", color: "#95d5b2" }}>
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