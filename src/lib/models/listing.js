export function createListing(data) {
  return {
    id: data.id,
    title: data.title,
    description: data.description,
    priceUsd: Number(data.priceUsd),
    category: data.category,
    sellerId: data.sellerId,
    featured: data.featured || false,
    createdAt: new Date().toISOString(),
    status: "active",
  };
}
