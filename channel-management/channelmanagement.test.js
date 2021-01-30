const channelManagement = require('./registeredChannels');
const testConfiguration = {"token":"ODA0MzExNzAzMDc1NDIyMjI5.YBKfpQ.kjklMnV8_KrlH9rm6nynkouD29k","command":".","allowed":[]};

function getTestConfiguration() {

    return testConfiguration;
}

test('Register a new Channel',() => {

    //Make sure, the Test is setup correctly
    getTestConfiguration().allowed = [];
    let addChannelResponse;
    expect(getTestConfiguration().allowed).toStrictEqual([]);

    //Not able to add a null-Channel id
    addChannelResponse = channelManagement.addAllowedChannelToConfig(null, getTestConfiguration());
    expect(addChannelResponse).toBe('Channel is already registered');

    //Register a Channel
    addChannelResponse = channelManagement.addAllowedChannelToConfig('123456789', getTestConfiguration());
    expect(addChannelResponse).toBe('Channel successfully added to allowed list');
    expect(getTestConfiguration().allowed).toStrictEqual(["123456789"]);
});

test('unregister a Channel', () => {

    getTestConfiguration().allowed = [];
    let removeChannelResponse;
    expect(getTestConfiguration().allowed).toStrictEqual([]);

    //Not able to delete null-Channel
    removeChannelResponse = channelManagement.removeAllowedChannelFromConfiguration(null, getTestConfiguration());
    expect(removeChannelResponse).toBe('Channel was not registered and therefore could not be removed from the Registration!');

    getTestConfiguration().allowed = ["1234", "123456789", "5555"];

    //Try to remove a not registered Channel
    removeChannelResponse = channelManagement.removeAllowedChannelFromConfiguration("123456", getTestConfiguration());
    expect(removeChannelResponse).toBe('Channel was not registered and therefore could not be removed from the Registration!');
    expect(getTestConfiguration().allowed).toStrictEqual(["1234", "123456789", "5555"]);

    //Remove a registered Channel
    removeChannelResponse = channelManagement.removeAllowedChannelFromConfiguration("123456789", getTestConfiguration());
    expect(removeChannelResponse).toBe('Channel successfully removed from Allowed List');
    expect(getTestConfiguration().allowed).toStrictEqual(["1234", "5555"]);
});

test('get all registered Channels', () => {

    //Get Channels, when no Channels are registered
    getTestConfiguration().allowed = [];
    expect(channelManagement.getAllRegisteredChannels(getTestConfiguration())).toStrictEqual([]);

    //Get Channels
    getTestConfiguration().allowed = ["12346546", "5634151145"];
    expect(channelManagement.getAllRegisteredChannels(getTestConfiguration())).toStrictEqual(["12346546", "5634151145"]);
});

test('is Channel Registered', () => {

    //No channel is registered
    getTestConfiguration().allowed = [];
    expect(channelManagement.isChannelRegistered("2134154", getTestConfiguration())).toBe(false);

    //Channel is not registered
    getTestConfiguration().allowed.push("52364165864");
    expect(channelManagement.isChannelRegistered("123456789", getTestConfiguration())).toBe(false);

    //Channel is registered
    getTestConfiguration().allowed.push("123456789");
    expect(channelManagement.isChannelRegistered("123456789", getTestConfiguration())).toBe(true);
});