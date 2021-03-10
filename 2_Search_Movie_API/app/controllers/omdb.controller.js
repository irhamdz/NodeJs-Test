const request = require('request');

baseUri = 'http://www.omdbapi.com/'

exports.search = (req, res) => {
    let qs_obj = {};

    // api key
    if (req.query.apikey) {
        qs_obj.apikey = req.query.apikey
    }

    // search movie title
    if (!req.query.s) {
        res.status(400).send({
            message: "search movie title cannot be empty"
        });
    } else {
        qs_obj.s = req.query.s
    }

    // type
    if (req.query.type) {
        qs_obj.type = req.query.type
    }

    // year
    if (req.query.y) {
        qs_obj.y = req.query.y
    }

    // page
    if (req.query.page) {
        qs_obj.page = req.query.page
    }
    request({
        uri: baseUri,
        qs: qs_obj
    }).pipe(res);
}

exports.detail = (req, res) => {
    let qs_obj = {};

    // validate movie title or IMDB id
    if (!req.query.t && !req.query.i) {
        res.status(400).send({
            message: "parameter at least must have IMDB id or Movie title"
        });
    }

    // movie title
    if (req.query.t) {
        qs_obj.t = req.query.t
    }

    // IMDB id
    if (req.query.i) {
        qs_obj.i = req.query.i
    }

    // api key
    if (req.query.apikey) {
        qs_obj.apikey = req.query.apikey
    }

    // type
    if (req.query.type) {
        qs_obj.type = req.query.type
    }

    // year
    if (req.query.y) {
        qs_obj.y = req.query.y
    }


    // plot
    if (req.query.plot) {
        qs_obj.plot = req.query.plot
    }
    request({
        uri: baseUri,
        qs: qs_obj
    }).pipe(res);
}