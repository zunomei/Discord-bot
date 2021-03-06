module.exports = {
	name: `announce`,
	description: `The bit that announces`,
	usage: `announce <What you want me to say>`,
	execute(message) {
		const config = require(`../config/config.json`);
        const id = message.guild.id;
        let prefix;
        config.servers.forEach(server => {
            if (server.id == id) prefix = server.prefix;
        });
		if (message.member.hasPermission(`ADMINISTRATOR`) || message.member.roles.cache.has(`691665461586427944`)) {
			message.delete();
			message.channel.send(message.content.slice(prefix.length + 8));
		} else {
			message.react(`❌`);
			console.log("Permission denied: announce")
            message.reply(`Only an mod can use this command.`)
                    .then(msg => {
                         tOut = 5000;
                         message.delete({ timeout: tOut })
                         msg.delete({ timeout: tOut })
                    })
                    .catch(console.error);
		}
	},
};
