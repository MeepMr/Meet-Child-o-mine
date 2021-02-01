const channelManager = require('../../channel-management/Channel-Manager');

/**
 *
 * @param {module:"discord.js".Message} message
 * @returns {string}
 */
let execute = function (message) {

    return channelManager.addChannelToConfig(message.channel.id);
}

module.exports.execute = execute;
