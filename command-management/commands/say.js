const Discord = require('discord.js');

/**
 *
 * @param {Discord.Message} message
 * @param {string[]} [args]
 * @returns {string}
 */
let execute = function (message, args) {

    return args.join(' ');
}

module.exports.execute = execute;