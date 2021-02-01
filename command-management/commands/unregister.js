const channelManager = require('../../channel-management/Channel-Manager');
let Discord;
Discord = require('discord.js');

/**
 *
 * @param {Discord.Message} message
 * @returns {string}
 */
let execute = function (message) {

    return channelManager.removeChannelFromConfig(message.channel.id);
}

module.exports.execute = execute;