import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Payments() {

  // 💰 Initial Payment History
  const historyData = [
    { id: 1, amount: 1200, date: "2024-02-15", time: "10:25AM", status: "Paid" },
    { id: 2, amount: 850, date: "2024-02-10", time: "1:30PM", status: "Paid" },
  ];

  // 🔄 Sorting State
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // 📌 Create a sorted copy of the history
  const sortedHistory = [...historyData].sort((a, b) => {
    if (!sortKey) return 0;

    let valA = a[sortKey];
    let valB = b[sortKey];

    // Convert date to actual Date object for proper sorting
    if (sortKey === "date") {
      valA = new Date(a.date);
      valB = new Date(b.date);
    }

    // Convert time to comparable format
    if (sortKey === "time") {
      valA = new Date(`1970-01-01 ${a.time}`);
      valB = new Date(`1970-01-01 ${b.time}`);
    }

    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  // 🧠 Function to handle sorting
  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // toggle
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    // 🟧 Page Animation Wrapper
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >

      {/* 🏷️ Page Heading */}
      <h1 className="text-3xl font-bold text-orange-400">Payments</h1>

      {/* 📦 Card */}
      <Card className="p-4 shadow-sm">
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>

        <CardContent>

          {/* 📊 SHADCN TABLE WITH SORTING */}
          <Table>

            {/* 🔸 Header Row */}
            <TableHeader>
              <TableRow>

                {/* Sortable Amount */}
                <TableHead
                  className="cursor-pointer font-semibold"
                  onClick={() => handleSort("amount")}
                >
                  Amount {sortKey === "amount" && (sortOrder === "asc" ? "↑" : "↓")}
                </TableHead>

                {/* Sortable Date */}
                <TableHead
                  className="cursor-pointer font-semibold"
                  onClick={() => handleSort("date")}
                >
                  Date {sortKey === "date" && (sortOrder === "asc" ? "↑" : "↓")}
                </TableHead>

                {/* Sortable Time */}
                <TableHead
                  className="cursor-pointer font-semibold"
                  onClick={() => handleSort("time")}
                >
                  Time {sortKey === "time" && (sortOrder === "asc" ? "↑" : "↓")}
                </TableHead>

                {/* Status Column */}
                <TableHead className="font-semibold">Status</TableHead>

              </TableRow>
            </TableHeader>

            {/* 🔹 Table Body */}
            <TableBody>
              {sortedHistory.map((h) => (
                <TableRow key={h.id}>

                  {/* 💵 Amount */}
                  <TableCell className="font-medium text-green-600">
                    ₹{h.amount}
                  </TableCell>

                  {/* 📅 Date */}
                  <TableCell className="text-gray-600">{h.date}</TableCell>

                  {/* ⏰ Time */}
                  <TableCell className="text-gray-600">{h.time}</TableCell>

                  {/* 🟢 Status Badge */}
                  <TableCell>
                    <Badge
                      variant={
                        h.status === "Paid"
                          ? "default"
                          : h.status === "Pending"
                          ? "secondary"
                          : "destructive"
                      }
                      className={
                        h.status === "Paid"
                          ? "bg-green-600 hover:bg-green-700"
                          : h.status === "Pending"
                          ? "bg-yellow-400 text-black hover:bg-yellow-500"
                          : "bg-red-600 hover:bg-red-700"
                      }
                    >
                      {h.status}
                    </Badge>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>

        </CardContent>
      </Card>
    </motion.div>
  );
}
