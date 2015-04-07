module.exports = function () {
    return {
        'Users' : require('./users')(),
        'Venues' : require('./venues')(),
        'Checkins' : require('./checkins')()
    }
};