module.exports = {
	name:'nuggie',
	description:'Custom Command for Diya',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		function getRandomInt() {
			return Math.floor(Math.random() * Math.floor(100));
		}
		const nuggie_chance = getRandomInt(100);

		if (nuggie_chance > 5) {
			message.channel.send('<@308756331609849857> is best val player I\'ve ever seen. She shits on kids\' futures.');
		}
		else {
			message.channel.send('<@308756331609849857> is gonna get kissed by me if she keep bullying me >:3.');
		}
	},
};