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
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a
              href="#shop"
              className="px-6 py-3 rounded-full bg-black text-pink-100 font-medium shadow-md"
            >
              Shop our scents
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-full border border-black text-black font-medium bg-white"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="mx-auto max-w-6xl px-4 py-8">
        <h3 className="text-2xl md:text-3xl font-bold text-black">Best Sellers</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl border border-pink-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="aspect-square rounded-xl bg-pink-100 mb-4 flex items-center justify-center text-black text-sm">
                ✨ Candle
              </div>
              <h4 className="font-semibold text-lg">{p.name}</h4>
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
        <div className="rounded-3xl bg-white border border-pink-200 p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-black">Our Story</h3>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Lit by 2 is more than candles — it’s a bond between mother and daughter. Together, we create warm, hand-poured candles filled with love, laughter, and memories to brighten your home.
          </p>
          <ul className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
            <li className="rounded-xl border border-pink-200 bg-pink-50 px-4 py-3">🌿 Clean ingredients</li>
            <li className="rounded-xl border border-pink-200 bg-pink-50 px-4 py-3">🕯️ Long-lasting scents</li>
            <li className="rounded-xl border border-pink-200 bg-pink-50 px-4 py-3">🎁 Perfect for gifting</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl p-6 md:p-8 bg-black text-pink-100">
          <h3 className="text-2xl md:text-3xl font-extrabold">Ready to order?</h3>
          <p className="mt-2 opacity-90">
            Tell us what you’d like and we’ll get back to you quickly.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="mailto:christinacrain72@gmail.com?subject=Lit%20by%202%20Order"
              className="px-4 py-2 rounded-xl bg-pink-100 text-black font-semibold"
            >
              Email your order
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-gray-600">
        <div className="mx-auto max-w-6xl px-4 flex items-center justify-center gap-3">
          <img src="/logo-round.png" alt="Lit by 2 round logo" className="h-8 w-8 rounded-full object-contain" />
          <span>© {new Date().getFullYear()} Lit by 2 • christinacrain72@gmail.com</span>
        </div>
      </footer>
    </div>
  );
}
