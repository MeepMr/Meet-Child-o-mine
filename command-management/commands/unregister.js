const channelManager = require('../../channel-management/Channel-Manager');

/**
 *
 * @param {module:"discord.js".Message} message
 * @returns {Promise<string>}
 */
let execute = function (message) {

    return new Promise((resolve => {

        resolve(channelManager.removeChannelFromConfig(message.channel.id));
    }));
}

module.exports.execute = execute;