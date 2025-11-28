import { Routes, Route } from "react-router-dom";

// redirect if already logged in
import RedirectIfLoggedIn from "./components/RedirectIfLoggedIn";

// pages
import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Payments from "./pages/Payment";
import Complaints from "./pages/Complaints";
import Login from "./pages/Login";
import Signup from "./pages/Signup.tsx"; 

// layout
import MainLayout from "./Layout/MainLayout";
import DashboardLayout from "./Layout/DashboardLayout";

//Sidebar
import SchedulePickup from "./pages/SchedulePickup";
import QuickOrder from "./pages/QuickOrder";
import Settings from "./pages/Settings";

// Protected route
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>

      {/* LOGIN PAGE WITH REDIRECT IF LOGGED IN */}
      <Route
        path="/login"
        element={
          <RedirectIfLoggedIn>
            <Login />
          </RedirectIfLoggedIn>
        }
      />

      {/* SIGNUP PAGE (if using) */}
      <Route
  path="/signup"
  element={
    <RedirectIfLoggedIn>
      <Signup />
    </RedirectIfLoggedIn>
  }
/>
      {/* PROTECTED ROUTES */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >

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
