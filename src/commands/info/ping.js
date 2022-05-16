const { Message, Client, MessageEmbed, version } = require("discord.js");
module.exports = {
    name: "ping",
    aliases: ['p'],

    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */

    run: async (client, message, args, color) => {

        const ping_embed = new MessageEmbed()
            .setColor("#2F3136")
            .setTitle('Pong!')
            .setAuthor('Ping', 'https://img.icons8.com/fluent/2x/cloud-connection.png',)
            .setThumbnail('https://i.imgur.com/mjDRDGl.png')
            .addFields(
                {
                    name: '<:connection:866000655307374623> Latectery',
                    value: `${Date.now() - message.createdTimestamp}ms`,
                    inline: true
                },
                {
                    name: '<:api:866000590287274024> API Latency',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: '<:location:866000527744827423> Server Location',
                    value: `Frankfurt/Main, Germany`,
                    inline: true
                },
                {
                    name: '<:node:866044445710745632> NodeJS',
                    value: `Version ${process.version}`,
                    inline: true
                },
                {
                    name: '<:djs:866044591013756979> DiscordJS',
                    value: `Version v${version}`,
                    inline: true
                },

            )
            .setImage('https://cdn.discordapp.com/attachments/828176464041476111/865980302136573982/unknown.png')
            .setTimestamp()
            .setFooter(`Requested by ${message.author.tag}`, 'https://img.icons8.com/ios/2x/ffffff/run-command.png');
        message.channel.send({
            embeds: [ping_embed]
        })
    }
}