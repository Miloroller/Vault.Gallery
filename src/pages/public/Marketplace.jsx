import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListings } from "../../lib/api/listings";

export default function Marketplace() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    getListings().then(setListings);
  }, []);

  const featured = listings.filter(l => l.featured);
  const normal = listings.filter(l => !l.featured);

  return (
    <section className="space-y-16">

      {featured.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Featured listings</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {featured.map(listing => (
              <Link
                key={listing.id}
                to={`/listing/${listing.id}`}
                className="rounded-xl border border-green-500 bg-bg p-6"
              >
                <span className="text-xs text-green-400 uppercase">
                  Featured
                </span>
                <h3 className="text-lg font-semibold mt-2">
                  {listing.title}
                </h3>
                <p className="text-sm text-muted mt-1">
                  {listing.description}
                </p>
                <p className="font-semibold mt-4">
                  ${listing.priceUsd}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">All listings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {normal.map(listing => (
            <Link
              key={listing.id}
              to={`/listing/${listing.id}`}
              className="rounded-xl border border-white/10 bg-bg p-6"
            >
              <h3 className="text-lg font-semibold">
                {listing.title}
              </h3>
              <p className="text-sm text-muted mt-1">
                {listing.description}
              </p>
              <p className="font-semibold mt-4">
                ${listing.priceUsd}
              </p>
            </Link>
          ))}
        </div>
      </section>

    </section>
  );
}
