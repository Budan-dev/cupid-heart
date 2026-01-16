"use client";

import BoardingTab from "./components/boardingTab";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-pink-100 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <BoardingTab />
    </div>
  );
}
