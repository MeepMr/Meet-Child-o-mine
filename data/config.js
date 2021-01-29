const fs = require('fs');
let configuration = require('./configuration.json');

function updateConfig() {

    fs.writeFile('./data/configuration.json', JSON.stringify(configuration), () => {
        console.log('Updated Config.');
    });
}

module.exports.config = configuration;
module.exports.updateConfig = updateConfig;