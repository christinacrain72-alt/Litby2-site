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

      {/* BIG HERO BANNER */}
      <div className="w-full bg-black py-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-pink-400 drop-shadow-lg">
          ✨ Lit by 2 ✨
        </h1>
        <p className="text-pink-200 mt-2 text-sm md:text-base">
          Hand-poured candles
        </p>
      </div>

      {/* Header with horizontal logo */}
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

      {/* NEW Intro Section */}
      <section id="home" className="mx-auto max-w-6xl px-4 pt-10 pb-8">
        <div
          className="relative overflow-hidden rounded-3xl p-8 md:p-12 border border-pink-200 shadow-sm"
          style={{
            background:
              "linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 45%, #FDECF5 100%)"
          }}
        >
          <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-pink-300/30 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-pink-200/40 blur-2xl" />

          <div className="flex items-center gap-5 relative">
            <img
              src="/logo-round.svg"
              alt="Lit by 2 round logo"
              className="h-20 w-20 rounded-full bg-white/60 p-2 ring-2 ring-pink-200 object-contain"
            />

            <div className="text-black">
              <p className="text-xs uppercase tracking-widest font-semibold">
                Hand-poured • Small batch
              </p>
              <h2 className="mt-1 text-3xl md:text-5xl font-extrabold leading-tight">
                Candles made with love by Lit by 2
              </h2>
              <p className="mt-3 max-w-2xl text-black/70">
                A mother &amp; daughter duo crafting cozy, dreamy scents for gifts,
                self-care nights, and everyday vibes.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#shop"
                  className="px-4 py-2 rounded-full bg-black text-pink-100 font-medium"
                >
                  Shop our scents
                </a>
                <a
                  href="#about"
                  className="px-4 py-2 rounded-full border border-black/70 text-black font-medium bg-white/40 backdrop-blur"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="mx-auto max-w-6xl px-4 py-8">
        <h3 className="text-2xl md:text-3xl font-bold text-black">Best Sellers</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl border border-pink-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="aspect-square
