// src/pages/dashboard/MyListings.jsx
import { Link } from "react-router-dom";
import { listings } from "../../lib/api/mockDb";

export default function MyListings() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold">My Listings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="rounded-lg border border-white/10 bg-bg p-5 space-y-3"
          >
            <div className="flex justify-between items-center">
              <p className="font-medium">{listing.title}</p>
              {listing.featured && (
                <span className="text-xs text-green-400 uppercase">
                  Featured
                </span>
              )}
            </div>

            <p className="text-sm text-muted">
              ${listing.priceUsd} · {listing.status}
            </p>

            <div className="flex gap-4 pt-2">
              <Link
                to={`/dashboard/edit/${listing.id}`}
                className="text-sm text-green-500 hover:underline"
              >
                Edit
              </Link>

              {!listing.featured && (
                <Link
                  to={`/dashboard/feature/${listing.id}`}
                  className="text-sm text-yellow-400 hover:underline"
                >
                  Feature
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
