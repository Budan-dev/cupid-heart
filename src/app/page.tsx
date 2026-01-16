"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-pink-100 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <h1>Home Page</h1>
      <Link
        href="/auth?tab=signup"
        className="mt-4 px-6 py-2 bg-green-900 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Onboard
      </Link>
    </div>
  );
}
