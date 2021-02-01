const Discord = require('discord.js');
const client = new Discord.Client();

const configurationFile = require('./data/config');

const messageManager = require('./message-management/Message-Manager');
const commandManager = require('./command-management/Command-Manager')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

    let commandIndicator = configurationFile.getConfiguration().command;

    if(msg.author.username !== client.user.username && msg.content.startsWith(commandIndicator)) {

        let messageContent = msg.content.substr(commandIndicator.length);
        let args = messageContent.split(' ');
        let cmd = args.shift();

        commandManager.executeCommand(cmd, msg, args).then((returnString) => {

            console.log(`Catched Command ${cmd} with the Arguments ${args}`);
            let responseMessage = messageManager.generateMessage(returnString);
            messageManager.sendMessage(responseMessage, msg.channel);
        }).catch((errorString) => {

            console.log(errorString);
        })
    }
});

client.login(configurationFile.getConfiguration().token).then((registeredToken) => {

    console.log(`Logged in using Bot-Token ${registeredToken.substring(0,10)}...`);
});