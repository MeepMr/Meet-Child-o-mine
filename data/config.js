const fs = require('fs');
let configurationFile = require('./configuration.json');

/**
 *
 * @param {configurationFile} [config] - Configuration File
 */
let updateConfig = function (config) {

    if(config === configurationFile) {

        fs.writeFile('./data/configuration.json', JSON.stringify(configurationFile), () => {
            console.log('Updated Config.');
        });
    } else {

        console.log('TestConfig should have been Updated')
    }
}

/**
 *
 * @param {configurationFile} [config] - Configuration File
 * @returns {{token: string, command: string, allowed: string[]}}
 */
let getConfiguration = function (config) {

    if(config === undefined) {

        config = configurationFile;
    }

    return config;
}

/**
 *
 * @param {string} newIndicator
 */
let changeCommandIndicator = function (newIndicator) {

    getConfiguration().command = newIndicator;
    updateConfig(getConfiguration());
    return `The new Command-Indicator ist now ${getConfiguration().command}`;
}

module.exports.getConfiguration = getConfiguration;
module.exports.updateConfig = updateConfig;
module.exports.changeCommandIndicator = changeCommandIndicator;
