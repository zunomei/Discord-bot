const Discord = require(`discord.js`);
const config = require(`../servers.json`);
const prefix = config.prefix;
module.exports = {
    name: `play`,
    description: `The bit that corrects you`,
    usage: `Try not to use this`,
    execute(message) {
        command = message.content.slice(prefix.length)
        user = `<@234395307759108106>`
        message.channel.send(`If you are trying to use ${user} the command is \`-${command}\``);
        message.react(`❌`);
    },
};