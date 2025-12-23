import { PLATFORM_CONFIG } from "../config";

export function calculateFees({ priceUsd, featured }) {
  const percent = featured
    ? PLATFORM_CONFIG.FEATURED_FEE_PERCENT
    : PLATFORM_CONFIG.PLATFORM_FEE_PERCENT;

  const platformFee = (priceUsd * percent) / 100;
  const sellerPayout = priceUsd - platformFee;

  return {
    platformFee,
    sellerPayout,
    percent,
  };
}
