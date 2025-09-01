import React from "react";

const products = [
  { id: 1, name: "Vanilla Blossom", notes: "Vanilla • Jasmine • Musk", price: "$18", size: "8 oz" },
  { id: 2, name: "Citrus Sunrise", notes: "Orange • Lemon Zest • Neroli", price: "$18", size: "8 oz" },
  { id: 3, name: "Cozy Woods", notes: "Cedar • Amber • Sandalwood", price: "$18", size: "8 oz" },
  { id: 4, name: "Lavender Calm", notes: "Lavender • Sage • Linen", price: "$18", size: "8 oz" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      {/* HEADER */}
      <header className="bg-black text-pink-200 py-4 text-center shadow-md">
        <h1 className="text-3xl font-bold">✨ Lit by 2 ✨</h1>
        <p className="text-sm">Hand-poured candles</p>
      </header>

      {/* INTRO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-12 px-4 bg-gradient-to-r from-pink-100 to-pink-200">
        <img
          src="/logo-round.png"
          alt="Lit by 2 Logo"
          className="w-40 h-40 mb-6 rounded-full shadow-lg"
        />
        <h2 className="text-3xl font-bold text-gray-800">
          Candles made with love by Lit by 2
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl">
          A mother & daughter pouring joy into every jar. Cozy, clean candles
          perfect for self-care nights, thoughtful gifts, and warm homes.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="#shop"
            className="px-6 py-3 rounded-full bg-black text-white font-medium shadow hover:bg-gray-800"
          >
            Shop our scents
          </a>
          <a
            href="mailto:christinacrain72@gmail.com"
            className="px-6 py-3 rounded-full bg-white text-black border border-black font-medium shadow hover:bg-gray-100"
          >
            Email us to order
          </a>
        </div>
      </section>

      {/* SHOP */}
      <main id="shop" className="flex-1 container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-xl shadow p-4 flex flex-col">
              <div className="bg-pink-100 flex items-center justify-center h-40 rounded-lg mb-4">
                <span className="text-gray-400">✨ Candle</span>
              </div>
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.notes}</p>
              <p className="mt-2 font-bold">{p.price}</p>
              <p className="text-xs text-gray-500">{p.size}</p>
              <a
                href="mailto:christinacrain72@gmail.com"
                className="mt-4 bg-black text-white py-2 rounded text-center hover:bg-gray-800"
              >
                Order this
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white py-6 text-center">
        <p>© 2025 Lit by 2 Candle Shop. All rights reserved.</p>
        <a
          href="mailto:christinacrain72@gmail.com"
          className="underline text-pink-300 block mt-2"
        >
          ✨ Email us to order
        </a>
      </footer>
    </div>
  );
}
