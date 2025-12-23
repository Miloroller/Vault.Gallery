// src/lib/payments/featuredBoostService.js
import { PLATFORM_CONFIG } from "../config";

export async function createFeaturedBoostPayment({ listingId, sellerId }) {
  // Backend-ready: replace with Stripe/NOWPayments intent creation
  return {
    id: crypto.randomUUID(),
    listingId,
    sellerId,
    amountUsd: PLATFORM_CONFIG.FEATURED_ONE_TIME_FEE_USD,
    currency: PLATFORM_CONFIG.DEFAULT_FIAT_CURRENCY,
    provider: "Stripe | NOWPayments",
    status: "pending", // pending | paid | failed
    createdAt: new Date().toISOString(),
  };
}
