/**
 *
 * @param {module:"discord.js".Message} message
 * @param {string[]} args
 * @returns {string}
 */
let execute = function (message, args) {

    return config.changeCommandIndicator(args [0]);
}

module.exports.execute = execute;