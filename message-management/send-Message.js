/**
 *
 * @param message {module:"discord.js".Message}
 * @param channel {module:"discord.js".TextChannel}
 */
let sendMessage = function (message, channel) {

    // noinspection JSUnresolvedFunction
    channel.send(message);
}

module.exports.sendMessage = sendMessage;
