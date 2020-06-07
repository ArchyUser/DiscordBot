const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if(message.content == '!ping') {
		message.channel.send('Pong.');
	}
});

client.login('NzE4OTg4NjE1NDkyODI5MTk0.Xtw4_g.Vj0LwfM9ZqFrUgoNjXXkopP1H0M');