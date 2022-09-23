module.exports = {
	name: 'hello',
	description: 'Hello!!!',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		message.channel.send(`Hewwos <@${message.author.id}> o/`);
	},
};