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
import logo from "@/assets/logo.png"; // src/assets/logo.png
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [regno, setRegno] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"student" | "admin">("student");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, regno, password, role }),
      });
      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      alert("Signup successful! You can now sign in.");
      navigate("/login");
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
            <CardTitle className="text-center text-2xl">Create Account</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSignup} className="space-y-4">
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
                <Label>Full name</Label>
                <Input type="text" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>

              <div className="flex flex-col space-y-1">
                <Label>{role === "student" ? "USN" : "RegNo"}</Label>
                <Input type="text" placeholder={role === "student" ? "Enter your USN" : "Enter RegNo"} value={regno} onChange={(e) => setRegno(e.target.value)} required />
              </div>

              <div className="flex flex-col space-y-1">
                <Label>Password</Label>
                <Input type="password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>

              <Button className="w-full mt-2 rounded-xl" type="submit">
                Sign Up
              </Button>

              <p className="text-center text-sm mt-2">
                Already have an account? <a href="/login" className="text-blue-600 underline">Sign in</a>
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
