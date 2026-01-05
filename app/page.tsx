// app/page.tsx
"use client";

import { useState, useEffect, JSX } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
}

interface WindowSize {
  width: number;
  height: number;
}

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b  flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 z-10">
        Heart Animation Page
      </h1>
      <p className="text-lg md:text-2xl text-white mb-12 z-10">
        Enjoy the floating hearts animation!
      </p>
    </div>
  );
}
