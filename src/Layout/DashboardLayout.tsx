import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";



export default function DashboardLayout() {
  const location = useLocation();

  /*const mainNav = [
    { name: "Dashboard", path: "/" },
    { name: "View Menu 🍱", path: "/menu" },
    { name: "Quick Order 💳", path: "/order" },
    { name: "Schedule Pickup 📦", path: "/pickup" },
    { name: "Payments 💰", path: "/payments" },
  ];

  const bottomNav = [
    { name: "Profile 👤", path: "/profile" },
    { name: "Settings ⚙️", path: "/settings" },
  ];*/

  const [collapsed, setCollapsed] = useState(false);

 return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-100">
      {/* Sidebar */}

      <aside className="flex flex-col w-64 h-full border-r bg-sidebar text-sidebar-foreground">
  {/* Header & Logo */}
  <div className="px-4 py-6">
    <h2 className="text-2xl font-semibold tracking-tight">Mess Mate</h2>
  </div>
     {/* Sidebar Button */ } 
     
  <button
  onClick={() => setCollapsed(!collapsed)}
  className="absolute left-64 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 transition-all hover:scale-110 shadow-lg z-50"
>
  {collapsed ? "➡️" : "⬅️"}
</button>




  {/* Navigation */}
  <nav className="flex-1 px-3 space-y-1">
    <Link
      to="/"
      className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground ${
        location.pathname === "/" && "bg-accent"
      }`}
    >
      📊 Dashboard
    </Link>

    <Link
      to="/menu"
      className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground ${
        location.pathname === "/menu" && "bg-accent"
      }`}
    >
      🍱 View Menu
    </Link>

    <Link
      to="/order"
      className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground ${
        location.pathname === "/order" && "bg-accent"
      }`}
    >
      💳 Quick Order
    </Link>

    <Link
      to="/pickup"
      className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground ${
        location.pathname === "/pickup" && "bg-accent"
      }`}
    >
      📦 Schedule Pickup
    </Link>

    <Link
      to="/payments"
      className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground ${
        location.pathname === "/payments" && "bg-accent"
      }`}
    >
      💰 Payments
    </Link>
  </nav>

  {/* Bottom Profile + Settings */}
  <div className="border-t p-4 mt-auto">
    <Link
      to="/profile"
      className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground ${
        location.pathname === "/profile" && "bg-accent"
      }`}
    >
      👤 Profile
    </Link>

    <Link
      to="/settings"
      className={`flex items-center gap-3 px-3 py-2 mt-1 text-sm rounded-md hover:bg-accent hover:text-accent-foreground ${
        location.pathname === "/settings" && "bg-accent"
      }`}
    >
      ⚙️ Settings
    </Link>
  </div>
</aside>


      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}