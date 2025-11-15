import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./Layout/DashboardLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        {/* we’ll add more pages here soon */}
      </Route>
    </Routes>
  );
}

export default App;
