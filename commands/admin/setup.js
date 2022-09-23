module.exports = {
	name: 'setup',
	description: 'Sets up the bot in the current server',
	guildOnly: true,
	permissions: 'ADMINISTRATOR',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		// Checks if the user has the permission "Ban Members"
		if (!message.member.hasPermission('MANAGE_GUILD')) {
			return message.reply('Uhhhh, you\'re not allowed to do that!');
		}
		if (message.guild.roles.cache.find(role => role.name === 'Verified ✓')) return message.reply('I\'ve already cleaned this place up...');
		message.guild.roles.create({
			data:{
				name:'Verified ✓',
				color:'GOLD',
			},
			reason:'Role used to grant access to rest of the server',
		})
			.then(message.reply('I\'ve gone ahead and cleaned up the place senpai!'))
			.catch (console.error);
	},
};