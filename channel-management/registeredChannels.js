const configurationFile = require('../data/config');
let configuration = configurationFile.config;

let addAllowedChannelToConfiguration = function (newChannelId) {

    if(channelIsRegistered(newChannelId)) {

        return 'Channel is already registered';
    } else {

        addTheNewChannelToTheConfiguration(newChannelId);
        return 'Channel succesfully added to allowed list';
    }
}

let removeAllowedChanelFromConfiguration = function (deleteChannelId) {

    if(channelIsRegistered(deleteChannelId)) {

        return removeChannelFromConfiguration(getIndexOfRegisteredChannel(deleteChannelId));
    } else {

        return 'Channel was not registered and therefore could not be removed from the Registration!'
    }
}

let getIndexOfRegisteredChannel = function (channelId) {

    let searchIndex = 0;

    while(configuration.allowed[searchIndex] !== channelId) {

        searchIndex++;
    }

    return searchIndex;
}

let removeChannelFromConfiguration = function (arrayIndex) {

    for(let currentIndex = arrayIndex; currentIndex < getAllRegisteredChannels().length -1; currentIndex++) {

        getAllRegisteredChannels()[currentIndex] = getAllRegisteredChannels()[currentIndex+1];
    }

    getAllRegisteredChannels().pop();
    configurationFile.updateConfig();

    return 'Channel succesfully removed from Allowed List';
}

let addTheNewChannelToTheConfiguration = function (newChannelId) {

    configuration.allowed.push(newChannelId);
    configurationFile.updateConfig();
}

let channelIsRegistered = function (testChannelId) {

    for(let channelId of getAllRegisteredChannels()) {

        if(channelId === testChannelId) {

            return true;
        }
    }

    return false;
}

let getAllRegisteredChannels = function () {

    return configuration.allowed;
}

module.exports.addAllowedChannelToConfig = addAllowedChannelToConfiguration;
module.exports.isChannelRegistered = channelIsRegistered;
module.exports.getAllRegisteredChannels = getAllRegisteredChannels;
module.exports.removeAllowedChannelFromConfiguration = removeAllowedChanelFromConfiguration;
