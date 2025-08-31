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
      {/* Header with logo */}
      <header className="sticky top-0 z-20 bg-pink-100/90 backdrop-blur border-b border-pink-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-pink-100 font-bold">
              2
            </div>
            <a href="#home" className="font-black tracking-tight text-black text-xl">
              Lit by <span className="text-pink-600">2</span>
            </a>
          </div>

          {/* Nav */}
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

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 pt-10 pb-8">
        <div className="rounded-3xl p-8 md:p-12 bg-white shadow-sm border border-pink-200">
          <p className="text-xs uppercase tracking-widest text-black font-semibold">
            Hand-poured • Small batch
          </p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight text-black">
            Candles made with love by Lit by 2
          </h1>
          <p className="mt-3 text-gray-700">
            Clean burning soy-blend candles with dreamy scents. Perfect for gifts,
            self-care nights, and cozy vibes.
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
              className="px-4 py-2 rounded-full border border-black text-black font-medium bg-white"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-black">Best Sellers</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl border border-pink-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="aspect-square rounded-xl bg-pink-100 mb-4 flex items-center justify-center text-black text-sm">
                ✨ Candle
              </div>
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.notes}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-black font-semibold">{p.price}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-pink-50 text-black border border-pink-200">
                  {p.size}
                </span>
              </div>
              <a href="#contact" className="mt-4 w-full inline-block text-center px-3 py-2 rounded-xl bg-black text-pink-100 text-sm font-medium">
                Order this
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3
