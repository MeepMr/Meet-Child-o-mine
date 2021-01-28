const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./configuration.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

console.log(config.token);
client.login(config.token);