import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function DashboardLayout() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  // Active state helper
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-100">

      {/* SIDEBAR */}
      <aside
        className={`relative flex flex-col h-full border-r bg-sidebar text-sidebar-foreground transition-all duration-300
          ${collapsed ? "w-20" : "w-64"}`}
      >
        {/* Logo / Title */}
        {/*<div className="px-4 py-6">
          {!collapsed && (
            <h2 className="text-2xl font-semibold tracking-tight">
              Mess Mate
            </h2>
          )}
        </div>
        */}


        {/* Collapse Button */}
        <Button
          variant="secondary"
          onClick={() => setCollapsed(!collapsed)}
          className={`absolute top-4 -right-4 h-8 w-8 rounded-full shadow-lg transition-transform 
            ${collapsed ? "rotate-180" : ""}`}
        >
          {collapsed ? "➡️" : "⬅️"}
        </Button>

        {/* NAVIGATION SIDEBAR */}
        <nav className="flex-1 px-3 pt-6 space-y-5">

          {/* Dashboard */}
          <Link
            to="/"
            className={`
              flex items-center gap-3 px-3 py-2 text-sm rounded-md relative transition-all
              ${isActive("/") 
                ? "bg-orange-500/20 text-orange-500 font-medium"
                : "hover:bg-accent hover:text-accent-foreground"}`}
          >
            {isActive("/") && (
              <span className="absolute left-0 h-full w-1 bg-orange-500 rounded-r-md" />
            )}
            <span>📊</span>
            {!collapsed && <span>Dashboard</span>}
          </Link>

          {/* Menu */}
          <Link
            to="/menu"
            className={`
              flex items-center gap-3 px-3 py-2 text-sm rounded-md relative transition-all
              ${isActive("/menu")
                ? "bg-orange-500/20 text-orange-500 font-medium"
                : "hover:bg-accent hover:text-accent-foreground"}`}
          >
            {isActive("/menu") && (
              <span className="absolute left-0 h-full w-1 bg-orange-500 rounded-r-md" />
            )}
            <span>🍱</span>
            {!collapsed && <span>View Menu</span>}
          </Link>

          {/* Quick Order */}
          <Link
            to="/QuickOrder"
            className={`
              flex items-center gap-3 px-3 py-2 text-sm rounded-md relative transition-all
              ${isActive("/order")
                ? "bg-orange-500/20 text-orange-500 font-medium"
                : "hover:bg-accent hover:text-accent-foreground"}`}
          >
            {isActive("/order") && (
              <span className="absolute left-0 h-full w-1 bg-orange-500 rounded-r-md" />
            )}
            <span>💳</span>
            {!collapsed && <span>Quick Order</span>}
          </Link>

          {/* Pickup */}
          <Link
            to="/SchedulePickup"
            className={`
              flex items-center gap-3 px-3 py-2 text-sm rounded-md relative transition-all
              ${isActive("/pickup")
                ? "bg-orange-500/20 text-orange-500 font-medium"
                : "hover:bg-accent hover:text-accent-foreground"}`}
          >
            {isActive("/pickup") && (
              <span className="absolute left-0 h-full w-1 bg-orange-500 rounded-r-md" />
            )}
            <span>📦</span>
            {!collapsed && <span>Schedule Pickup</span>}
          </Link>

          {/* Payments */}
          <Link
            to="/payments"
            className={`
              flex items-center gap-3 px-3 py-2 text-sm rounded-md relative transition-all
              ${isActive("/payments")
                ? "bg-orange-500/20 text-orange-500 font-medium"
                : "hover:bg-accent hover:text-accent-foreground"}`}
          >
            {isActive("/payments") && (
              <span className="absolute left-0 h-full w-1 bg-orange-500 rounded-r-md" />
            )}
            <span>💰</span>
            {!collapsed && <span>Payments</span>}
          </Link>
        </nav>

        {/* BOTTOM SECTION */}
        <div className="border-t p-4 mt-auto">

          {/* Profile */}
          <Link
            to="/profile"
            className={`
              flex items-center gap-3 px-3 py-2 text-sm rounded-md relative transition-all
              ${isActive("/profile")
                ? "bg-orange-500/20 text-orange-500 font-medium"
                : "hover:bg-accent hover:text-accent-foreground"}`}
          >
            {isActive("/profile") && (
              <span className="absolute left-0 h-full w-1 bg-orange-500 rounded-r-md" />
            )}
            <span>👤</span>
            {!collapsed && <span>Profile</span>}
          </Link>

          {/* Settings */}
          <Link
            to="/settings"
            className={`
              flex items-center gap-3 px-3 py-2 mt-1 text-sm rounded-md relative transition-all
              ${isActive("/settings")
                ? "bg-orange-500/20 text-orange-500 font-medium"
                : "hover:bg-accent hover:text-accent-foreground"}`}
          >
            {isActive("/settings") && (
              <span className="absolute left-0 h-full w-1 bg-orange-500 rounded-r-md" />
            )}
            <span>⚙️</span>
            {!collapsed && <span>Settings</span>}
          </Link>

        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-0 px-6 pb-6 overflow-y-auto">



        <Outlet />
      </main>
    </div>
  );
}
