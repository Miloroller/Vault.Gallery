// src/lib/config.js
// ENTERPRISE-GRADE PLATFORM CONFIG (LOCKED, CRYPTO-MAXIMALIST, MONETIZATION-READY)

export const PLATFORM_CONFIG = {
  /* ======================================================
     PLATFORM ECONOMICS
     ====================================================== */

  // Standard listings
  PLATFORM_FEE_PERCENT: 5, // Seller fee %, deducted from seller payout only

  // Featured listings (visibility boost)
  FEATURED_FEE_PERCENT: 10,          // Seller fee % for featured listings
  FEATURED_ONE_TIME_FEE_USD: 10,     // One-time boost fee per featured listing


  /* ======================================================
     FIAT SUPPORT (GLOBAL)
     ====================================================== */

  SUPPORTED_FIAT_CURRENCIES: [
    "USD",
    "EUR",
    "GBP",
    "CAD",
    "AUD",
    "CHF",
    "JPY",
  ],


  /* ======================================================
     CRYPTO SUPPORT (CRYPTO-NATIVE, GATEWAY-AGNOSTIC)
     ====================================================== */

  // Broad, future-proof crypto support
  SUPPORTED_CRYPTO_CURRENCIES: [
    "BTC",   // Bitcoin
    "ETH",   // Ethereum
    "USDT",  // Tether
    "USDC",  // USD Coin
    "XMR",   // Monero
    "ADA",   // Cardano
    "XRP",   // Ripple
    "SOL",   // Solana
    "DOT",   // Polkadot
    "AVAX",  // Avalanche
    "BNB",   // BNB Chain
    "LTC",   // Litecoin
    "DOGE",  // Dogecoin
    "TRX",   // Tron
    "MATIC", // Polygon
    "ATOM",  // Cosmos
    "NEAR",  // Near
    "ALGO",  // Algorand
    "ICP",   // Internet Computer
    "FIL",   // Filecoin
  ],


  /* ======================================================
     LISTING RULES
     ====================================================== */

  MIN_LISTING_PRICE_USD: 0,          // No minimum — creator freedom
  MAX_LISTING_PRICE_USD: 1_000_000,  // Safety cap (can be raised later)


  /* ======================================================
     DEFAULTS & PHILOSOPHY
     ====================================================== */

  DEFAULT_FIAT_CURRENCY: "USD",

  // Platform principles (DO NOT VIOLATE):
  // - Buyer pays the listed price only
  // - Sellers always see exact fees and payouts upfront
  // - Platform fees are never exposed to buyers
  // - Featured listings affect visibility, not buyer pricing
};
