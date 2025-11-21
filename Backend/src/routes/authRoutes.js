import express from "express";
import { signup, login } from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// POST /api/auth/signup
router.post("/signup", signup);

// POST /api/auth/login
router.post("/login", login);

//MiddleWare
router.get("/me", authMiddleware, (req, res) => {
  res.json({ message: "You are authenticated", userId: req.user.id });
});

export default router;


