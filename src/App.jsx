// src/App.jsx
// ENTERPRISE-GRADE ROUTING (PUBLIC + SELLER + ADMIN + FEATURED + ADS)

import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import RequireRole from "./components/auth/RequireRole";

/* =========================
   PUBLIC PAGES
   ========================= */
import Home from "./pages/public/Home";
import Marketplace from "./pages/public/Marketplace";
import Categories from "./pages/public/Categories";
import CategoryListings from "./pages/public/CategoryListings";
import ListingDetails from "./pages/public/ListingDetails";
import SellerProfile from "./pages/public/SellerProfile";
import Sell from "./pages/public/Sell";
import HowItWorks from "./pages/public/HowItWorks";
import Checkout from "./pages/public/Checkout";
import Login from "./pages/public/Login";
import OrderStatus from "./pages/public/OrderStatus";

/* =========================
   SELLER DASHBOARD
   ========================= */
import Dashboard from "./pages/dashboard/Dashboard";
import CreateListing from "./pages/dashboard/CreateListing";
import EditListing from "./pages/dashboard/EditListing";
import FeatureListing from "./pages/dashboard/FeatureListing";
import MyListings from "./pages/dashboard/MyListings";
import Orders from "./pages/dashboard/Orders";
import Earnings from "./pages/dashboard/Earnings";
import Withdrawals from "./pages/dashboard/Withdrawals";
import Settings from "./pages/dashboard/Settings";
import CreateAd from "./pages/dashboard/CreateAd";

/* =========================
   ADMIN
   ========================= */
import AdminDashboard from "./pages/admin/AdminDashboard";

export default function App() {
  return (
    <Routes>

      {/* =========================
          PUBLIC ROUTES
          ========================= */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:slug" element={<CategoryListings />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
        <Route path="/seller/:id" element={<SellerProfile />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order/:id" element={<OrderStatus />} />
      </Route>

      {/* =========================
          SELLER DASHBOARD (ROLE-GATED)
          ========================= */}
      <Route
        path="/dashboard"
        element={
          <RequireRole role="seller">
            <DashboardLayout />
          </RequireRole>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="create" element={<CreateListing />} />
        <Route path="edit/:id" element={<EditListing />} />
        <Route path="feature/:id" element={<FeatureListing />} />
        <Route path="listings" element={<MyListings />} />
        <Route path="orders" element={<Orders />} />
        <Route path="earnings" element={<Earnings />} />
        <Route path="withdrawals" element={<Withdrawals />} />
        <Route path="settings" element={<Settings />} />
        <Route path="ads/create" element={<CreateAd />} />
      </Route>

      {/* =========================
          ADMIN (ROLE-GATED)
          ========================= */}
      <Route
        path="/admin"
        element={
          <RequireRole role="admin">
            <MainLayout />
          </RequireRole>
        }
      >
        <Route index element={<AdminDashboard />} />
      </Route>

    </Routes>
  );
}
