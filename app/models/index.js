'use strict';
/********************************
 **** Managing all the models ***
 ********* independently ********
 ********************************/
module.exports = {
    userModel: require('./chat/userModel'),
    conversationModel: require('./chat/conversationModel')
};