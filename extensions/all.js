exports.preRequest = function (options, cfg) {

    var body = options.body;

    if (body) {
        body.key = cfg.apiKey;
    }
};