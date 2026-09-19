import express from "express";

import { loginAdmin } from "../controllers/adminController.js";

import {
  getMessages,
  markMessageAsRead,
  deleteMessage,
} from "../controllers/adminMessageController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin Login
router.post("/login", loginAdmin);

// JWT Test
router.get("/test", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    message: "JWT authentication is working successfully.",
    admin: req.admin,
  });
});

router.get("/messages", authMiddleware, getMessages);

router.patch("/messages/:id/read", authMiddleware, markMessageAsRead);

router.delete("/messages/:id", authMiddleware, deleteMessage);

export default router;
