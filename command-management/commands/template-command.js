/**
 *
 * @param {module:"discord.js".Message} message
 * @param {string[]} [args]
 * @returns {Promise<string,string>}
 */
let execute = function (message, args) {

    return new Promise((resolve => {

        resolve(`Received from ${message.author.username} with Arguments ${args}`);
    }))
}

module.exports.execute = execute;