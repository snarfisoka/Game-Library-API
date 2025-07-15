const { body } = require("express-validator");

exports.validateGame = [
    body("title").notEmpty().withMessage("Title is required"),
    body("genre").notEmpty().withMessage("Genre is required"),
    body("platform").notEmpty().withMessage("Platform is required"),
    body("releaseYear")
        .isInt({ min: 1950, max: new Date().getFullYear() })
        .withMessage("Enter a valid release year"),
];