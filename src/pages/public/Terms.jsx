// src/pages/public/Terms.jsx

export default function Terms() {
  return (
    <section className="max-w-4xl space-y-10">
      <h1 className="text-3xl font-semibold">Terms of Service</h1>

      <p className="text-muted">
        By accessing or using this marketplace, you agree to be bound by these
        Terms of Service. If you do not agree, you may not use the platform.
      </p>

      <div className="space-y-6 text-muted">
        <section>
          <h2 className="text-xl font-medium text-white mb-2">
            Marketplace role
          </h2>
          <p>
            The platform acts as a marketplace connecting independent buyers and
            sellers of digital assets. We do not own, review, or guarantee
            listings unless explicitly stated.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-white mb-2">
            Fees
          </h2>
          <p>
            Listing is free. A platform fee is deducted from the seller’s payout
            only after a successful transaction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-white mb-2">
            Payments
          </h2>
          <p>
            Buyers pay the listed price using supported fiat or cryptocurrency
            methods. Payment processing may involve third-party providers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-white mb-2">
            Liability
          </h2>
          <p>
            The platform is provided “as is” without warranties. We are not
            liable for disputes between buyers and sellers.
          </p>
        </section>
      </div>
    </section>
  );
}
