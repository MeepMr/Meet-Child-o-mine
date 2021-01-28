const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./configuration.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    let channel = client.channels.fetch("804308576184565760");
    let ms = channel.messages;
    console.log(ms);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.login(config.token).then((test) => {

    console.log(`Logged in using Bot-Token ${test.substring(0,10)}...`);
});