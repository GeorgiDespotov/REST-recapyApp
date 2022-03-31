const express = require('express');

// const { PORT } = require('./config');
const config = require('./config/index.js');
const databaseConfig = require('./config/database');
const expressConfig = require('./config/express');
const routsConfig = require('./config/routs');


start();

async function start() {
    const app = express();
    
    await databaseConfig(app);
    expressConfig(app);
    routsConfig(app);

    // app.use(cors({
    //     origin: config.origin,
    //     credentials: true
    //   }));
    
    app.get('/', (req, res) => res.send('It works!'));
    
    app.listen(config.port, () => { console.log(`Application started at http://localhost:${config.port}`)});
}




