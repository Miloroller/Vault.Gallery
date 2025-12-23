// src/pages/dashboard/FeatureListing.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import { createFeaturedBoostPayment } from "../../lib/payments/featuredBoostService";
import { PLATFORM_CONFIG } from "../../lib/config";

export default function FeatureListing() {
  const { id } = useParams();
  const [payment, setPayment] = useState(null);

  const handleBoost = async () => {
    const result = await createFeaturedBoostPayment({
      listingId: id,
      sellerId: "seller_1",
    });
    setPayment(result);
  };

  return (
    <section className="max-w-2xl space-y-8">
      <h1 className="text-2xl font-semibold">Feature this listing</h1>

      <div className="rounded-xl border border-white/10 bg-bg p-6 space-y-4">
        <p className="text-muted">
          Featured listings appear at the top of the marketplace and categories.
        </p>

        <ul className="text-sm text-muted space-y-1">
          <li>• One-time boost fee: ${PLATFORM_CONFIG.FEATURED_ONE_TIME_FEE_USD}</li>
          <li>• Seller fee on sale: {PLATFORM_CONFIG.FEATURED_FEE_PERCENT}%</li>
          <li>• Buyers never see fees</li>
        </ul>

        <button
          onClick={handleBoost}
          className="w-full px-4 py-3 rounded-md bg-green-500 text-black font-medium hover:bg-green-400 transition"
        >
          Pay & feature listing
        </button>

        {payment && (
          <div className="border-t border-white/10 pt-4 text-sm text-muted space-y-1">
            <p>Payment created</p>
            <p>Amount: ${payment.amountUsd}</p>
            <p>Status: {payment.status}</p>
          </div>
        )}
      </div>
    </section>
  );
}
