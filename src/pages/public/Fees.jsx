// src/pages/public/Fees.jsx

export default function Fees() {
  return (
    <div className="space-y-24 max-w-5xl">

      {/* HEADER */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">
          Fees and payments
        </h1>
        <p className="text-muted text-lg">
          Clear, predictable pricing for buying and selling digital assets.
          No subscriptions. No hidden costs.
        </p>
      </section>

      {/* CORE RULES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">
            Listing fees
          </h2>
          <p className="text-muted">
            Listing digital assets on the marketplace is completely free.
            Sellers can publish listings without any upfront cost.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold">
            Platform fees
          </h2>
          <p className="text-muted">
            A transparent platform fee is deducted from the seller’s payout
            only after a successful sale is completed.
          </p>
        </div>
      </section>

      {/* BUYERS VS SELLERS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="border border-white/10 rounded-xl p-6 bg-panel/50 space-y-3">
          <h3 className="text-lg font-medium">
            For buyers
          </h3>
          <ul className="list-disc list-inside text-muted space-y-1">
            <li>You always pay the listed price</li>
            <li>No additional platform fees at checkout</li>
            <li>Pay using fiat or cryptocurrency</li>
            <li>Global access without banking friction</li>
          </ul>
        </div>

        <div className="border border-white/10 rounded-xl p-6 bg-panel/50 space-y-3">
          <h3 className="text-lg font-medium">
            For sellers
          </h3>
          <ul className="list-disc list-inside text-muted space-y-1">
            <li>Free to list digital assets</li>
            <li>No subscriptions or recurring costs</li>
            <li>Platform fee deducted automatically after sale</li>
            <li>Payout amount shown before publishing</li>
          </ul>
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Supported payment methods
        </h2>
        <p className="text-muted">
          Buyers can complete purchases using traditional payment methods
          or supported cryptocurrencies. The platform treats fiat and crypto
          payments equally.
        </p>

        <ul className="list-disc list-inside text-muted space-y-1">
          <li>Credit and debit cards</li>
          <li>Bank-supported fiat payments</li>
          <li>Cryptocurrency wallets</li>
        </ul>
      </section>

      {/* PAYOUTS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Seller payouts
        </h2>
        <p className="text-muted">
          Sellers receive payouts after successful delivery of digital assets.
          Platform fees are deducted automatically before funds are released.
        </p>

        <p className="text-muted">
          Payout methods depend on the seller’s chosen setup and may include
          fiat transfers or cryptocurrency wallets.
        </p>
      </section>

      {/* TRANSPARENCY */}
      <section className="border border-white/10 rounded-xl p-6 bg-panel/50 space-y-3">
        <h2 className="text-xl font-semibold">
          Transparency and trust
        </h2>
        <p className="text-muted">
          The marketplace is designed to provide clear expectations for both
          buyers and sellers. Pricing, fees, and payouts are always visible
          before transactions are completed.
        </p>
      </section>

    </div>
  );
}
