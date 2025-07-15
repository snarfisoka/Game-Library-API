const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true,
    },
    genre: {
        type: String,
        required: true,
        index: true,
    },
    platform: {
        type: String,
        required: true,
        index: true,
    },
    releaseYear: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
 }, {
        timestamps: true,
});

module.exports = mongoose.model("Game", gameSchema);