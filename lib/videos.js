var qs = require("qs");
var request = require("request");

exports.list = function (config, cb) {
    var uri;

    if (config.user) {
        uri =  "http://vimeo.com/api/v2/"+config.user+"/videos.json"
    } else if (config.channel) {
        uri =  "http://vimeo.com/api/v2/channel/"+config.channel+"/videos.json"
    }

    request({
        uri: uri
    }, function (err, resp, body) {
        if (err || resp.statusCode !== 200) {
            cb(err || new Error("Vimeo status code "+resp.statusCode));
            return;
        }

        try {
            var body = JSON.parse(body);
        } catch (e) {
            cb(e);
        }

        cb(null, body);
    });
}

exports.getHtml = function (video, opts, cb) {
    // There might not be an options hash
    if (!cb) {
        cb = opts;
        opts = {
            url: video.url
        };
    } else {
        opts.url = video.url;
    }

    var uri = "http://vimeo.com/api/oembed.json?" + qs.stringify(opts);

    request({
        uri: uri
    }, function (err, resp, body) {
        if (err || resp.statusCode !== 200) {
            cb(err || new Error("Vimeo oembed status code: "+resp.statusCode));
            return;
        }

        try {
            var html = JSON.parse(body).html;
        } catch (e) {
            cb(e);
            return;
        }

        cb(null, html);

    });
}
