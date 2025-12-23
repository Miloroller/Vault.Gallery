// Crypto payment abstraction (NOWPayments-compatible)

export async function createCryptoPayment({ order }) {
  // In production, call NOWPayments API here
  return {
    provider: "NOWPayments",
    paymentId: crypto.randomUUID(),
    payAddress: "crypto_wallet_address_generated",
    amountUsd: order.amountUsd,
    status: "waiting_payment",
  };
}
