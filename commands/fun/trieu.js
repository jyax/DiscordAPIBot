module.exports = {
	name: 'trieu',
	description: 'A custom command for Trieu',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		function getRandomInt() {
			return Math.floor(Math.random() * Math.floor(100));
		}
		const trieu_chance = getRandomInt(100);

		if (trieu_chance > 5) {
			message.channel.send('<@261887176864825354> is cute monkey that has cute doggie that smells like wet noodle.');
		}
		else {
			message.channel.send('<@261887176864825354> is a stinky 4\' 11.5" midget >:3');
		}
	},
};