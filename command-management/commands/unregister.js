const channelManager = require('../../channel-management/Channel-Manager');
const Discord = require('discord.js');

/**
 *
 * @param {Discord.Message} message
 * @param {string[]} [args]
 * @returns {string}
 */
let execute = function (message, args) {

    return channelManager.removeChannelFromConfig(message.channel.id);
}

module.exports.execute = execute;