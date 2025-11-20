import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function MainLayout() {
  const [openNotif, setOpenNotif] = useState(false);
  return (
    <div className="pt-0 px-6 pb-6">

  {/* TOP RIGHT ICONS */}
  <div className="flex justify-end items-center gap-5 py-5 pr-4">
    <Button variant="outline" onClick={() => setOpenNotif(true)}>🔔</Button>
    <Link to="/profile"><Button variant="outline">👤</Button></Link>
  </div>

  {/* Header */}
  <div className="px-1 pt-0 pb-6">
    <h2 className="text-4xl font-semibold text-orange-400">
      Mess Mate
    </h2>
  </div>

  {/* Navigation */}
  <div className="flex gap-3 text-orange-500 pl-1 pb-5">
    <Link to="/dashboard">
      <Button variant="outline">Dashboard</Button>
    </Link>

    <Link to="/menu">
      <Button variant="outline">Menu</Button>
    </Link>

    <Link to="/profile">
      <Button variant="outline">Profile</Button>
    </Link>

    <Link to="/payments">
      <Button variant="outline">Payments</Button>
    </Link>

    <Link to="/complaints">
      <Button variant="outline">Complaints</Button>
    </Link>
  </div>

      {/* This is where pages render */}
      <Outlet />

      {/* NOTIFICATION SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-800 shadow-xl transform transition-transform duration-300 z-50
          ${openNotif ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-orange-500">Notifications</h2>
          <button 
            className="text-xl"
            onClick={() => setOpenNotif(false)}
          >
            ✖
          </button>
        </div>

        <div className="p-4 space-y-3">
          <div className="p-3 bg-orange-100 text-orange-700 rounded-md">
            <Link to="/payments">Payment Successful!!</Link> 
          </div>

          <div className="p-3 bg-orange-100 text-orange-700 rounded-md">
            📅 Your preorder has been confirmed.
          </div>

          <div className="p-3 bg-orange-100 text-orange-700 rounded-md">
            📅 Your Preorder is Ready for Pickup.
          </div>
        </div>
      </div>
    </div>
  );
}
