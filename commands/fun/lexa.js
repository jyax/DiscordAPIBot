module.exports = {
	name: 'lexa',
	description: 'Custom command for Alexa',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		function getRandomInt() {
			return Math.floor(Math.random() * Math.floor(100));
		}
		const chance = getRandomInt(100);

		if (chance > 5) {
			message.channel.send('<@407035976091959299> has some of the best taste in music and pops off when she wants to in val. She easily can be TenZ');
		}
		else {
			message.channel.send('<@407035976091959299> is a stinky lil whore that says sorry too much >:C');
		}
	},
};