const fs = require('fs');
const Discord = require('discord.js');

/**
 *
 * @param {string} command
 * @param {Discord.Message} message
 * @param {string[]} arguments
 * @returns {string}
 */
let executeCommand = function (command, message, arguments) {

    return require(`./commands/${command}`).execute(message, arguments);
}

/**
 *
 * @param {string} command
 * @return {boolean}
 */
let existsCommand = function (command) {

    return fs.existsSync(`./command-management/commands/${command}.js`);
}

module.exports.commandExists = existsCommand;
module.exports.executeCommand = executeCommand;