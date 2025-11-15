import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Dashboard() {
  const user = {
    name: "Ahmed Sufiyan",
    regno:"BEC233014",
    email: "ashed2099@gmail.com",
    mealsThisMonth: 25,
    MessPoints: 5,
    TotalSpent: 350,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
  Welcome back, {user.name.split(" ")[0]} 👋
</h1>


      {/* Profile Summary */}
      <Card className="p-4 shadow-sm">
        <CardHeader>
          <CardTitle>Profile Overview</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Name</p>
            <p className="font-medium">{user.name}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Room No</p>
            <p className="font-medium">{user.regno}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition">
          <CardHeader>
            <CardTitle>Meals Taken</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{user.mealsThisMonth}</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition">
          <CardHeader>
            <CardTitle>MessPoints Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-green-600">
              {user.MessPoints}
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition">
          <CardHeader>
            <CardTitle>Amount Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <p
              className={`text-2xl font-semibold ${
                user.TotalSpent > 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              ₹{user.TotalSpent}
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
