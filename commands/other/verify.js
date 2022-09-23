module.exports = {
	name: 'verify',
	description: 'Initiaties the verification of a user ',
	guildOnly: true,
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		function makeid(length) {
			let result = '';
			const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			const charactersLength = characters.length;
			for (let i = 0; i < length; i++) {
				result += characters.charAt(Math.floor(Math.random() * charactersLength));
			}
			return result;
		}

		const verifymsg = 'n!verify {token}';

		if (args.length == 0) {
			if (message.member.roles.cache.some(r =>['Verified ✓'].includes(r.name))) {
				return message.author.send('You\'ve already verified! Baka!')
					.catch(console.error);
			}

			message.author.token = 0;
			// Creates a randomized token
			const token = makeid(8);

			// Sets a token attached to the user for this unique input of the command
			console.log(`${message.author.tag} CODE: "${token}"`);
			message.author.token = token;
			const welcomemsg = `\n\nPlease verify by typing the following verification phrase into the **verification channel**: \n\n\`n!verify ${token}\`\n\n`;
			message.author.send(`${welcomemsg}`);
		}
		else {
			// Checks if the command is either a bot or a message that isn't the token assigned
			if (message.author.bot || !message.author.token) return;

			if (message.content !== (verifymsg.replace('{token}', message.author.token))) return;
			message.delete({ timeout: 1000 });
			message.author.send(`<@${message.author.id}> verification Successful! Welcome`);
			// eslint-disable-next-line no-shadow
			const role = message.guild.roles.cache.find(role => role.name === 'Verified ✓');
			const member = message.guild.members.cache.get(message.author.id);
			console.log(role);
			// Assigns the verified role
			member.roles.add(role);
		}


	},
};