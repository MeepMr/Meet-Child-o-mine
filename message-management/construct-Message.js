const Discord = require('discord.js')

/**
 *
 * @param {{ "Title":  string, "Content": string, "Author": string, "Color": string }} messageTemplate
 * @returns {Promise<module:"discord.js".MessageEmbed>}
 */
let constructMessage = function (messageTemplate) {

    return new Promise((resolve, reject) => {

        if(messageTemplate !== undefined) {
            let embeddedMessage = new Discord.MessageEmbed()
            embeddedMessage.setColor(messageTemplate.Color)
            embeddedMessage.setTitle(messageTemplate.Title);
            embeddedMessage.setAuthor(messageTemplate.Author);
            embeddedMessage.setDescription(messageTemplate.Content);
            embeddedMessage.setFooter('Have a nice evening! 😜👍🏻')

            resolve(embeddedMessage);
        } else {

            reject('No message Template provided');
        }
    })
}

module.exports.generateMessage = constructMessage;
