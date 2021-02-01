/**
 *
 * @param {string} command
 * @param {module:"discord.js".Message} message
 * @param {string[]} args
 * @returns {string}
 */
let executeCommand = function (command, message, args) {

    return require(`./commands/${command}`).execute(message, args);
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