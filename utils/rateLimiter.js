const rateLimit = require("express-rate-limit");

const limiter = rateLimit ({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // max request per IP
    message: "Too many request, please try again later."
});

module.exports = limiter;