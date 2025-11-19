import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function MainLayout() {
  return (
    <div className="p-6 space-y-6">
      
      {/* Navigation */}
      <div className="flex gap-3 text-orange-500">
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

          <Link to="/weekly-plan">
          <Button variant="outline">Weekly Plan</Button>
          </Link>
      </div>

      {/* This is where pages render */}
      <Outlet />
    </div>
  );
}
