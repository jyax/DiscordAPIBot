module.exports = {
	name: 'kick',
	description: 'Kicks a user or ID mentioned with the command',
	guildOnly: true,
	permissions: 'KICK_MEMBERS',
	execute(message, args) {
		function getUserFromMention(mention) {
			if (!mention) return;

			if (mention.startsWith('<@') && mention.endsWith('>')) {
				mention = mention.slice(2, -1);

				if (mention.startsWith('!')) {
					mention = mention.slice(1);
				}

				return (mention);
			}
		}
		// Reply if no arguments after the command are given
		if (args.length === 0) return message.reply('I can\'t kick anybody when you don\'t even give me their name, baka!');

		const mention = args[0];
		const MemberID = getUserFromMention(mention);
		// Uses User's ID to check if they are a member of the server
		const member = message.guild.members.cache.get(MemberID);

		if (member) {
			member
				.kick()
				// eslint-disable-next-line no-shadow
				.then((member) => message.channel.send(`Bai Bai ${member}! User has been kicked.`));
		}
		else {
			message.channel.send('I couldn\'t find anyone by that name. Baka...');
		}
	},
};