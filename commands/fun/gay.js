module.exports = {
	name: 'gay',
	description: 'Calculates your gay percentage or the percentage of whoever is mentioned with the command',
	execute(message, args) {
		function getRandomInt() {
			return Math.floor(Math.random() * Math.floor(100));
		}
		if (message.mentions.members.first()) {
			message.channel.send(`${args[0]} is ${getRandomInt(100)}% gay.`);
		}
		else {message.reply(`You are ${getRandomInt(100)}% gay.`);}
	},
};