import { Router } from "express";
import {
  registerUser,
  loginUser,
  adminLogin,
} from "../controllers/authController";

const authRoutes = Router();

authRoutes.post("/register", registerUser);
authRoutes.post("/login", loginUser);
authRoutes.post("/admin-login", adminLogin);

export default authRoutes;
