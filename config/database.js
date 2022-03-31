const mongoose = require('mongoose');
const config = require('./index');
// const { DB_CONNECTION_STRING } = require('./index');

module.exports = (app) => {
    return new Promise((resolve, reject) => {
        console.log(config);
        mongoose.connect(config.dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const db = mongoose.connection;
        db.on('error', (err) => {
            console.error('connection error:')
            reject(err);
        });
        db.once('open', function () {
            console.log('Database redy!');
            resolve();
        });
    });
};