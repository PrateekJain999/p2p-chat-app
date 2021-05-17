"use strict";

const express = require('express');
const {userRoutes} = require('../routes/index')
const path = require('path')

module.exports = async function (app) {

    app.use(require("body-parser").json({ limit: '50mb' }));

    // serve static folder.
    const publicDirectoryPath = path.join(__dirname, '../../public')
    app.use(express.static(publicDirectoryPath))
    app.use('./uploads', express.static('uploads'));
    app.use(userRoutes);

    // initialize mongodb 
    await require('./db_mongo')();
};
