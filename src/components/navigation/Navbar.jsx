import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LEFT — BRAND */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Digital<span className="text-green-500">Market</span>
        </Link>

        {/* CENTER — PRIMARY NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
          <Link
            to="/marketplace"
            className="hover:text-white transition"
          >
            Marketplace
          </Link>

          <Link
            to="/categories"
            className="hover:text-white transition"
          >
            Categories
          </Link>

          <Link
            to="/sell"
            className="hover:text-white transition"
          >
            Start Selling
          </Link>

          <Link
            to="/how-it-works"
            className="hover:text-white transition"
          >
            How it works
          </Link>
        </nav>

        {/* RIGHT — ACTIONS */}
        <div className="flex items-center gap-3">

          {/* Secondary action */}
          <Link
            to="/login"
            className="hidden sm:inline-block text-sm text-muted hover:text-white transition"
          >
            Sign in
          </Link>

          {/* Primary CTA */}
          <Link
            to="/marketplace"
            className="px-4 py-2 rounded-md bg-green-500 text-black text-sm font-medium hover:bg-green-400 transition"
          >
            Browse Assets
          </Link>

        </div>

      </div>
    </header>
  );
}
