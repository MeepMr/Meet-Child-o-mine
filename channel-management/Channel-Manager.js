const registerChannels = require('./registeredChannels');

/**
 *
 * @param {string} channelId
 * @param {module:"discord.js".Client} client
 * @returns {module:"discord.js".Channel}
 */
let findChannel = function (channelId, client) {

    return client.channels.cache.get(channelId);
}

module.exports.findChannel = findChannel;

let addChannelToConfig = registerChannels.addAllowedChannelToConfig;
module.exports.addChannelToConfig = addChannelToConfig;

let isChannelRegistered = registerChannels.isChannelRegistered;
module.exports.isChannelRegistered = isChannelRegistered;

let getRegisteredChannels = registerChannels.getAllRegisteredChannels;
module.exports.getRegisteredChannels = getRegisteredChannels;

let removeChannelFromConfig = registerChannels.removeAllowedChannelFromConfiguration;
module.exports.removeChannelFromConfig = removeChannelFromConfig;