export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">

        {/* BRAND */}
        <div className="space-y-3">
          <p className="font-semibold text-white">
            DigitalMarket
          </p>
          <p className="text-muted">
            A marketplace for buying and selling digital assets with fiat and
            cryptocurrency payments.
          </p>
        </div>

        {/* PRODUCT */}
        <div className="space-y-2">
          <p className="font-medium text-white">Product</p>
          <a href="/marketplace" className="block text-muted hover:text-white">
            Marketplace
          </a>
          <a href="/sell" className="block text-muted hover:text-white">
            Start Selling
          </a>
          <a href="/fees" className="block text-muted hover:text-white">
            Fees & Payments
          </a>
        </div>

        {/* COMPANY */}
        <div className="space-y-2">
          <p className="font-medium text-white">Company</p>
          <a href="/about" className="block text-muted hover:text-white">
            About
          </a>
          <a href="/how-it-works" className="block text-muted hover:text-white">
            How it works
          </a>
          <a href="/contact" className="block text-muted hover:text-white">
            Contact
          </a>
        </div>

        {/* LEGAL */}
        <div className="space-y-2">
          <p className="font-medium text-white">Legal</p>
          <a href="/terms" className="block text-muted hover:text-white">
            Terms
          </a>
          <a href="/privacy" className="block text-muted hover:text-white">
            Privacy
          </a>
        </div>

      </div>

      <div className="text-center text-xs text-muted pb-6">
        © {new Date().getFullYear()} DigitalMarket. All rights reserved.
      </div>
    </footer>
  );
}
