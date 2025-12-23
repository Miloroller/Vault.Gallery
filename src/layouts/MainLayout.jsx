// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import AdSidebar from "../components/ads/AdSidebar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6">
        <div className="flex">
          {/* Left Ads */}
          <AdSidebar position="left" />

          {/* Main Content */}
          <div className="flex-1 py-16">
            <Outlet />
          </div>

          {/* Right Ads */}
          <AdSidebar position="right" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
