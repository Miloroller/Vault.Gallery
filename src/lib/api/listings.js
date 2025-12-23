import { listings } from "./mockDb";

export async function getListings() {
  return listings;
}

export async function getListingById(id) {
  return listings.find(l => l.id === id);
}
