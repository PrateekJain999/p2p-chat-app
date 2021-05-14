'use strict';
/********************************
 **** Managing all the services ***
 ********* independently ********
 ********************************/
module.exports = {
    userModel: require('./chat/userModel'),
    conversationModel: require('./chat/conversationModel')
};