
/**
 *
 * @param message {Message}
 * @param channel {Channel}
 */
let sendMessage = function (message, channel) {

    channel.send(message);
}

module.exports.sendMessage = sendMessage;
