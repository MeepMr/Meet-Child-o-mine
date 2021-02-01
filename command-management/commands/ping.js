/**
 *
 * @returns {Promise<string>}
 */
let execute = function () {

    return new Promise((resolve) => {

        resolve('PONG!');
    })
}

module.exports.execute = execute;