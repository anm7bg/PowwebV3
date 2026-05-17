"use client";

import { useState } from "react";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent opening mailto
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <a
      className="flex items-center gap-2 text-on-surface hover:text-primary-container transition-colors p-4 border border-white/10 rounded-DEFAULT bg-surface w-full sm:w-auto justify-center relative cursor-pointer"
      href={`mailto:${email}`}
      onClick={handleCopy}
    >
      <span className="material-symbols-outlined">mail</span>
      <span className="font-label-md text-label-md">
        {copied ? "Копирано!" : email}
      </span>
      {copied && (
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary-container text-black text-xs py-1 px-2 rounded-sm font-semibold">
          Копирано!
        </span>
      )}
    </a>
  );
}
