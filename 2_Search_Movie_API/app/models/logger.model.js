const sql = require("./db.js");

const Logger = function(logger) {
    this.endpoint = logger.endpoint;
    this.param = logger.param;
    this.datetime = logger.datetime;
};

Logger.create = (newLogger, result) => {
    sql.query("INSERT INTO logger SET ?", newLogger, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }

        console.log("created logger:", { id: res.insertId, ...newLogger });
        result(null, { id: res.insertId, ...newLogger });
    })
}

Logger.getAll = result => {
    sql.query("SELECT * FROM logger", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        result(null, res);
    });
}

module.exports = Logger;