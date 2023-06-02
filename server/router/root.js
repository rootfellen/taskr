import express from "express";
import userController from "../controllers/user/userController.js";
const router = express.Router();

// User's registration
router.post("/register", userController.registration);

// User's login
router.post("/login", userController.login);

// User's logout
router.post("/logout", userController.logout);

// User's refresh token
router.post("/refresh", userController.refresh);

export default router;
