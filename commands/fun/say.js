module.exports = {
	name: 'say',
	description: 'Make the bot say anything.',
	execute(message) {
		const { prefix } = require ('../../config.json');
		message.channel.send(`${message.content
			.trim()
			.substring(prefix.length + 3)}`);
	},
};