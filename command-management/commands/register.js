const channelManager = require('../../channel-management/Channel-Manager');
let Discord;
Discord = require('discord.js');

/**
 *
 * @param {Discord.Message} message
 * @returns {string}
 */
let execute = function (message) {

    return channelManager.addChannelToConfig(message.channel.id);
}

module.exports.execute = execute;
