'use strict';

/***********************************
 **** node module defined here *****
 ***********************************/
require('dotenv').config();
const EXPRESS = require("express");
/**creating express server app for server */
const app = EXPRESS();
const port = process.env.PORT || 3000


/********************************
 ***** Server Configuration *****
 ********************************/
// app.use(EXPRESS.static(__dirname + '/'));
const server = require('http').Server(app);

/** Server is running here */
let startNodeserver = async () => {
    // express startup.
    await require('./app/startup/expressStartup')(app);

    return new Promise((resolve, reject) => {
        server.listen(port, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
};


startNodeserver()
    .then(() => {
        console.log('Node server running on ', port);
    }).catch((err) => {
        console.log('Error in starting server', err);
        process.exit(1);
    });
