/**
 *
 * @param {module:"discord.js".Message} message
 * @param {string[]} [args]
 * @returns {string}
 */
let execute = function (message, args) {

    return args.join(' ');
}

module.exports.execute = execute;