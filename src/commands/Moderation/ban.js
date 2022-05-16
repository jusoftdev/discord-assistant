const { Message, Client } = require("discord.js");

module.exports = {
    name: "ban",

    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */

    run: async (client, message, args) => {

        /*if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send({
                embeds: [client.perms_embed]
            })*/

        const [Id] = args;
        const reason = args.slice(1).join(" ");

        const member = message.mentions.members.first() || message.guild.members.cache.get(Id) || client.users.cache.get(Id);

        if (member.user.id === client.user.id) return message.reply({
            content: 'I dont wanna kick myself :c'
        })

        if (member.user.id === message.member.id) return message.reply({
            content: 'You cant ban urself bruv'
        })

        if (!member.bannable) return await message.channel.send({
            content: 'I cant ban him!'
        })

        await member.ban({
            reason
        }).then(async () => {
            await message.channel.send({
                embeds: [client.kick_embed]
            })
        })
    }
}