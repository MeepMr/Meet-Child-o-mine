/**
 *
 * @param {string} messageId
 * @param {module:"discord.js".TextChannel} channel
 * @returns {Promise<module:"discord.js".Message>}
 */
let findMessage = function (messageId, channel) {

    return new Promise(resolve => {

        resolve(channel.messages.cache.get(messageId));
    })
}

module.exports.findMessage = findMessage;