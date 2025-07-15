const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const gameRoutes = require("./routes/gameRoutes");
const limiter = require("./utils/rateLimiter")
const setupSwagger = require("./swagger");

dotenv.config();

const app = express();

app.use(limiter);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/games", gameRoutes);

setupSwagger(app);




if (process.env.NODE_ENV !== "test") {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch(err => console.error("Connection error", err));
}

module.exports = app;