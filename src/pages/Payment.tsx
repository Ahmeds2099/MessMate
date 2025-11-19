import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Payments() {
  const history = [
    { id: 1, amount: 1200, date: "2024-02-15" },
    { id: 2, amount: 850, date: "2024-02-10" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold text-orange-500">Payments</h1>

      <Card className="p-4 shadow-sm">
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {history.map((h) => (
            <div
              key={h.id}
              className="flex items-center justify-between border-b pb-2"
            >
              <span className="font-medium">₹{h.amount}</span>
              <span className="text-gray-500">{h.date}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
