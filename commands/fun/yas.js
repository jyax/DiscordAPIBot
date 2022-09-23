module.exports = {
	name: 'yas',
	description: 'A custom command for yasmine',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		function getRandomInt() {
			return Math.floor(Math.random() * Math.floor(100));
		}
		const yas_chance = getRandomInt(100);

		if (yas_chance > 5) {
			message.channel.send('<@364264080262823948> is god tier xayah support on league of legends and is poggers when she shits on me.');
		}
		else {
			message.channel.send('<@364264080262823948> eats shit and kooms at the thought of the smell.');
		}
	},
};