let Discord;
Discord = require('discord.js');

/**
 *
 * @param {Discord.Message} message
 * @param {string[]} [args]
 * @returns {string}
 */
let execute = function (message, args) {

    return `Received from ${message.author.username} with args ${args}`
}

module.exports.execute = execute;