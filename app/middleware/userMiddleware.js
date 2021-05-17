const jwt = require('jsonwebtoken');
const {userModel, conversationModel} = require('../models/index');
const {sendMail, joiSchema, commonFunctions} = require('../utils/index');
const {userService, noteService} = require('../services/index');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = commonFunctions.decryptJwt(token);
        const user = await userService.getUser({ _id: decoded._id});

        if (!user) {
            throw new Error();
        }

        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

const joiValidation = function (req, res, next) {
    req.body.gender = req.body.gender.toLowerCase();

    const data = joiSchema.validate(req.body);

    if (data.error) {
        res.end(data.error.message);
    }
    else {
        next();
    }
}

module.exports = {
    auth,
    joiValidation
}