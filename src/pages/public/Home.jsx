import { Link } from "react-router-dom";
import SeoSchema from "../../components/seo/SeoSchema";
import { marketplaceSchema } from "../../lib/seo/schemaGenerators";

export default function Home() {
  return (
    <>
      <SeoSchema schema={marketplaceSchema()} />

      <main className="max-w-6xl mx-auto px-6 py-24 space-y-28">

        {/* HERO */}
        <section className="space-y-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            A marketplace for buying and selling
            <br />
            <span className="text-green-500"> digital assets</span>
          </h1>

          <p className="text-muted text-lg max-w-2xl">
            Buy and sell websites, source code, templates, and digital products.
            Pay with fiat or cryptocurrency. Built for developers, founders, and
            serious digital creators.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/marketplace"
              className="px-6 py-3 rounded-md bg-green-500 text-black font-medium hover:bg-green-400 transition"
            >
              Explore Marketplace
            </Link>

            <Link
              to="/sell"
              className="px-6 py-3 rounded-md border border-white/20 text-white hover:border-white/40 transition"
            >
              Start Selling
            </Link>
          </div>

          <p className="text-xs text-muted">
            Free to list. Platform fee only on successful sales.
          </p>
        </section>

        {/* TRUST STRIP */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl">
          {[
            {
              title: "Buyers pay the listed price",
              desc: "No hidden fees at checkout.",
            },
            {
              title: "Sellers see payouts upfront",
              desc: "Fees are transparent and predictable.",
            },
            {
              title: "Free to list assets",
              desc: "Only pay when you make a sale.",
            },
            {
              title: "Crypto & fiat supported",
              desc: "Pay how you prefer.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-white/10 bg-bg p-5"
            >
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-muted mt-1">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* WHAT CAN BE SOLD */}
        <section className="max-w-5xl space-y-8">
          <h2 className="text-2xl font-semibold">
            Digital assets traded on the marketplace
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted">
            <li>• Complete websites and web applications</li>
            <li>• Source code, scripts, and libraries</li>
            <li>• Templates, themes, and UI kits</li>
            <li>• SaaS tools and internal software</li>
            <li>• Automation tools and integrations</li>
            <li>• Digital products and online assets</li>
          </ul>
        </section>

        {/* HOW IT WORKS */}
        <section className="max-w-6xl space-y-10">
          <h2 className="text-2xl font-semibold">How the marketplace works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-medium">1. List or browse</p>
              <p className="text-muted mt-2">
                Sellers publish assets with clear pricing. Buyers browse and
                evaluate listings.
              </p>
            </div>

            <div>
              <p className="font-medium">2. Purchase securely</p>
              <p className="text-muted mt-2">
                Buyers pay using fiat or cryptocurrency. The listed price is
                final.
              </p>
            </div>

            <div>
              <p className="font-medium">3. Delivery & payout</p>
              <p className="text-muted mt-2">
                Assets are delivered digitally. Sellers are paid after successful
                delivery.
              </p>
            </div>
          </div>
        </section>

        {/* SELLER CTA */}
        <section className="rounded-2xl border border-white/10 bg-bg p-10 max-w-5xl">
          <h2 className="text-2xl font-semibold">Built for serious creators</h2>

          <p className="text-muted mt-3 max-w-2xl">
            Reach a global audience of buyers looking for ready-to-use digital
            assets. Pricing is transparent, payouts are predictable, and listing
            is always free.
          </p>

          <Link
            to="/sell"
            className="inline-block mt-6 px-6 py-3 rounded-md bg-green-500 text-black font-medium hover:bg-green-400 transition"
          >
            Start selling assets
          </Link>
        </section>

      </main>
    </>
  );
}
