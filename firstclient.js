const Discord = require('discord.js');
const client = new Discord.Client();

const configurationFile = require('./data/config');
const commandIndicator = configurationFile.getConfiguration().command;
const botToken = configurationFile.getConfiguration().token;

const channelManager = require('./channel-management/registeredChannels');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

    if(msg.author.username !== client.user.username) {

        if(msg.content === 'ping') {

            for(let channelId of channelManager.getAllRegisteredChannels()) {

                console.log(channelId);

                client.channels.cache.get(channelId).send('Pong!')
            }
        }

        if(msg.content.startsWith(commandIndicator)) {

            let cmd = msg.content.substr(commandIndicator.length);
            cmd = cmd.split(' ');
            console.log(`Catched Command ${cmd [0]}`)

            if(cmd[0] === 'register') {

                msg.channel.send(channelManager.addAllowedChannelToConfig(msg.channel.id)).then();
            }

            if(cmd [0] === 'clean') {

                msg.channel.messages.fetch({limit:100}).then(messages => {

                    msg.channel.fetch().then(c => {

                        c.bulkDelete(messages).then();
                    });
                })
            }

            if(cmd [0] === 'cleanAll') {

                for(let channelId of channelManager.getAllRegisteredChannels()) {

                    client.channels.cache.get(channelId).messages.fetch({limit:100}).then(messages => {

                        msg.channel.fetch().then(c => {

                            c.bulkDelete(messages).then();
                        });
                    })
                }
            }

            if(cmd [0] === 'unregister') {

                msg.channel.send(channelManager.removeAllowedChannelFromConfiguration(msg.channel.id)).then();
            }
        }
    }
});

client.login(botToken).then((registeredToken) => {

    console.log(`Logged in using Bot-Token ${registeredToken.substring(0,10)}...`);
});