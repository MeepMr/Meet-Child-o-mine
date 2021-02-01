/**
 *
 * @param {module:"discord.js".Message} message
 * @param {string[]} [args]
 * @returns {Promise<string>}
 */
let execute = function (message, args) {

    return new Promise((resolve => {

        resolve (args.join(' '));
    }));
}

module.exports.execute = execute;