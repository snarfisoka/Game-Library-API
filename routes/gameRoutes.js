const express = require("express");
const router = express.Router();
const {
    addGame,
    updateGame,
    deleteGame,
    getGames,
    searchGames,
} = require("../controllers/gameController");

const { protect } = require("../middlewares/authMiddleware");

const { validateGame } = require("../validators/gameValidator");
const validateRequest = require("../middlewares/validRequest");

router.post("/", protect, validateGame, validateRequest, addGame);
router.put("/:id", protect, validateGame, validateRequest, updateGame);

//Protected routes
router.post("/", protect, addGame);
router.put("/:id", protect, updateGame);
router.delete("/:id", protect, deleteGame);

//Public routes
router.get("/", getGames);
router.get("/search", searchGames);

module.exports = router;