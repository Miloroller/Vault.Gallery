import { PLATFORM_CONFIG } from "../config";

export function createOrder({ listing, buyerId, paymentMethod }) {
  const fee = (listing.priceUsd * PLATFORM_CONFIG.PLATFORM_FEE_PERCENT) / 100;
  const sellerPayout = listing.priceUsd - fee;

  return {
    id: crypto.randomUUID(),
    listingId: listing.id,
    sellerId: listing.sellerId,
    buyerId,
    amountUsd: listing.priceUsd,
    platformFeeUsd: fee,
    sellerPayoutUsd: sellerPayout,
    paymentMethod, // crypto | card
    status: "pending", // pending | paid | delivered | completed
    createdAt: new Date().toISOString(),
  };
}
