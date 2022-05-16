const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "invite",
    aliases: ['invite'],
    slash: 'both',

    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */

    run: async (client, message, args, color) => {
        message.channel.send("http://jsft.be/discordassistant");
    }
}