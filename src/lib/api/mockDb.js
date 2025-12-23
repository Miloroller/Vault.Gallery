// src/lib/api/mockDb.js
// MOCK DATABASE (BACKEND-READY STRUCTURE)

import { createListing } from "../models/listing";

/* =========================
   SELLERS
   ========================= */

export const sellers = [
  {
    id: "seller_1",
    name: "AutomationLabs",
    bio: "Building production-ready SaaS tools and automation systems for modern businesses.",
    joined: "2023",
    rating: 4.9,
    totalSales: 128,
  },
  {
    id: "seller_2",
    name: "IndieCodeStudio",
    bio: "High-quality templates and frontend systems for founders.",
    joined: "2022",
    rating: 4.7,
    totalSales: 89,
  },
];

/* =========================
   LISTINGS
   ========================= */

export const listings = [
  createListing({
    id: "listing_1",
    title: "AI Automation SaaS Platform",
    description: "Full SaaS with authentication, dashboard, and API.",
    priceUsd: 1200,
    category: "SaaS",
    sellerId: "seller_1",
    featured: true,
  }),
  createListing({
    id: "listing_2",
    title: "High-conversion Landing Page Template",
    description: "Optimized landing page for SaaS startups.",
    priceUsd: 79,
    category: "Templates",
    sellerId: "seller_2",
    featured: false,
  }),
];
