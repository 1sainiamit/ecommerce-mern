import express from "express";
import {
  changePassword,
  forgotPassword,
  getAllUsers,
  getUserById,
  login,
  logout,
  register,
  reVerify,
  updateUserById,
  verify,
  verifyOTP,
} from "../controllers/user.controller.js";
import { isAdmin, isAuthenticated } from "../middleware/isAuthenticated.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

router.post("/register", register);
router.post("/verify", verify);
router.post("/reverify", reVerify);
router.post("/login", login);
router.post("/logout", isAuthenticated, logout);
router.post("/forget-password", forgotPassword);
router.post("/verify-otp/:email", verifyOTP);
router.post("/change-password/:email", changePassword);
router.get("/all-users", isAuthenticated, isAdmin, getAllUsers);
router.get("/get-user/:userId", getUserById);
router.put("/update-user/:id", isAuthenticated, singleUpload, updateUserById);

export default router;
