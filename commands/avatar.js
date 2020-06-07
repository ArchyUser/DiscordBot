module.exports = {
	name: 'avatar',
	description: 'Avatar!',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ format: 'png', dynamic: true })}>`;
		});

		// send the entire array of strings as a message
		// by default, discord.js will `.join()` the array with `\n`
		message.channel.send(avatarList);
	},
};