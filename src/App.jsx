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
      {/* BIG HERO */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-6 rounded-3xl border border-pink-200 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
          <div className="p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Logo + heading */}
            <div className="flex items-center gap-4">
              <img
                src="/logo-round.png"
                alt="Lit by 2 round logo"
                className="h-16 w-16 rounded-full object-contain"
              />
              <div>
                <p className="text-xs font-semibold tracking-widest text-black/70 uppercase">
                  Hand-poured • Small batch
                </p>
                <h2 className="mt-1 text-3xl md:text-5xl font-extrabold leading-tight text-black">
                  Candles made with love by Lit by 2
                </h2>
                <p className="mt-2 text-black/70">
                  Clean burning candles with dreamy scents. Perfect for gifts, self-care nights, and cozy vibes.
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3">
              <a
                href="#shop"
                className="px-5 py-3 rounded-full bg-black text-pink-100 font-semibold shadow-sm"
              >
                Shop our scents
              </a>
              <a
                href="#about"
                className="px-5 py-3 rounded-full border border-black text-black font-semibold bg-white"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <section id="shop" className="mx-auto max-w-6xl px-4 py-8">
        <h3 className="text-2xl md:text-3xl font-bold text-black">Best Sellers</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl border border-pink-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="aspect-square rounded-xl bg-pink-100 mb-4 flex items-center justify-center text-black/70 text-sm">
                ✨ Candle
              </div>
              <h4 className="font-semibold text-lg">{p.name}</h4>
              <p className="text-sm text-black/60">{p.notes}</p>
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

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl bg-white border border-pink-200 p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-black">Our Story</h3>
          <p className="mt-3 text-black/70 leading-relaxed">
            We’re a mother & daughter duo pouring joy into every jar. Each candle is hand-poured in small batches
            with premium fragrance oils and cotton wicks for a clean, cozy burn.
          </p>
          <ul className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
            <li className="rounded-xl border border-pink-200 bg-pink-50 px-4 py-3">🌿 Clean ingredients</li>
            <li className="rounded-xl border border-pink-200 bg-pink-50 px-4 py-3">🕯️ Long-lasting scents</li>
            <li className="rounded-xl border border-pink-200 bg-pink-50 px-4 py-3">🎁 Perfect for gifting</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl p-6 md:p-8 bg-black text-pink-100">
          <h3 className="text-2xl md:text-3xl font-extrabold">Ready to order?</h3>
          <p className="mt-2 opacity-90">Tell us what you’d like and we’ll get back to you quickly.</p>
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

      {/* FOOTER */}
      <footer className="py-10 text-center text-xs text-black/60">
        <div className="mx-auto max-w-6xl px-4 flex items-center justify-center gap-3">
          <img src="/logo-round.png" alt="Lit by 2 round logo" className="h-8 w-8 rounded-full object-contain" />
          <span>© {new Date().getFullYear()} Lit by 2 • christinacrain72@gmail.com</span>
        </div>
      </footer>
    </div>
  );
}
