
/**
 *
 * @param {module:"discord.js".Message} message
 * @returns {Promise<string>}
 */
let execute = function (message) {

    return new Promise(resolve => {

        message.channel.messages.fetch({limit: 100}).then(messages => {

            message.channel.fetch().then(c => {

                c.bulkDelete(messages).then(count => {

                    resolve(`I deleted ${count.size} Messages on behalf of ${message.author.username}`)
                });
            });
        })
    });
}

module.exports.execute = execute;