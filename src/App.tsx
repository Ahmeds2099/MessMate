import { Routes, Route } from "react-router-dom";

// pages
import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Payments from "./pages/Payment";
import Complaints from "./pages/Complaints";
import WeeklyPlan from "./pages/WeeklyPlan";

// layout
import MainLayout from "./Layout/MainLayout";

//Sidebar

import DashboardLayout from "./Layout/DashboardLayout";


export default function App() {
  return (
    <Routes>

      {/* Wrap all pages inside MainLayout */}
      <Route element={<DashboardLayout />}>
      <Route element={<MainLayout />}>

        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/weekly-plan" element={<WeeklyPlan />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/complaints" element={<Complaints />} />

      </Route>
     </Route>
    </Routes>
  );
}

