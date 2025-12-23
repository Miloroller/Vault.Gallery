// src/lib/api/mockAds.js
import { createAd } from "../ads/adService";

export const ads = [
  createAd({
    title: "Launch your crypto startup",
    imageUrl: "https://via.placeholder.com/160x600?text=Crypto+Ad",
    linkUrl: "https://example.com",
  }),
  createAd({
    title: "Buy & sell digital assets",
    imageUrl: "https://via.placeholder.com/160x600?text=Marketplace",
    linkUrl: "https://example.com",
  }),
];
