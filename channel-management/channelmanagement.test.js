const channelManagement = require('./registeredChannels');
const testConfiguration = require('../data/testConfiguration.json');
let responseString = undefined;
let responseBoolean = undefined;

function getTestConfiguration() {

    return testConfiguration;
}

beforeEach(() => {

    getTestConfiguration().allowed = [];
    responseString = undefined;
    responseBoolean = undefined;
})

test('Register a NULL-Channel', () => {

    responseString = channelManagement.addAllowedChannelToConfig(null, getTestConfiguration());
    expect(responseString).toBe('Channel is already registered');
});

test('Register a new Channel',() => {

    responseString = channelManagement.addAllowedChannelToConfig('123456789', getTestConfiguration());
    expect(responseString).toBe('Channel successfully added to allowed list');
    expect(getTestConfiguration().allowed).toStrictEqual(["123456789"]);
});

test('unregister a NULL-Channel', () => {

    responseString = channelManagement.removeAllowedChannelFromConfiguration(null, getTestConfiguration());
    expect(responseString).toBe('Channel was not registered and therefore could not be removed from the Registration!');
});

test('Remove not registered Channel', () => {

    getTestConfiguration().allowed = ["1234", "123456789", "5555"];
    responseString = channelManagement.removeAllowedChannelFromConfiguration("123456", getTestConfiguration());
    expect(responseString).toBe('Channel was not registered and therefore could not be removed from the Registration!');
    expect(getTestConfiguration().allowed).toStrictEqual(["1234", "123456789", "5555"]);
});

test('unregister a Channel', () => {

    getTestConfiguration().allowed = ["1234", "123456789", "5555"];
    responseString = channelManagement.removeAllowedChannelFromConfiguration("123456789", getTestConfiguration());
    expect(responseString).toBe('Channel successfully removed from Allowed List');
    expect(getTestConfiguration().allowed).toStrictEqual(["1234", "5555"]);
});

test('get all registered Channels', () => {

    getTestConfiguration().allowed = ["12346546", "5634151145"];
    expect(channelManagement.getAllRegisteredChannels(getTestConfiguration())).toStrictEqual(["12346546", "5634151145"]);
});

test('is NULL-Channel registered', () => {

    responseBoolean = channelManagement.isChannelRegistered(null, getTestConfiguration());
    expect(responseBoolean).toBe(false);
});

test('no Channel is registered', () => {

    responseBoolean = channelManagement.isChannelRegistered("123456789", getTestConfiguration());
    expect(responseBoolean).toBe(false);
});

test('channel is not registered', () => {

    getTestConfiguration().allowed = ["1234956789"];
    responseBoolean = channelManagement.isChannelRegistered()
    expect(responseBoolean).toBe(false);
});

test('channel is Registered', () => {

    getTestConfiguration().allowed = ["123456789", "123456"];
    responseBoolean = channelManagement.isChannelRegistered("123456789", getTestConfiguration());
    expect(responseBoolean).toBe(true);
});