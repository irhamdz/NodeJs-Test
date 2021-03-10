module.exports = app => {
    const loggers = require("../controllers/logger.controller");

    app.get("/loggers", loggers.findAll);
}