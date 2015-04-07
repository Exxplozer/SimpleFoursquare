var exports = module.exports,
    request = require('request'),
    qs = require('querystring'),
    util = require('util'),
    conf = require('../config/index'),
    dateFormat = require('dateformat');

module.exports = function () {

    function callApi(apiUrl, params, req, oauth_token, callback) {
        var paramsString = qs.stringify(params, null, null, null);
        var url = util.format('%s%s?%s&oauth_token=%s&v=%s', conf.get('foursquare:apiUrl'), apiUrl, paramsString,
            oauth_token, dateFormat(new Date(), "yyyymmdd"));

        requestFunction(url, req, callback);
    };

    function requestFunction (url, req, callback) {
        request({
            uri: url,
            method: req,
            timeout: 10000,
            followRedirect: true,
            maxRedirects: 10
        }, callback);
    };

    return {
        'callApi' : callApi
    }
};