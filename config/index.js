module.exports = (function (env) {
    var config = {};

    switch(env) {
        case 'test':
            config = require('./env/test');
            break;
        case 'production':
            config = require('./env/production');
            break;
        case 'development':
        default:
            console.log('No environment set. Defaulting to development');
            config = require('./env/development');
            break;;
    }

    return config;
})(process.env.NODE_ENV);