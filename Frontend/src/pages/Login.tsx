import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png"; // make sure file exists at src/assets/logo.png
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [regno, setRegno] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"student" | "admin">("student");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ regno, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // store token and role for frontend checks
      localStorage.setItem("token", data.token);
      // store token in local storage for easy checking and deletion
      localStorage.setItem("userid", data.user._id);
      // store role in localStorage for quick UI use (backend token has it too)
      localStorage.setItem("role", data.user?.role || role);

      alert("Login successful");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: "#f6efe6" }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-md">
       <div className="flex flex-col items-center mb-6">
      <img 
      src={logo} 
      alt="MessMate" 
      className="w-40 h-40 object-contain drop-shadow-md"
        />
      </div>


        <Card className="shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Sign In</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="flex flex-col space-y-1">
                <Label>Role</Label>
                <Select onValueChange={(val) => setRole(val as "student" | "admin")}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student (USN)</SelectItem>
                    <SelectItem value="admin">Admin (RegNo)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col space-y-1">
                <Label>{role === "student" ? "USN" : "RegNo"}</Label>
                <Input
                  type="text"
                  placeholder={role === "student" ? "Enter your USN" : "Enter your RegNo"}
                  value={regno}
                  onChange={(e) => setRegno(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full rounded-xl">
                Sign In
              </Button>

              <div className="text-center mt-2 text-sm">
                <a href="/signup" className="text-blue-600 underline">
                  Create an account
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
