const Discord = require('discord.js')

/**
 *
 * @param text {string}
 * @returns {module:"discord.js".MessageEmbed}
 */
let constructMessage = function (text) {

    let embeddedMessage = new Discord.MessageEmbed()
    embeddedMessage.setColor('GREEN')
    embeddedMessage.setTitle(text);
    embeddedMessage.setAuthor('Justin Klein');
    embeddedMessage.setURL('https://www.duckduckgo.com');
    embeddedMessage.setFooter('Have a nice evening! 😜👍🏻')

    return embeddedMessage;
}

module.exports.generateMessage = constructMessage;
