const { Message, Client, MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js");

module.exports = {
    name: "setup",
    aliases: ['setup'],

    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */

    run: async (client, message, args) => {
        const arr = ['<:bot:872774084331712512>', '<a:wave_animated:883626260213948447>', '<:warn:883661816385925150>', '<a:suggestion:883725541344178197>', '<a:muted:883726238999523368>']

        const lms = (state) => [
            new MessageActionRow().addComponents(new MessageSelectMenu()
                .setDisabled(state)
                .setCustomId('1')
                .setPlaceholder('Select Something!')
                .addOptions([
                    {
                        label: 'Welcome Message',
                        value: 'setwelcome',
                        description: 'Set an welcome message',
                        emoji: arr[1]
                    },
                    {
                        label: 'User Report',
                        value: 'report',
                        description: 'Receive user reports from your community',
                        emoji: arr[2]
                    },
                    {
                        label: 'Server Suggestions',
                        value: 'suggestion',
                        description: 'Receive server suggestions from your community',
                        emoji: arr[3]
                    },
                    {
                        label: 'Mute',
                        value: 'mute',
                        description: 'Make the mute command work',
                        emoji: arr[4]
                    },
                ])
            )
        ]

        const msg = await message.channel.send({
            content: "https://i.imgur.com/cym2N9z.png",
            components: lms(false)
        })

        setTimeout(() => {
            msg.edit({
                content: "https://i.imgur.com/cym2N9z.png",
                components: lms(true)
            })
        }, 300000)

        client.on('interactionCreate', async (inter) => {
            if (!inter.isSelectMenu()) return;

            console.log(inter);
            if (inter.values[0] === 'about') inter.reply({
                embeds: [botabout_embed],
                ephemeral: true
            })
            if (inter.values[0] === 'setwelcome') inter.reply({
                // embeds: [setwelcome_embed],
                content: "https://streamable.com/hnakf7",
                ephemeral: true
            })
            if (inter.values[0] === 'report') inter.reply({
                // embeds: [games_embed],
                content: "https://streamable.com/61spix",
                ephemeral: true
            })
            if (inter.values[0] === 'suggestion') inter.reply({
                // embeds: [tools_embed],
                content: "https://streamable.com/dpzg5o",
                ephemeral: true
            })
            if (inter.values[0] === 'mute') inter.reply({
                // embeds: [mod_embed],
                content: "Currently, we are improving the mute command thank you.",
                ephemeral: true
            })

        })
    }
}