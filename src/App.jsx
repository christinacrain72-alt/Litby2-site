import React from "react";

const products = [
  { id: 1, name: "Vanilla Blossom", notes: "Vanilla • Jasmine • Musk", price: "$18", size: "8 oz" },
  { id: 2, name: "Citrus Sunrise", notes: "Orange • Lemon Zest • Neroli", price: "$18", size: "8 oz" },
  { id: 3, name: "Cozy Woods", notes: "Cedar • Amber • Sandalwood", price: "$18", size: "8 oz" },
  { id: 4, name: "Lavender Calm", notes: "Lavender • Sage • Linen", price: "$18", size: "8 oz" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-pink-50 text-black">

      {/* Top Banner */}
      <div className="w-full bg-black py-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-pink-400 drop-shadow-lg">
          ✨ Lit by 2 ✨
        </h1>
        <p className="text-pink-200 mt-2 text-sm md:text-base">
          Hand-poured candles
        </p>
      </div>

      {/* Header with logo */}
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

      {/* Hero Section */}
      <section id="home" className="mx-auto max-w-6xl px-4 pt-10 pb-8">
        <div className="rounded-3xl p-10 md:p-14 bg-gradient-to-r from-pink-100 to-pink-200 shadow-lg border border-pink-300 text-center">
          <img
            src="/logo-round.png"
            alt="Lit by 2 logo"
            className="mx-auto h-28 w-28 md:h-36 md:w-36 rounded-full object-contain shadow-md"
          />
          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-black">
            Candles made with love by Lit by 2
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            A mother & daughter pouring joy into every jar. Cozy, clean candles perfect for self-care nights, thoughtful gifts, and warm homes.
          </p>
          <div className="mt-
