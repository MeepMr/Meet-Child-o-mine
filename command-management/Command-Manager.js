const fs = require('fs');

/**
 *
 * @param {string} command
 * @param {module:"discord.js".Message} message
 * @param {string[]} args
 * @returns {Promise<string>}
 */
let executeCommand = function (command, message, args) {

    return new Promise((resolve, reject) => {
        if(fs.existsSync(`./command-management/commands/${command}.js`)) {

            require(`./commands/${command}`).execute(message, args).then((returnString) => {

                resolve(returnString);
            });
        } else {

            reject ('Command is not available in your Region');
        }
    });
}

module.exports.executeCommand = executeCommand;