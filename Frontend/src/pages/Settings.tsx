import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Complaints() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold text-orange-500">Complaints</h1>

      <Card className="p-4 shadow-sm">
        <CardHeader>
          <CardTitle>Submit a Complaint</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <textarea
            placeholder="Describe your complaint..."
            className="w-full h-32 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <Button className="bg-orange-500 text-white w-full hover:bg-orange-600">
            Submit
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
