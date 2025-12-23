import { Link } from "react-router-dom";

export default function ListingCard({ id, title, description, price, category }) {
  return (
    <Link
      to={`/listing/${id}`}
      className="block rounded-lg border border-white/10 bg-bg p-6 hover:border-green-500/40 transition"
    >
      <div className="space-y-4">
        <div>
          <p className="text-xs uppercase text-muted">
            {category}
          </p>
          <h3 className="text-lg font-medium mt-1">
            {title}
          </h3>
        </div>

        <p className="text-sm text-muted">
          {description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="font-semibold text-white">
            {price}
          </span>
          <span className="text-sm text-green-500">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
