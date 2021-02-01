/**
 * @module messageTemplate
 */

/**
 *
 * @param {string} title
 * @param {string} author
 * @param {string} color
 * @param {string} content
 * @returns {{ "Title":  string, "Content": string, "Author": string, "Color": string }}
 */
let messageTemplate = function (title, author, color, content) {

    this.Title = title;
    this.Author = author;
    this.Color = color;
    this.Content = content;
}

module.exports.messageTemplate = messageTemplate;