module.exports = {
	name: 'rachel',
	description: 'A command dedicated to Rach Rach',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		function getRandomInt() {
			return Math.floor(Math.random() * Math.floor(100));
		}
		const rachel_chance = getRandomInt(100);

		if (rachel_chance > 5) {
			message.channel.send('<@459630240046514186> has a fatter cock than anybody I know. Imagine when it cooms.');
		}
		else {message.channel.send('<@459630240046514186> is a stupid koomer fag that smells like ass.');}
	},
};