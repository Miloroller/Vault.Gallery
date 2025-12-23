import { useState } from "react";
import { PLATFORM_CONFIG } from "../../lib/config";
import { createListing } from "../../lib/models/listing";

export default function CreateListing() {
  const [featured, setFeatured] = useState(false);

  const handleSubmit = () => {
    createListing({
      id: crypto.randomUUID(),
      title: "New Listing",
      description: "Description",
      priceUsd: 100,
      category: "General",
      sellerId: "seller_1",
      featured,
    });

    if (featured) {
      alert(
        `Featured listing created.\nOne-time boost fee: $${PLATFORM_CONFIG.FEATURED_ONE_TIME_FEE_USD}\nSeller fee: ${PLATFORM_CONFIG.FEATURED_FEE_PERCENT}%`
      );
    }
  };

  return (
    <section className="space-y-8 max-w-3xl">
      <h1 className="text-2xl font-semibold">Create listing</h1>

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={featured}
          onChange={e => setFeatured(e.target.checked)}
        />
        <span>
          Feature this listing (+$10 boost, 10% fee)
        </span>
      </label>

      <button
        onClick={handleSubmit}
        className="px-6 py-3 bg-green-500 text-black rounded-md"
      >
        Publish listing
      </button>
    </section>
  );
}
