const Logger = require("../models/logger.model");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const logger = new Logger({
        endpoint: req.body.endpoint,
        param: req.body.param,
        datetime: req.body.datetime
    });

    Logger.create(logger, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                err.message || "Some error occured while creating log"
            });
        } else {
            res.send(data);
        }
    })


}

exports.findAll = (req, res) => {
    Logger.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                err.message || "Some error occured while retrieving logs"
            });
        } else {
            res.send(data);
        }
    });
};