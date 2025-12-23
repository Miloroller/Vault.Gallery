import { useState } from "react";
import { openDispute } from "../../lib/orders/escrowService";

export default function OrderStatus() {
  const [order, setOrder] = useState({
    id: "demo_order",
    status: "delivered",
  });

  const dispute = () => {
    setOrder(openDispute(order, "Issue with delivery"));
  };

  return (
    <section className="max-w-xl space-y-8">
      <h1 className="text-2xl font-semibold">Order status</h1>

      <p className="text-muted">
        Status: <strong>{order.status}</strong>
      </p>

      {order.status === "delivered" && (
        <button
          onClick={dispute}
          className="px-4 py-2 rounded-md border border-red-500 text-red-400"
        >
          Open dispute
        </button>
      )}
    </section>
  );
}
