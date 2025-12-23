import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getListingById } from "../../lib/api/listings";
import { createNewOrder } from "../../lib/api/orders";
import { createPayment } from "../../lib/payments/paymentService";
import { ORDER_STATUS } from "../../lib/orders/orderStateMachine";

export default function Checkout() {
  const [params] = useSearchParams();
  const listingId = params.get("listing");

  const [listing, setListing] = useState(null);
  const [order, setOrder] = useState(null);
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    getListingById(listingId).then(setListing);
  }, [listingId]);

  if (!listing) {
    return <p className="text-muted">Loading checkout…</p>;
  }

  const handlePay = async (method) => {
    const createdOrder = await createNewOrder({
      listing,
      buyerId: "buyer_demo",
      paymentMethod: method,
      status: ORDER_STATUS.CREATED,
    });

    const paymentResult = await createPayment({
      order: createdOrder,
      method,
    });

    setOrder(createdOrder);
    setPayment(paymentResult);
  };

  return (
    <section className="max-w-3xl space-y-10">
      <h1 className="text-3xl font-semibold">Secure checkout</h1>

      <div className="rounded-xl border border-white/10 bg-bg p-6 space-y-6">
        <div className="flex justify-between">
          <span>{listing.title}</span>
          <span className="font-semibold">${listing.priceUsd}</span>
        </div>

        <button
          onClick={() => handlePay("crypto")}
          className="w-full px-4 py-3 rounded-md bg-green-500 text-black font-medium"
        >
          Pay with crypto
        </button>

        <button
          onClick={() => handlePay("card")}
          className="w-full px-4 py-3 rounded-md border border-white/20"
        >
          Pay with card
        </button>

        {payment && (
          <div className="border-t border-white/10 pt-4 text-sm text-muted space-y-1">
            <p>Payment provider: {payment.provider}</p>
            <p>Status: {payment.status}</p>
            {payment.payAddress && (
              <p>Send crypto to: {payment.payAddress}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
