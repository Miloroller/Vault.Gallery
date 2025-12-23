// src/pages/dashboard/CreateAd.jsx
import { useState } from "react";
import { AD_CONFIG } from "../../lib/ads/adConfig";
import { createAd } from "../../lib/ads/adService";

export default function CreateAd() {
  const [created, setCreated] = useState(false);

  const handleCreate = () => {
    createAd({
      title: "Your Ad",
      imageUrl: "https://via.placeholder.com/160x600",
      linkUrl: "https://example.com",
    });
    setCreated(true);
  };

  return (
    <section className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-semibold">Create Ad</h1>

      <p className="text-muted">
        ${AD_CONFIG.DEFAULT_AD_PRICE_USD} for {AD_CONFIG.AD_DURATION_DAYS} days.
        Appears in sidebar rotation.
      </p>

      <button
        onClick={handleCreate}
        className="px-6 py-3 bg-green-500 text-black rounded-md"
      >
        Pay & publish ad
      </button>

      {created && (
        <p className="text-green-400 text-sm">
          Ad created (demo state).
        </p>
      )}
    </section>
  );
}
