// Fiat payment abstraction (Stripe-compatible)

export async function createFiatPayment({ order }) {
  // In production, create Stripe PaymentIntent
  return {
    provider: "Stripe",
    paymentIntentId: crypto.randomUUID(),
    amountUsd: order.amountUsd,
    status: "requires_payment_method",
  };
}
