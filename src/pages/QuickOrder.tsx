import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function QuickOrder() {
  const items = [
    { id: 1, name: "Idli Sambar", price: 40 },
    { id: 2, name: "Chapati + Sabzi", price: 35 },
    { id: 3, name: "Egg Rice", price: 50 },
    { id: 4, name: "Maggi", price: 30 },
  ];

  // Since you said: make ALL dishes recently ordered
  const recentOrders = items;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <h1 className="text-3xl font-bold text-orange-500">Quick Order</h1>

      {/* RECENT ORDERS SECTION */}
      <Card className="p-4 shadow-sm">
        <CardHeader>
          <CardTitle>Recently Ordered</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {recentOrders.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-2 last:border-b-0 last:pb-0"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-500 text-sm">₹{item.price}</p>
              </div>

              <Button className="bg-orange-500 text-white hover:bg-orange-600">
                Reorder
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* AVAILABLE ITEMS TO ORDER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card key={item.id} className="shadow-sm">
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <p className="text-gray-700">₹{item.price}</p>

              <Button className="bg-orange-500 text-white w-full hover:bg-orange-600">
                Order Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
