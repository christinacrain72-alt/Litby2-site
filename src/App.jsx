import React from "react";

/* ---- products (same as before) ---- */
const products = [
  { id: 1, name: "Vanilla Blossom", notes: "Vanilla • Jasmine • Musk", price: "$18", size: "8 oz" },
  { id: 2, name: "Citrus Sunrise", notes: "Orange • Lemon Zest • Neroli", price: "$18", size: "8 oz" },
  { id: 3, name: "Cozy Woods", notes: "Cedar • Amber • Sandalwood", price: "$18", size: "8 oz" },
  { id: 4, name: "Lavender Calm", notes: "Lavender • Sage • Linen", price: "$18", size: "8 oz" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-pink-50 text-black">

      {/* TOP BANNER */}
      <div className="w-full bg-black py-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-pink-400 drop-shadow-lg">
          ✨ Lit by 2 ✨
        </h1>
        <p className="text-pink-200 mt-2 text-sm md:text-base">
          Hand-poured candles
        </p>
      </div>

      {/* STICKY HEADER WITH WORDMARK */}
      <header className="sticky top-0 z-20 bg-pink-100/90 backdrop-blur border-b border-pink-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/logo-wordmark.svg"
              alt="Lit by 2 — Mother & Daughter Candle Shop"
              className="h-8 md:h-10 w-auto"
            />
          </a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#shop" className="hover:text-pink-600">Shop</a>
            <a href="#about" className="hover:text-pink-600">About</a>
            <a href="#contact" className="hover:text-pink-600">Contact</a>
          </nav>
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-full bg-black text-pink-100 text-sm font-medium"
          >
            Order
          </a>
        </div>
      </header>

      {/* 🔥 NEW PRETTY HERO (this is the part that must change) */}
      <section id="home" className="mx-auto max-w-6xl px-4 pt-10 pb-8">
        <div className="relative overflow-hidden rounded-3xl border border-pink-300 shadow-md">
          {/* soft gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-pink-50 to-white"></div>

          <div className="relative p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src="/logo-round.png"
                alt="Lit by 2 round logo"
                className="h-28 w-28 md:h-32 md:w-32 object-contain rounded-full shadow-sm border border-pink-200 bg-white"
              />
              <div className="text-center md:text-left">
                <p className="text-xs uppercase tracking-widest text-black/80 font-semibold">
                  HAND-POURED • SMALL BATCH
                </p>
                <h2 className="mt-1 text-3xl md:text-5xl font-extrabold leading-tight text-black">
                  New Pretty Hero — Candles made with love by Lit by 2
                </h2>
                <p className="mt
