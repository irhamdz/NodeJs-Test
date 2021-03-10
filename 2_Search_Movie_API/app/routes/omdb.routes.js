module.exports = app => {
    const omdb = require("../controllers/omdb.controller");

    app.get("/search", omdb.search);

    app.get("/detail", omdb.detail);
}