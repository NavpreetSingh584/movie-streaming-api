import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        message: "Too many requests, please try again later"
    },
    skip: () => process.env.NODE_ENV === "test"
});

export default rateLimiter;