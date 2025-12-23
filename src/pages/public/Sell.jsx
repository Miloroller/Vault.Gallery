// src/pages/public/Sell.jsx
import { Link } from "react-router-dom";

export default function Sell() {
  return (
    <section className="max-w-4xl space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold">
          Sell digital assets globally
        </h1>
        <p className="text-muted max-w-2xl">
          List websites, source code, templates, and digital products.
          Free to list. Platform fee only on successful sales.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          ["Free to list", "No upfront costs"],
          ["Global buyers", "Crypto & fiat"],
          ["Transparent fees", "You see payouts upfront"],
        ].map(([title, desc]) => (
          <div
            key={title}
            className="rounded-lg border border-white/10 bg-bg p-5"
          >
            <p className="font-medium">{title}</p>
            <p className="text-sm text-muted mt-1">{desc}</p>
          </div>
        ))}
      </div>

      <Link
        to="/dashboard/create"
        className="inline-block px-6 py-3 rounded-md bg-green-500 text-black font-medium hover:bg-green-400 transition"
      >
        Create your first listing
      </Link>
    </section>
  );
}
