// src/lib/ads/adService.js
import { AD_CONFIG } from "./adConfig";

export function createAd({ title, imageUrl, linkUrl }) {
  return {
    id: crypto.randomUUID(),
    title,
    imageUrl,
    linkUrl,
    startsAt: new Date().toISOString(),
    endsAt: new Date(
      Date.now() + AD_CONFIG.AD_DURATION_DAYS * 86400000
    ).toISOString(),
    active: true,
  };
}

export function isAdActive(ad) {
  const now = Date.now();
  return (
    ad.active &&
    new Date(ad.startsAt).getTime() <= now &&
    new Date(ad.endsAt).getTime() >= now
  );
}
