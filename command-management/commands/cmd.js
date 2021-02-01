let config = require('../../data/config');

/**
 *
 * @param {module:"discord.js".Message} message
 * @param {string[]} args
 * @returns {Promise<string>}
 */
let execute = function (message, args) {

    return new Promise((resolve) => {

        resolve(config.changeCommandIndicator(args [0]));
    });
}

module.exports.execute = execute;