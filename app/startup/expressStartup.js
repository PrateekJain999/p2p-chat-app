"use strict";

const express = require('express');

module.exports = async function (app) {

    app.use(require("body-parser").json({ limit: '50mb' }));

    // serve static folder.
    // app.use('/public', express.static('public'));
    app.use('./uploads', express.static('uploads'));

    // initialize mongodb 
    await require('./db_mongo')();
};
