exports.preRequest = function (options, cfg) {

    var body = {};

    if (options.body) {
        body = JSON.parse(options.body);
    }

    body.key = cfg.apiKey;

    options.body =  JSON.stringify(body);
};