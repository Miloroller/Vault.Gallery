export function createSeller(data) {
  return {
    id: data.id,
    name: data.name,
    bio: data.bio,
    rating: data.rating || 0,
    totalSales: data.totalSales || 0,
    joinedAt: data.joinedAt || new Date().toISOString(),
  };
}
