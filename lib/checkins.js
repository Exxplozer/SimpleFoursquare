module.exports = function () {
    var core = require('./core')();

    function addCheckin(params, accessToken, callback) {
        core.callApi('/checkins/add', params ,'POST', accessToken, callback);
    };

    return {
        'addCheckin' : addCheckin
    }
};