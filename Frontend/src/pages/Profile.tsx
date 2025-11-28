import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Profile() {
  const user = {
    name: "Ahmed Sufiyan",
    regno: "BEC233014",
    email: "ashed2099@gmail.com",
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold text-orange-500">Profile</h1>

      {/* Personal Info */}
      <Card className="p-4 shadow-sm">
        <CardHeader>
          <CardTitle>Your Information</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Reg No:</strong> {user.regno}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </CardContent>
      </Card>

      {/* Logout Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="p-4 shadow-sm">
          <CardHeader>
            <CardTitle>Account Controls</CardTitle>
          </CardHeader>

          <CardContent>
            <Button
              onClick={logout}
              className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl"
            >
              Logout
            </Button>
          </CardContent>
        </Card>

        {/*Delete My Account*/}
        <Card>
        <Button 
  onClick={() => {
    const userId = localStorage.getItem("userid");
    fetch(`http://localhost:5000/api/auth/delete/${userId}`, { method: "DELETE" })
      .then(() => {
        localStorage.clear();
        window.location.href = "/signup";
      });
  }}
  className="w-full bg-red-600 hover:bg-red-700 mt-3"
>
  Delete My Account
</Button>
</Card>
      </motion.div>
    </motion.div>
  );
}
