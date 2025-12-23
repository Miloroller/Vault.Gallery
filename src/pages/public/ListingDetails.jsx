import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SeoSchema from "../../components/seo/SeoSchema";
import { listingSchema } from "../../lib/seo/schemaGenerators";
import { getListingById } from "../../lib/api/listings";

export default function ListingDetails() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    getListingById(id).then(setListing);
  }, [id]);

  if (!listing) {
    return <p className="text-muted">Loading listing…</p>;
  }

  return (
    <>
      <SeoSchema schema={listingSchema(listing)} />

      <section className="max-w-6xl space-y-16">
        <header className="space-y-4">
          <span className="text-xs uppercase tracking-wide text-muted">
            {listing.category}
          </span>

          <h1 className="text-3xl font-semibold">{listing.title}</h1>

          {listing.sellerId && (
            <Link
              to={`/seller/${listing.sellerId}`}
              className="text-sm text-muted hover:text-white"
            >
              Sold by{" "}
              <span className="text-green-500">
                Seller #{listing.sellerId}
              </span>
            </Link>
          )}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-muted">{listing.description}</p>
            </section>
          </div>

          <aside className="rounded-xl border border-white/10 bg-bg p-6 space-y-6 h-fit">
            <div>
              <p className="text-sm text-muted">Price</p>
              <p className="text-3xl font-semibold">${listing.priceUsd}</p>
            </div>

            <Link
              to={`/checkout?listing=${listing.id}`}
              className="block text-center px-6 py-3 rounded-md bg-green-500 text-black font-medium hover:bg-green-400 transition"
            >
              Buy now
            </Link>

            <p className="text-xs text-muted text-center">
              Buyers pay the listed price. Platform fee is deducted from the
              seller.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
