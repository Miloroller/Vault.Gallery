import { useEffect, useState } from "react";
import { listings } from "../../lib/api/mockDb";
import { createNewOrder } from "../../lib/api/orders";
import {
  markDelivered,
  markCompleted,
} from "../../lib/orders/escrowService";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    Promise.all(
      listings.map((listing) =>
        createNewOrder({
          listing,
          buyerId: "buyer_demo",
          paymentMethod: "crypto",
        })
      )
    ).then(setOrders);
  }, []);

  const updateOrder = (updated) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === updated.id ? updated : o))
    );
  };

  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold">Orders (Escrow)</h1>

      {orders.map((order) => (
        <div
          key={order.id}
          className="rounded-lg border border-white/10 bg-bg p-6 space-y-3"
        >
          <p className="font-medium">
            Order #{order.id.slice(0, 8)}
          </p>

          <p className="text-sm text-muted">
            Status: {order.status}
          </p>

          <p className="text-sm text-muted">
            Seller payout: ${order.sellerPayoutUsd.toFixed(2)}
          </p>

          {order.status === "paid" && (
            <button
              onClick={() =>
                updateOrder(markDelivered(order))
              }
              className="px-4 py-2 rounded-md bg-green-500 text-black text-sm"
            >
              Mark as delivered
            </button>
          )}

          {order.status === "delivered" && (
            <button
              onClick={() =>
                updateOrder(markCompleted(order))
              }
              className="px-4 py-2 rounded-md border border-white/20 text-sm"
            >
              Buyer confirms delivery
            </button>
          )}
        </div>
      ))}
    </section>
  );
}
