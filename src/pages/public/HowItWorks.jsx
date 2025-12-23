// src/pages/public/HowItWorks.jsx
export default function HowItWorks() {
  return (
    <section className="max-w-5xl space-y-16">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold">How it works</h1>
        <p className="text-muted max-w-3xl">
          A transparent marketplace for buying and selling digital assets.
          Buyers pay the listed price. Sellers know exactly what they earn.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">1. List or browse</h2>
          <p className="text-muted">
            Sellers list digital assets for free. Buyers browse listings,
            categories, and seller profiles to evaluate quality.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold">2. Purchase securely</h2>
          <p className="text-muted">
            Buyers pay using fiat or supported cryptocurrencies. The price shown
            is the final price for buyers.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold">3. Delivery & payout</h2>
          <p className="text-muted">
            Digital assets are delivered instantly or upon confirmation.
            Sellers receive their payout after the platform fee is deducted.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-white/10 bg-bg p-8 space-y-6">
        <h2 className="text-2xl font-semibold">Platform economics</h2>

        <ul className="space-y-2 text-muted">
          <li>• Free to list — no upfront costs</li>
          <li>• 5% platform fee deducted from seller payout only</li>
          <li>• Buyers never see platform fees</li>
          <li>• Fiat and crypto payments supported</li>
          <li>• Global, digital-first marketplace</li>
        </ul>
      </section>

      <section className="rounded-xl border border-white/10 bg-bg p-8 space-y-4">
        <h2 className="text-2xl font-semibold">Who this is for</h2>
        <p className="text-muted">
          Developers, founders, indie hackers, agencies, and digital creators
          who want a simple, transparent way to sell or buy digital assets
          without unnecessary friction.
        </p>
      </section>
    </section>
  );
}
