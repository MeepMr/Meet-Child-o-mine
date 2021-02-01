const config = require('../../data/config');
let Discord;
Discord = require('discord.js');

/**
 *
 * @param {Discord.Message} message
 * @param {string[]} args
 * @returns {string}
 */
let execute = function (message, args) {

    return config.changeCommandIndicator(args [0]);
}

module.exports.execute = execute;