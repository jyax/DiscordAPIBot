module.exports = {
	name: 'banroulette',
	description: 'Command to roulette something',
	aliases: ['br', 'banr', 'broulette'],
	execute(message, args) {
		function getRandomInt(x) {
			return Math.floor(Math.random() * Math.floor(x));
		}
		const roll = getRandomInt(args);
		const hit = getRandomInt(args);
		// Reply if no arguments after the command are given
		if (args.length > 0) {
			if (hit != roll) {return message.reply(`You're lucky this time! Your roll was ${roll} and you had to hit ${hit}.`);}
			else {
				// eslint-disable-next-line no-shadow
				message.reply(`has been given the fate of being knocked into another reality! User lost ban roulette with a roll of ${roll} matching the hit ${hit}! What a dumbass... <@582322774895493143> go ahead and ban them...`);
			}
		}
		else if (args.length <= 0) {
			return message.reply('For this roulette you need to provide a number to call the odds (Ex: 10, 520, 999).');
		}
	},
};