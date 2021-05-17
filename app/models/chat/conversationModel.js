"use strict";
/************* Modules ***********/
const MONGOOSE = require('mongoose');
const Schema = MONGOOSE.Schema;
/**************************************************
 ************* User Model or collection ***********
 **************************************************/
const conversationSchema = new Schema({
    from: {type: String},
    to: {type: String},
    message: {type: String}
}, {timeStamps: true});

module.exports = MONGOOSE.model('conversation', conversationSchema);



