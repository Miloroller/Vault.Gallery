// src/pages/admin/AdminDashboard.jsx
import { ads } from "../../lib/api/mockAds";
import { AD_CONFIG } from "../../lib/ads/adConfig";

export default function AdminDashboard() {
  return (
    <section className="space-y-8 max-w-4xl">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

      <div className="rounded-lg border border-white/10 bg-bg p-6 space-y-4">
        <h2 className="font-semibold">Active Ads</h2>

        {ads.map((ad) => (
          <div
            key={ad.id}
            className="flex justify-between items-center text-sm border-b border-white/10 pb-2"
          >
            <span>{ad.title}</span>
            <span className="text-muted">
              Ends {new Date(ad.endsAt).toLocaleDateString()}
            </span>
          </div>
        ))}

        <p className="text-xs text-muted pt-4">
          Price: ${AD_CONFIG.DEFAULT_AD_PRICE_USD} / {AD_CONFIG.AD_DURATION_DAYS} days
        </p>
      </div>
    </section>
  );
}
