module.exports = function () {
    var core = require('./core')();

    function getUser(userId ,params, accessToken, callback) {
        core.callApi('/users/' + (userId || 'self'), params ,'GET', accessToken, callback);
    };

    function getCheckins(params, accessToken, callback) {
        core.callApi('/users/self/checkins', params ,'GET', accessToken, callback);
    };

    return {
        'getUser' : getUser,
        'getCheckins' : getCheckins
    }
};