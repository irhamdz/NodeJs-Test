const Logger = require("../models/logger.model");
module.exports = {
  logger: function (req, res, next) {
    // console.log('Request URL:', req.originalUrl, req.baseUrl)
    // console.log('Request Method', req.method)
    // console.log('Request Params:', req.params)
    // console.log(typeof(req.params))
    // console.log('Request Datetime:', new Date())

    const logger = new Logger({
      endpoint: req.path,
      param: JSON.stringify(req.query),
      datetime: new Date()
    });

    Logger.create(logger, (err, data) => {
      if (err) {
        console.log(`error when creating logs, with error ${error}`)
      }
    })
    next()
  }
}