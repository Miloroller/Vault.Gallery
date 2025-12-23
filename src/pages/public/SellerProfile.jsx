// src/pages/public/SellerProfile.jsx
import { Link, useParams } from "react-router-dom";

export default function SellerProfile() {
  const { id } = useParams();

  const seller = {
    id,
    name: "AutomationLabs",
    bio: "Building production-ready SaaS tools and automation systems for modern businesses.",
    joined: "2023",
    totalSales: 128,
    rating: 4.9,
  };

  return (
    <section className="max-w-5xl space-y-12">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">{seller.name}</h1>
        <p className="text-muted max-w-2xl">{seller.bio}</p>

        <div className="flex gap-6 text-sm text-muted">
          <span>⭐ {seller.rating}</span>
          <span>{seller.totalSales} sales</span>
          <span>Member since {seller.joined}</span>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Active listings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-white/10 bg-bg p-5">
            <p className="font-medium">AI Automation SaaS</p>
            <p className="text-sm text-muted mt-1">
              Full-stack SaaS with auth & dashboard
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="font-semibold">$1,200</span>
              <Link
                to="/listing/1"
                className="text-green-500 text-sm hover:underline"
              >
                View →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
