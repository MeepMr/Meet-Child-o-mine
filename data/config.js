const fs = require('fs');
let configurationFile = require('./configuration.json');

function updateConfig(config) {

    if(config === configurationFile) {

        fs.writeFile('./data/configuration.json', JSON.stringify(configurationFile), () => {
            console.log('Updated Config.');
        });
    } else {

        console.log('TestConfig should have been Updated')
    }
}

let getConfiguration = function (config) {

    if(config === undefined) {

        config = configurationFile;
    }

    return config;
}

module.exports.getConfiguration = getConfiguration;
module.exports.updateConfig = updateConfig;