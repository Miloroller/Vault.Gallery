// src/pages/public/Categories.jsx
import { Link } from "react-router-dom";

const categories = [
  {
    slug: "websites",
    title: "Websites & Web Apps",
    description: "Complete websites, SaaS products, dashboards, and portals.",
  },
  {
    slug: "source-code",
    title: "Source Code",
    description: "Reusable codebases, scripts, libraries, and integrations.",
  },
  {
    slug: "templates",
    title: "Templates & UI Kits",
    description: "Landing pages, themes, admin panels, and design systems.",
  },
  {
    slug: "automation",
    title: "Automation & Bots",
    description: "Automation tools, scrapers, bots, and workflow systems.",
  },
  {
    slug: "crypto",
    title: "Crypto & Web3",
    description: "Smart contracts, dApps, blockchain tools, and integrations.",
  },
  {
    slug: "other",
    title: "Other Digital Assets",
    description: "Anything digital that delivers value instantly.",
  },
];

export default function Categories() {
  return (
    <section className="max-w-6xl space-y-12">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Categories</h1>
        <p className="text-muted max-w-3xl">
          Browse digital assets by category. All listings are delivered digitally
          and can be purchased with fiat or cryptocurrency.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/categories/${cat.slug}`}
            className="rounded-xl border border-white/10 bg-bg p-6 hover:border-white/30 transition"
          >
            <h2 className="text-lg font-semibold">{cat.title}</h2>
            <p className="text-sm text-muted mt-2">{cat.description}</p>
            <span className="inline-block mt-4 text-sm text-green-500">
              Browse →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
