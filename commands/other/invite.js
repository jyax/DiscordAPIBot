module.exports = {
	name: 'invite',
	description: 'Creates invite to server',
	guildOnly: true,
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		message.channel.createInvite()
			.then(invite => message.reply(`Here you go senpai! https://discord.gg/${invite.code}`))
			// eslint-disable-next-line no-unused-vars
			.catch((err) => message.reply('Uh oh! For some reason I can\'t find one in the back!'));
	},
};