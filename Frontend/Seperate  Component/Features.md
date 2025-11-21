# Quick Actions 
      <div className="flex flex-wrap gap-3 mt-6">
        <Button className="bg-blue-600 hover:bg-blue-700">🍱 View Menu</Button>
        <Button className="bg-green-600 hover:bg-green-700">💳 Quick Order</Button>
        <Button className="bg-gray-700 hover:bg-gray-800">📢 Schedule Pickup</Button>
      </div>

# Navigation Bar (normal)

  const mainNav = [
    { name: "Dashboard", path: "/" },
    { name: "View Menu 🍱", path: "/menu" },
    { name: "Quick Order 💳", path: "/order" },
    { name: "Schedule Pickup 📦", path: "/pickup" },
    { name: "Payments 💰", path: "/payments" },
  ];

  const bottomNav = [
    { name: "Profile 👤", path: "/profile" },
    { name: "Settings ⚙️", path: "/settings" },
  ];






  # Shadcn SideBar

  <aside className="flex flex-col w-64 h-full border-r bg-sidebar text-sidebar-foreground">
  {/* Header / Logo */}
  <div className="px-4 py-6">
    <h2 className="text-2xl font-semibold tracking-tight">Mess Mate</h2>
  </div>

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
