const constructMessage = require('./construct-Message');
const messageTemplate = require('./messageTemplate');
const sendMessage = require('./send-Message');

/**
 *
 * @param {string} responseString
 * @param {string} command
 * @param {module:"discord.js".TextChannel} channel
 * @returns {Promise<string>}
 */
let sendResponseMessage = function (responseString, command, channel) {

    return new Promise(resolve => {

        let template = new messageTemplate.messageTemplate(`Response for ${command}`, 'Meet Child \'o Mine','YELLOW', responseString)
        constructMessage.generateMessage(template).then(message => {

            // noinspection JSCheckFunctionSignatures
            sendMessage.sendMessage(message, channel);
            resolve(`Message for command ${command} send successfully`);
        });
    });
}

module.exports.sendResponseMessage = sendResponseMessage;
