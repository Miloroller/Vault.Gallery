import { createCryptoPayment } from "./providers/cryptoProvider";
import { createFiatPayment } from "./providers/fiatProvider";

export async function createPayment({ order, method }) {
  if (method === "crypto") {
    return createCryptoPayment({ order });
  }

  if (method === "card") {
    return createFiatPayment({ order });
  }

  throw new Error("Unsupported payment method");
}
