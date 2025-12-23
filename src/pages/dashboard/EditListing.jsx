// src/pages/dashboard/EditListing.jsx
import { useParams } from "react-router-dom";
import { listings } from "../../lib/api/mockDb";

export default function EditListing() {
  const { id } = useParams();
  const listing = listings.find((l) => l.id === id);

  if (!listing) {
    return <p className="text-muted">Listing not found.</p>;
  }

  return (
    <section className="max-w-3xl space-y-8">
      <h1 className="text-2xl font-semibold">Edit Listing</h1>

      <div className="space-y-4">
        <input
          defaultValue={listing.title}
          className="w-full px-4 py-3 rounded-md bg-bg border border-white/10"
        />

        <textarea
          defaultValue={listing.description}
          className="w-full px-4 py-3 rounded-md bg-bg border border-white/10 h-32"
        />

        <input
          defaultValue={listing.priceUsd}
          className="w-full px-4 py-3 rounded-md bg-bg border border-white/10"
        />
      </div>

      <button className="px-6 py-3 rounded-md bg-green-500 text-black font-medium hover:bg-green-400 transition">
        Save changes
      </button>
    </section>
  );
}
