const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "about",
    aliases: ['abt'],

    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */

    run: async (client, message, args, color) => {

        const about_embed = new MessageEmbed()
            .setColor(color)
            .setTitle('About Me')
            .setAuthor('Some stuff about Discord Assistant', 'https://img.icons8.com/nolan/2x/help.png',)
            .setThumbnail('https://i.imgur.com/mjDRDGl.png')
            .addFields(
                {
                    name: 'Im currently on ',
                    value: `${client.guilds.cache.size} servers`
                },
                {
                    name: 'I was created at',
                    value: '31.01.2021',
                    inline: true
                },
                {
                    name: 'I was made with',
                    value: 'JavaScript (discord.js)'
                },
                {
                    name: 'I was created by',
                    value: 'JuSoft',
                    inline: true
                },
                {
                    name: 'Version',
                    value: client.config.bversion,
                    inline: true
                },
                {
                    name: 'Copyright',
                    value: 'All features of Discord Assistant and belonging components are under Copyright of JuSoft Developers. '
                },
            )
            .setImage('https://cdn.discordapp.com/attachments/828176464041476111/866015895696048128/unknown.png')
            .setTimestamp()
            .setFooter(`© 2021 JuSoft All rights reserved`, 'https://img.icons8.com/ios/2x/ffffff/run-command.png');

        message.channel.send({
            embeds: [about_embed]
        });
    }
}