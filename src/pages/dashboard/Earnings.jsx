// src/pages/dashboard/Earnings.jsx
import { useEffect, useState } from "react";
import { listings } from "../../lib/api/mockDb";
import { createNewOrder } from "../../lib/api/orders";

export default function Earnings() {
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    async function calculate() {
      const orders = await Promise.all(
        listings.map((listing) =>
          createNewOrder({
            listing,
            buyerId: "buyer_demo",
            paymentMethod: "crypto",
          })
        )
      );
      const total = orders.reduce(
        (sum, o) => sum + o.sellerPayoutUsd,
        0
      );
      setEarnings(total);
    }
    calculate();
  }, []);

  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold">Earnings</h1>

      <div className="rounded-lg border border-white/10 bg-bg p-6">
        <p className="text-sm text-muted">Total earnings</p>
        <p className="text-3xl font-semibold mt-2">
          ${earnings.toFixed(2)}
        </p>
      </div>
    </section>
  );
}
