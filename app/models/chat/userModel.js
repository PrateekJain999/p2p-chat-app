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
    gender: { type: String , enum : ['Male','Female'] },
    phone: {type: Number},
    repeat_password: {type: String},
    socketid : {type: String}
}, {timeStamps: true});

module.exports = MONGOOSE.model('user', userSchema);



