let Discord;
Discord = require('discord.js');

/**
 *
 * @param {Discord.Message} message
 * @returns {string}
 */
let execute = function (message) {

    message.channel.messages.fetch({limit: 100}).then(messages => {

        message.channel.fetch().then(c => {

            c.bulkDelete(messages).then();
        });
    })

    return `I deleted some Messages on behalf of ${message.author.username}`;
}

module.exports.execute = execute;