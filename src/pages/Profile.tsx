import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Profile() {
  const user = {
    name: "Ahmed Sufiyan",
    regno: "BEC233014",
    email: "ashed2099@gmail.com",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold text-orange-500">Profile</h1>

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
    </motion.div>
  );
}
