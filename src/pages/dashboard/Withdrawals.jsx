// src/pages/dashboard/Withdrawals.jsx
export default function Withdrawals() {
  return (
    <section className="max-w-3xl space-y-8">
      <h1 className="text-2xl font-semibold">Withdrawals</h1>

      <div className="rounded-lg border border-white/10 bg-bg p-6 space-y-4">
        <p className="text-muted">
          Withdraw your earnings to fiat or crypto wallets.
        </p>

        <input
          placeholder="Wallet or bank destination"
          className="w-full px-4 py-3 rounded-md bg-bg border border-white/10"
        />

        <button className="px-6 py-3 rounded-md bg-green-500 text-black font-medium hover:bg-green-400 transition">
          Request withdrawal
        </button>
      </div>
    </section>
  );
}
