import rateLimit from "express-rate-limit";

const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes

  max: 5, // Maximum 5 requests per 15 minutes

  standardHeaders: true,
  legacyHeaders: false,

  message: {
    success: false,
    message: "Too many contact requests. Please try again after a few minutes.",
  },
});

export default contactRateLimiter;
