const configurationFile = require('../data/config');

let addAllowedChannelToConfiguration = function (newChannelId, config) {

    if(channelIsRegistered(newChannelId, config) || !channelIdIsNotNull(newChannelId)) {

        return 'Channel is already registered';
    } else {

        return addTheNewChannelToTheConfiguration(newChannelId, config);
    }
}

let removeAllowedChannelFromConfiguration = function (deleteChannelId, config) {

    if(channelIsRegistered(deleteChannelId, config) && channelIdIsNotNull(deleteChannelId)) {
        return removeChannelFromConfiguration(getIndexOfRegisteredChannel(deleteChannelId, config), config);
    } else {

        return 'Channel was not registered and therefore could not be removed from the Registration!'
    }
}

let getIndexOfRegisteredChannel = function (channelId, config) {

    let configuration = configurationFile.getConfiguration(config);
    let searchIndex = 0;

    while(configuration.allowed[searchIndex] !== channelId) {

        searchIndex++;
    }

    return searchIndex;
}

let removeChannelFromConfiguration = function (arrayIndex, config) {

    let configuration = configurationFile.getConfiguration(config);

    for(let currentIndex = arrayIndex; currentIndex < getAllRegisteredChannels(configuration).length -1; currentIndex++) {

        getAllRegisteredChannels(configuration)[currentIndex] = getAllRegisteredChannels(configuration)[currentIndex+1];
    }

    getAllRegisteredChannels(configuration).pop();
    configurationFile.updateConfig(configuration);

    return 'Channel successfully removed from Allowed List';
}

let addTheNewChannelToTheConfiguration = function (newChannelId, config) {

    let configuration = configurationFile.getConfiguration(config);

    configuration.allowed.push(newChannelId);
    configurationFile.updateConfig(configuration);

    return 'Channel successfully added to allowed list';
}

let channelIdIsNotNull = function (testChannelId) {

    return testChannelId != null;
}

let channelIsRegistered = function (testChannelId, config) {

    let configuration = configurationFile.getConfiguration(config);

    for(let channelId of getAllRegisteredChannels(configuration)) {

        if(channelId === testChannelId) {

            return true;
        }
    }

    return false;
}

let getAllRegisteredChannels = function (config) {

    let configuration = configurationFile.getConfiguration(config);

    return configuration.allowed;
}

module.exports.addAllowedChannelToConfig = addAllowedChannelToConfiguration;
module.exports.isChannelRegistered = channelIsRegistered;
module.exports.getAllRegisteredChannels = getAllRegisteredChannels;
module.exports.removeAllowedChannelFromConfiguration = removeAllowedChannelFromConfiguration;
