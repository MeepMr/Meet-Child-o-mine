/**
 *
 * @param {module:"discord.js".Message} message
 * @param {string[]} [args]
 * @returns {string}
 */
let execute = function (message, args) {

    return `Received from ${message.author.username} with Arguments ${args}`
}

module.exports.execute = execute;