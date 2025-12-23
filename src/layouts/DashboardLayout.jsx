import { Outlet } from "react-router-dom";
import DashboardSidebar from "../pages/dashboard/DashboardSidebar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-bg text-white">
      <DashboardSidebar />

      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}
