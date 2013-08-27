exports.preRequest = function (options, cfg) {

    if (!options.body) {
        options.body = {};
    }

    options.body.key = cfg.apiKey;
};