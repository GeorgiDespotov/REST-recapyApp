//TODO update db name to match project requirements

const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbUrl: 'mongodb://localhost:27017/recipe-db',
        origin: ['http://localhost:5555', 'http://localhost:4200']
    },
    production: {
        port: process.env.PORT || 3000,
        dbURL: process.env.DB_URL_CREDENTIALS,
        origin: []
    }
}

module.exports = config[env];

// module.exports = {
//     PORT: 3000,
//     DB_CONNECTION_STRING: 'mongodb://localhost:27017/recipe-db',
//     TOKEN_SECRET: 'this is very secure',
//     COOKIE_NAME: 'SESSION_TOKEN'
// } 