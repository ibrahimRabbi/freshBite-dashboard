"use client";

import { useState } from "react";

/* ── CONFIRM MODAL ── */
function ConfirmModal({ open, onConfirm, onCancel }: { open: boolean; onConfirm: () => void; onCancel: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}>
      <div className="w-full max-w-md rounded-2xl p-7 shadow-2xl"
        style={{ background: "#fff", fontFamily: "'Source Serif 4', Georgia, serif" }}>
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "#fff5f5" }}>
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
          {["Your personal data and profile information", "All saved recipes, meal plans, and shopping lists",
            "Account settings and preferences", "Subscription and payment history"].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm" style={{ color: "#5a5a5a" }}>
              <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#d32f2f" }} />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 py-3 rounded-lg text-sm font-semibold border"
            style={{ borderColor: "#52b788", color: "#52b788", background: "#fff" }}>Cancel</button>
          <button onClick={onConfirm} className="flex-1 py-3 rounded-lg text-sm font-semibold text-white"
            style={{ background: "#d32f2f" }}>Yes, delete my account</button>
        </div>
      </div>
    </div>
  );
}

/* ── SUCCESS MODAL ── */
function SuccessModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}>
      <div className="w-full max-w-sm rounded-2xl p-8 shadow-2xl text-center"
        style={{ background: "#fff", fontFamily: "'Source Serif 4', Georgia, serif" }}>
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ background: "#f0f7f3" }}>✅</div>
        </div>
        <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#2d6a4f" }}>
          Account Deleted
        </h2>
        <p className="text-sm mb-6" style={{ color: "#5a5a5a" }}>Your account has been permanently deleted. We're sorry to see you go.</p>
        <button onClick={onClose} className="w-full py-3 rounded-lg text-sm font-semibold text-white"
          style={{ background: "#52b788" }}>OK</button>
      </div>
    </div>
  );
}

/* ── MAIN COMPONENT ── */
export default function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [reason, setReason] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const isValid = email.trim() !== "" && fullName.trim() !== "";

  const handleDeleteClick = () => {
    if (!isValid) return;
    setShowConfirmModal(true);
  };

  const handleConfirm = async () => {
    setShowConfirmModal(false);
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setShowSuccessModal(true);
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    setEmail("");
    setFullName("");
    setReason("");
  };

  return (
    <div className="min-h-screen" style={{ background: "#faf7f2", fontFamily: "'Source Serif 4', Georgia, serif" }}>
      <ConfirmModal open={showConfirmModal} onConfirm={handleConfirm} onCancel={() => setShowConfirmModal(false)} />
      <SuccessModal open={showSuccessModal} onClose={handleSuccessClose} />

      {/* HEADER */}
      <header className="relative overflow-hidden text-white text-center px-6 py-14"
        style={{ background: "linear-gradient(160deg, #d32f2f 0%, #b71c1c 100%)" }}>
        <div className="relative text-4xl font-bold tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
          fresh<span style={{ color: "#ff8a80" }}>Bite</span>
        </div>
        <p className="relative mt-2 text-xs uppercase tracking-[0.18em] font-light" style={{ color: "#ffcdd2" }}>
          Delete Account
        </p>
      </header>

      {/* CONTENT */}
      <main className="max-w-2xl mx-auto px-5 py-10 pb-20">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            
          </div>
          <h1 className="text-2xl font-bold text-center" style={{ fontFamily: "'Playfair Display', serif", color: "#d32f2f" }}>
            Account Delete Request
          </h1>
        </div>

        {/* Warning */}
        <div className="rounded-xl px-5 py-4 mb-8 border-l-4" style={{ background: "#fff5f5", borderColor: "#d32f2f" }}>
          <p className="text-sm font-semibold mb-1" style={{ color: "#d32f2f" }}>⚠️ Warning: This action cannot be undone</p>
          <p className="text-sm leading-relaxed" style={{ color: "#5a5a5a" }}>
            If you delete your account, you will not be able to retrieve any information, including your profile, settings, data, or any content associated with your account.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-xl p-6 border mb-6" style={{ borderColor: "#d4cbbf", background: "#fdf9f4" }}>
          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2" style={{ color: "#1a1a1a" }}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none"
              style={{ borderColor: "#d4cbbf", background: "#ffffff", color: "#000000" }}
            />
          </div>

          {/* Full Name */}
          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2" style={{ color: "#1a1a1a" }}>Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none"
              style={{ borderColor: "#d4cbbf", background: "#ffffff", color: "#000000" }}
            />
          </div>

          {/* Reason */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" style={{ color: "#1a1a1a" }}>Reason for Deletion</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Please tell us why you're deleting your account..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none resize-none"
              style={{ borderColor: "#d4cbbf", background: "#ffffff", color: "#000000" }}
            />
          </div>

          {/* Button */}
          <button
            onClick={handleDeleteClick}
            disabled={!isValid || isLoading}
            className={`w-full py-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
              isValid && !isLoading ? "cursor-pointer hover:shadow-lg" : "cursor-not-allowed opacity-50"
            }`}
            style={{ background: isValid ? "#d32f2f" : "#cccccc", color: "#ffffff" }}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Deleting...
              </>
            ) : (
              "Request Delete"
            )}
          </button>

          <p className="text-center text-xs mt-4" style={{ color: "#5a5a5a" }}>
            Need help? Contact our support team before deleting your account.
          </p>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-7 px-4 text-xs tracking-wide" style={{ background: "#2d6a4f", color: "#95d5b2" }}>
        <p>freshBITE Ivanov · Zurlindenstrasse 303, 8003 Zurich, Switzerland</p>
        <p className="mt-1">
          <a href="mailto:info@freshbite.ch" className="underline underline-offset-2" style={{ color: "#52b788" }}>
            info@freshbite.ch
          </a>
        </p>
      </footer>
    </div>
  );
}