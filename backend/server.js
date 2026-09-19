import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./src/config/db.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Connect MongoDB
connectDB();

// Allowed Frontend Origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://saiful-protfolio-ruddy.vercel.app",
];

// Middleware
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without an Origin header
      // Example: Postman or server-to-server requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  }),
);

app.use(express.json());

// Contact API
app.use("/api/contact", contactRoutes);

// Admin API
app.use("/api/admin", adminRoutes);

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Saiful Portfolio API is running successfully!",
  });
});

// Root Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Saiful Islam's Portfolio API",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
