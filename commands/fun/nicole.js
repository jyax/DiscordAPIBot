module.exports = {
	name: 'nicole',
	description: 'A command dedicated to Nicole',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		function getRandomInt() {
			return Math.floor(Math.random() * Math.floor(100));
		}
		const nicole_chance = getRandomInt(100);
		if (nicole_chance > 5) {
			message.channel.send('<@459906749990830090> has the biggest dumpy. Period.');
		}
		else {
			message.channel.send('<@459906749990830090> smells like monkey ass when she works. EW');
		}
	},
};