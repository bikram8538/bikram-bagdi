const rateLimit = require("express-rate-limit");

const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5,
    message: {
        success: false,
        message: "Too many contact requests. Please try again later.",
    },
});

module.exports = contactLimiter;