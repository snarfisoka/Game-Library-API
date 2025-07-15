const Game = require("../models/gameModel");

//Add game
exports.addGame = async (req, res) => {
    const { title, genre, platform, releaseYear, description } = req.body;
    try {
        const game = await Game.create({ title, genre, platform, releaseYear, description });
        res.status(201).json(game);
    } catch (error) {
        res.status(400).json({ message: "Invalid data", error: error.message });
    }
};

//Edit game
exports.updateGame = async (req, res) => {
    try {
        const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if(!game) return res.status(404).json({ message: "Game not found" });

        res.json(game);
    } catch (error) {
        res.status(400).json({ message: "Update failed", error: error.message });
    }
};

//Delete game
exports.deleteGame = async (req, res) => {
    try {
        const game = await Game.findByIdAndDelete(req.params.id);
        if(!game) return res.status(404).json({ message: "Game not found" });
        res.json({ message: "Game deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Delete failed", error: error.message});
    }
};

//Get all games
exports.getGames = async (req, res) => {
    try {
        const games = await Game.find().sort({ createdAt: -1 });
        res.json(games);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch games" });
    }
};

//Search/filter games
exports.searchGames = async (req, res) => {
    const { title, genre, platform } = req.query;
    const filter = {};

    if(title) filter.title = { $regex: title, $options: "i" };
    if(genre) filter.genre = { $regex: genre, $options: "i" };
    if(platform) filter.platform = { $regex: platform, $options: "i" };

    try {
        const games = await Game.find(filter);
        res.json(games);
    } catch (error) {
        res.status(500).json({ message: "Search failed", error: error.message});
    }
};