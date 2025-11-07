import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, resizeBy, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(400).json({
        success: false,
        message: "Authorization token is missing or invalid",
      });
    }
    const token = authHeader.split(" ")[1]; //[Bearer sdkjhhdc54djj4cdscjbt5dc2ejd12hcnnj]
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(400).json({
          success: false,
          message: "The registration token is expired",
        });
      }
      return res.status(400).json({
        success: false,
        message: "Access  token is missing or invalid",
      });
    }
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    req.id = user._id;
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
