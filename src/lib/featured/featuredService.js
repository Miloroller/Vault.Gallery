// src/lib/featured/featuredService.js
import { FEATURED_CONFIG } from "./featuredConfig";

export function featureListing(listing) {
  return {
    ...listing,
    featured: true,
    featuredUntil: new Date(
      Date.now() + FEATURED_CONFIG.FEATURED_DURATION_DAYS * 86400000
    ).toISOString(),
  };
}

export function renewFeatured(listing) {
  return {
    ...listing,
    featuredUntil: new Date(
      Date.now() + FEATURED_CONFIG.FEATURED_DURATION_DAYS * 86400000
    ).toISOString(),
  };
}

export function isFeaturedActive(listing) {
  if (!listing.featured || !listing.featuredUntil) return false;
  return new Date(listing.featuredUntil).getTime() > Date.now();
}
