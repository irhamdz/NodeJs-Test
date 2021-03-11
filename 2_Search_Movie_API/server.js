const express = require("express")
const bodyParser = require("body-parser")
const logger = require("./app/middleware/logger-middleware")

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger.logger)

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Search Movie API powered by omdbapi" });
});

require("./app/routes/logger.routes")(app);
require("./app/routes/omdb.routes")(app);

module.exports = app