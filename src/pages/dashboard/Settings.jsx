// src/pages/dashboard/Settings.jsx
export default function Settings() {
  return (
    <section className="max-w-4xl space-y-10">
      <header>
        <h1 className="text-2xl font-semibold">Account settings</h1>
        <p className="text-muted">
          Manage your profile, payout preferences, and security settings.
        </p>
      </header>

      <div className="space-y-6">
        <div>
          <label className="block text-sm mb-1">Display name</label>
          <input
            className="w-full px-4 py-3 rounded-md bg-bg border border-white/10"
            placeholder="Your public seller name"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Payout wallet / bank</label>
          <input
            className="w-full px-4 py-3 rounded-md bg-bg border border-white/10"
            placeholder="Crypto address or bank reference"
          />
        </div>
      </div>

      <button className="px-6 py-3 rounded-md bg-green-500 text-black font-medium hover:bg-green-400 transition">
        Save settings
      </button>
    </section>
  );
}
