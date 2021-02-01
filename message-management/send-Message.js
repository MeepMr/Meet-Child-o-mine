/**
 *
 * @param message {module:"discord.js".Message}
 * @param channel {module:"discord.js".Channel}
 */
let sendMessage = function (message, channel) {

    channel.send(message);
}

module.exports.sendMessage = sendMessage;
