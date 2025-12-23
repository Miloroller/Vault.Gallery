// src/pages/public/Privacy.jsx

export default function Privacy() {
  return (
    <section className="max-w-4xl space-y-10">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>

      <p className="text-muted">
        This policy explains how we collect, use, and protect personal
        information when you use the marketplace.
      </p>

      <div className="space-y-6 text-muted">
        <section>
          <h2 className="text-xl font-medium text-white mb-2">
            Information collected
          </h2>
          <p>
            We may collect account information, transaction data, and usage
            analytics to operate the platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-white mb-2">
            Use of information
          </h2>
          <p>
            Information is used to provide services, process transactions, and
            improve the platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-white mb-2">
            Data protection
          </h2>
          <p>
            Reasonable security measures are used to protect stored data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-white mb-2">
            Third parties
          </h2>
          <p>
            Payment providers and analytics services may process limited data
            as required for operation.
          </p>
        </section>
      </div>
    </section>
  );
}
