const { Client, Collection, MessageEmbed } = require("discord.js");
const client = new Client({
    intents: 32767,
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: false
    }
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.js");
client.color = client.config.color;


client.kick_embed = new MessageEmbed()
    .setColor(client.color)
    .setTitle('User got successfully kicked')
    .setAuthor('Discord Assistant', 'https://img.icons8.com/nolan/2x/door-opened.png',)
    .setThumbnail('https://i.imgur.com/mjDRDGl.png')
    .setImage('https://i.imgur.com/ZOaf2Dn.png')
    .setTimestamp()
    .setFooter(`User kicked by Discord Assistant`, 'https://img.icons8.com/nolan/2x/bot.png');

client.perms_embed = new MessageEmbed()
    .setColor(client.color)
    .setTitle('You cannot do that!')
    .setAuthor('No permissions.', 'https://img.icons8.com/fluent/2x/error-cloud.png',)
    .setThumbnail('https://i.imgur.com/mjDRDGl.png')
    .setImage('https://i.imgur.com/3TnbMpZ.png')
    .setTimestamp()
    .setFooter(`Error`, 'https://img.icons8.com/dusk/2x/spam.png');

client.mention_embed = new MessageEmbed()
    .setColor(client.color)
    .setTitle('No member mentioned')
    .setAuthor('Please mention a member', 'https://img.icons8.com/fluent/2x/error-cloud.png',)
    .setThumbnail('https://i.imgur.com/mjDRDGl.png')
    .setImage('https://i.imgur.com/3TnbMpZ.png')
    .setTimestamp()
    .setFooter(`Error`, 'https://img.icons8.com/dusk/2x/spam.png');



// Initializing the project
require("./src/handler")(client);

client.login(client.config.token);
