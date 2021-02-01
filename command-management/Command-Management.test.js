const Discord = require('discord.js');
const commandManager = require('./Command-Manager');

let responseBoolean = undefined;
let responseString = undefined;
let testMessage = undefined;

beforeEach(() => {

    responseBoolean = undefined;
    responseString = undefined;
    // noinspection JSCheckFunctionSignatures
    testMessage = new Discord.Message();
    testMessage.author = 'TestAuthor';
});

test('Execute Command without arguments', () => {

    // noinspection JSCheckFunctionSignatures
    commandManager.executeCommand('template-command', generateTestMessage()).then(responseString => {

        expect(responseString).toBe('Received from Mr-Meep [GER] with Arguments undefined');
    });
});

test('Execute Command with arguments', () => {

    let args = ["test1", "test2", "JSRulesTheWorld"];
    commandManager.executeCommand('template-command', generateTestMessage(), args).then(responseString => {

        expect(responseString).toBe('Received from Mr-Meep [GER] with Arguments test1,test2,JSRulesTheWorld');
    });
});

/**
 *
 * @return {module:"discord.js".Message}
 */
let generateTestMessage = function () {

    // noinspection JSCheckFunctionSignatures
    let message = new Discord.Message();
    // noinspection JSValidateTypes
    message.author = {
        id: '294128831021842432',
        system: null,
        locale: null,
        flags: 'UserFlags { bitfield: 640 }',
        username: 'Mr-Meep [GER]',
        bot: false,
        discriminator: '5039',
        avatar: '9b796f0be47692bfd853a4118f47cfe5',
        lastMessageID: '805786969497010207',
        lastMessageChannelID: '804308576184565760'
    };
    return message;
}