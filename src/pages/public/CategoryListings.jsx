import { useParams, Link } from "react-router-dom";
import SeoSchema from "../../components/seo/SeoSchema";
import { categorySchema } from "../../lib/seo/schemaGenerators";
import { listings } from "../../lib/api/mockDb";

const CATEGORY_META = {
  websites: {
    title: "Websites & Web Apps",
    description:
      "Buy and sell complete websites, SaaS products, dashboards, and portals.",
  },
  "source-code": {
    title: "Source Code",
    description:
      "Reusable codebases, scripts, libraries, and integrations.",
  },
  templates: {
    title: "Templates & UI Kits",
    description:
      "Landing pages, themes, admin panels, and design systems.",
  },
  automation: {
    title: "Automation & Bots",
    description:
      "Automation tools, scrapers, bots, and workflow systems.",
  },
  crypto: {
    title: "Crypto & Web3",
    description:
      "Smart contracts, dApps, blockchain tools, and integrations.",
  },
  other: {
    title: "Other Digital Assets",
    description:
      "Anything digital that delivers value instantly.",
  },
};

export default function CategoryListings() {
  const { slug } = useParams();
  const meta = CATEGORY_META[slug];

  if (!meta) {
    return (
      <section>
        <h1 className="text-2xl font-semibold">Category not found</h1>
      </section>
    );
  }

  const filtered = listings.filter(
    (l) => l.category?.toLowerCase() === slug
  );

  return (
    <>
      <SeoSchema schema={categorySchema(meta)} />

      <section className="max-w-6xl space-y-12">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold">{meta.title}</h1>
          <p className="text-muted max-w-3xl">{meta.description}</p>
        </header>

        {filtered.length === 0 ? (
          <p className="text-muted">
            No listings yet. New assets are added regularly.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((listing) => (
              <Link
                key={listing.id}
                to={`/listing/${listing.id}`}
                className="rounded-xl border border-white/10 bg-bg p-6 hover:border-white/30 transition"
              >
                <h3 className="text-lg font-semibold">{listing.title}</h3>
                <p className="text-sm text-muted mt-1">
                  ${listing.priceUsd}
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
