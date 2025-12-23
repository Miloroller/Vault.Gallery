// src/components/dashboard/DashboardSidebar.jsx
import { NavLink } from "react-router-dom";

const links = [
  { to: "/dashboard", label: "Overview", end: true },
  { to: "/dashboard/listings", label: "My Listings" },
  { to: "/dashboard/create", label: "Create Listing" },
  { to: "/dashboard/orders", label: "Orders" },
  { to: "/dashboard/earnings", label: "Earnings" },
  { to: "/dashboard/withdrawals", label: "Withdrawals" },
  { to: "/dashboard/settings", label: "Settings" },
];

export default function DashboardSidebar() {
  return (
    <aside className="w-64 border-r border-white/10 bg-bg p-6 space-y-6">
      <h2 className="text-lg font-semibold">Seller Dashboard</h2>

      <nav className="space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md text-sm transition ${
                isActive
                  ? "bg-green-500 text-black"
                  : "text-muted hover:text-white hover:bg-white/5"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
