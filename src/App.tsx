import { Routes, Route } from "react-router-dom";

// pages
import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Payments from "./pages/Payment";
import Complaints from "./pages/Complaints";



// layout
import MainLayout from "./Layout/MainLayout";

//Sidebar

import DashboardLayout from "./Layout/DashboardLayout";
import SchedulePickup from "./pages/SchedulePickup";
import QuickOrder from "./pages/QuickOrder";
import Settings from "./pages/Settings";


export default function App() {
  return (
    <Routes>

      {/* Wrap all pages inside MainLayout */}
      <Route element={<DashboardLayout />}>
      <Route element={<MainLayout />}>

        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/quickorder" element={<QuickOrder />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/schedulepickup" element={<SchedulePickup />} />


      </Route>
     </Route>
    </Routes>
  );
}

