const constructMessage = require('./construct-Message');
const sendMessage = require('./send-Message');

module.exports.generateMessage = constructMessage.generateMessage;
module.exports.sendMessage = sendMessage.sendMessage;
