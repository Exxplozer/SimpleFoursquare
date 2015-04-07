module.exports = function () {
    var core = require('./core')();

    function explore(params, accessToken, callback) {
        core.callApi('/venues/explore' ,params ,'GET', accessToken, callback);
    };

    return {
        'Explore' : explore
    }
};