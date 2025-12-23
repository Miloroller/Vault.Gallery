// src/pages/dashboard/Dashboard.jsx
import { useEffect, useState } from "react";
import { listings, sellers } from "../../lib/api/mockDb";
import { createNewOrder } from "../../lib/api/orders";

export default function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // simulate existing orders
    async function seed() {
      const demoOrders = await Promise.all(
        listings.map((listing) =>
          createNewOrder({
            listing,
            buyerId: "buyer_demo",
            paymentMethod: "crypto",
          })
        )
      );
      setOrders(demoOrders);
    }
    seed();
  }, []);

  const totalEarnings = orders.reduce(
    (sum, o) => sum + o.sellerPayoutUsd,
    0
  );

  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold">Seller Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg border border-white/10 bg-bg p-5">
          <p className="text-sm text-muted">Total earnings</p>
          <p className="text-2xl font-semibold mt-1">
            ${totalEarnings.toFixed(2)}
          </p>
        </div>

        <div className="rounded-lg border border-white/10 bg-bg p-5">
          <p className="text-sm text-muted">Active listings</p>
          <p className="text-2xl font-semibold mt-1">
            {listings.length}
          </p>
        </div>

        <div className="rounded-lg border border-white/10 bg-bg p-5">
          <p className="text-sm text-muted">Orders</p>
          <p className="text-2xl font-semibold mt-1">
            {orders.length}
          </p>
        </div>
      </div>
    </section>
  );
}
