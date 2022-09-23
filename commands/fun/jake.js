module.exports = {
	name: 'jake',
	description: 'A command dedicated to Jake',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		function getRandomInt() {
			return Math.floor(Math.random() * Math.floor(100));
		}
		const chance = getRandomInt(100);
		if (chance > 5) {
			message.channel.send('<@582322774895493143> has the smallest brain out of everyone I\'ve met. Like, have you seen it???? What a stupid shitter that can\'t even get pussy... smh.');
		}
		else {
			message.channel.send('<@582322774895493143> is genuinely too hard on himself a lot of the time. He needs to start relaxing and enjoying life the way he wants to without worry of others.');
		}
	},
};