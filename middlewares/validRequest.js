const { validationResult } = require("express-validator");

const validateRequest = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(422).json({ error: errors.array() });
    }
    next();
};

module.exports = validateRequest;