const Logger = require("../models/logger.model");
module.exports = {
  logger: function (req, res, next) {
    const logger = new Logger({
      endpoint: req.path,
      param: JSON.stringify(req.query),
      datetime: new Date()
    });

    Logger.create(logger, (err, data) => {
      if (err) {
        console.log(`error when creating logs, with error ${err}`)
      }
    })
    next()
  }
}