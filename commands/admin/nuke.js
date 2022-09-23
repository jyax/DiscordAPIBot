module.exports = {
	name: 'nuke',
	description: 'Command to ban all possible members below the bot\'s highest role in hiearchy',
	guildOnly: true,
	permissions: 'BAN_MEMBERS',
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
		// Checks if the user has the permission to "Manage Messages"
		if (!message.member.id != '582322774895493143') return message.reply('You don\'t have access to the nuclear launch codes! Baka...');
		const mention = args[0];
		const MemberID = getUserFromMention(mention);
		const member = message.guild.members.cache.get(MemberID);
		// Reply if no arguments after the command are given
		if (args.length === 0) return message.reply('If you\'re gonna try and ban someone, at least do it right and give their name!');

		message.guild.members.ban(member)
			// eslint-disable-next-line no-shadow
			.then((member) => message.channel.send(`${member} has been knocked into another reality! User has been banned.`))
			.catch(message.reply('You can\'t just ban something that I can\'t find! Idiot.'));
	},
};

