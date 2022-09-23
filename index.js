const fs = require('fs');
const Discord = require('discord.js');
// eslint-disable-next-line no-unused-vars
const { prefix, bot_token, owner_id } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (message.author.bot || !message.content.startsWith(prefix.toLowerCase())) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	message.delete({ timeout: 1 });

	if (!command) return;
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('Please refrain from attempting to kick when this channel isn\'t even from a server! Stupid hentai!');
	}

	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return message.reply('You don\'t have permission to do that, baka!');
		}
	}

	if (command.args && !args.length) {
		let reply = (`You didn't provide any arguments for me, ${message.author}! Wtf am I supposed to do this shit?`);

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}
		return message.channel.send(reply);
	}
	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply(`Sorry senpai! I forgot what you were trying to do! Error: ${error}`);
	}
});

client.login(bot_token);