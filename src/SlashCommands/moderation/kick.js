const { Client, CommandInteraction, members, client, Message, version, MessageEmbed } = require("discord.js");
module.exports = {
    name: "kick",
    description: "Kick an user",
    type: 'CHAT_INPUT',

  options: [{
  name: 'User',
  desciption: 'User to ban lol',
  type: 'USER',
  required: true
  }],

    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
    

     const user = interaction.options.getUser('User')
      
    if (!interaction.member.permissions.has('KICK_MEMBERS')) return interaction.channel.send({
        embeds: [client.perms_embed]
    })

    const [Id] = args;
    const reason = args.slice(1).join(" ");

    const member = interaction.mentions.members.first() || interaction.guild.members.cache.get(Id) || client.users.cache.get(Id);

    if (member.user.id === client.user.id) return interaction.followUp({
        content: 'I dont wanna kick myself :c'
    })

    if (member.user.id === message.member.id) return interaction.followUp({
        content: 'You cant kick urself bruv'
    })

    if (!member.kickable) return interaction.followUp({
        content: 'I cant kick ' + member.user.tag
    })

    await member.kick(reason).then(async () => {
        await interaction.channel.send({
            embeds: [client.kick_embed]
        })
    }).catch(async (error) => {
        await interaction.channel.send({
            content: 'I cant kick lol'
        })
    });
}
}