module.exports = {
	name: 'purge',
	description: 'Purges however many messages provided within arguments',
	guildOnly: true,
	permissions: 'MANAGE_MESSAGES',
	execute(message, args) {
		// Checks if the user has the permission to "Manage Messages"
		const msg_amount = args[0];
		if (isNaN(args) === true) return message.reply('Baka Mitai... You need to add a real number for how many to clean up!');
		if (args.length === 0) {return message.reply('Sensei! I think you forgot something! [# of Messages needed]');}
		message.channel.bulkDelete(msg_amount)
			// eslint-disable-next-line no-unused-vars
			.then(messages => console.log(`###Deleted ${msg_amount} message(s).`) || message.channel.send(`Senpai, I went ahead and cleaned up ${msg_amount} messages.`))
			.catch(console.error || message.send('I\'m to tired to clean up! [Error Occurred]'));
	},
};

