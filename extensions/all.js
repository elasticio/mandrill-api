exports.preProcess = function (msg, cfg, snapshot, cb) {

    msg.body.key = cfg.apiKey;

    cb();
};