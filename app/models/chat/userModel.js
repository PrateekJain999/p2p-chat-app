"use strict";
/************* Modules ***********/
const MONGOOSE = require('mongoose');
const Schema = MONGOOSE.Schema;
/**************************************************
 ************* User Model or collection ***********
 **************************************************/
const userSchema = new Schema({
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    password: { type: String },
    gender: { type: String , enum : ['male','female'] },
    phone: {type: Number},
    socketid : {type: String}
}, {timeStamps: true});

module.exports = MONGOOSE.model('user', userSchema);



