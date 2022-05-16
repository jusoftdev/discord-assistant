const { Message, Client, MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    aliases: ['h'],

    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */

    run: async (client, message, args) => {
        const arr = ['✅', '❓', '⚙️', '🎮', '💡', '🔨']

        const lms = (state) => [
            new MessageActionRow().addComponents(new MessageSelectMenu()
                .setDisabled(state)
                .setCustomId('1')
                .setPlaceholder('Select Something!')
                .addOptions([
                    {
                        label: 'About',
                        value: 'about',
                        description: 'About me',
                        emoji: arr[1]
                    },
                    {
                        label: 'Settings',
                        value: 'settings',
                        description: 'Settings for Me',
                        emoji: arr[2]
                    },
                    {
                        label: 'Games',
                        value: 'games',
                        description: 'Games!',
                        emoji: arr[3]
                    },
                    {
                        label: 'Tools',
                        value: 'tool',
                        description: 'Useful commands',
                        emoji: arr[4]
                    },
                    {
                        label: 'Moderation',
                        value: 'mod',
                        description: 'Moderation commands',
                        emoji: arr[5]
                    }
                ])
            )
        ]

        const msg = await message.channel.send({
            content: "https://lnkdto.link/npT0H5",
            components: lms(false)
        })

        setTimeout(() => {
            msg.edit({
                content: "https://lnkdto.link/npT0H5",
                components: lms(true)
            })
        }, 300000)


        const management_embed = new MessageEmbed()
            .setColor(color)
            .setTitle('⚙️️️ |Bot Management Menu')
            .setAuthor('⚙️️️', 'https://img.icons8.com/nolan/2x/help.png',)
            .setThumbnail('https://i.imgur.com/mjDRDGl.png')
            .addFields(
                //{ name: '\u200B', value: '\u200B' },
                { name: 'Help menu', value: '/help or /h', inline: true },
                { name: 'Make me better', value: '/suggest', inline: true },
                { name: 'Set welcome channel', value: '/setwelcome', inline: true },
                { name: 'Serversuggestion', value: '/serversuggest', inline: true },

            )
            .setImage('https://i.imgur.com/kU0Ph55.png')
            .setTimestamp()
            .setFooter(`type /help to return to the Help Menu`, 'https://img.icons8.com/nolan/2x/bot.png');

        const botabout_embed = new MessageEmbed()
            .setColor(color)
            .setTitle('❓ | About Menu')
            .setAuthor('❓', 'https://img.icons8.com/nolan/2x/help.png',)
            .setThumbnail('https://i.imgur.com/mjDRDGl.png')
            .addFields(
                //{ name: '\u200B', value: '\u200B' },
                { name: 'About this Bot', value: '/about', inline: true },
                { name: 'Changelog of the latest update', value: '/changelog or /cl', inline: true },
                { name: 'Make me better ', value: '/suggest', inline: true },
            )
            .setImage('https://i.imgur.com/1QnQZ1e.png')
            .setTimestamp()
            .setFooter(`type /help to return to the Help Menu`, 'https://img.icons8.com/nolan/2x/bot.png');

        const games_embed = new MessageEmbed()
            .setColor(color)
            .setTitle('🎮 | Games Menu')
            .setAuthor('🎮', 'https://img.icons8.com/nolan/2x/help.png',)
            .setThumbnail('https://i.imgur.com/oUXbHct.png')
            .addFields(
                //{ name: '\u200B', value: '\u200B' },
                { name: 'Snake Minigame', value: '/snake or /snakegame', inline: true },
            )
            .setImage('https://i.imgur.com/z5P6yF7.png')
            .setTimestamp()
            .setFooter(`type /help to return to the Help Menu`, 'https://img.icons8.com/nolan/2x/bot.png');

        const tools_embed = new MessageEmbed()
            .setColor(color)
            .setTitle('💡 | Tools Menu')
            .setAuthor('💡')
            .setThumbnail('https://i.imgur.com/mjDRDGl.png')
            .addFields(
                //{ name: '\u200B', value: '\u200B' },
                { name: 'Show more Information about an user', value: '/whois |  /user |  /userinfo <user>', inline: true },
                { name: 'Show more Information about this server', value: '/server | /sinfo | /serverinfo', inline: true },
                { name: 'Show the Avatar of an user', value: '/avatar | /av | /a <user>', inline: true },
                { name: 'Show the Icon of this server', value: '/servericon | /sicon | /si', inline: true },
                { name: 'Get the ID of an user', value: '/id <user>', inline: true },
                { name: 'Get disappointed about your connection', value: '/ping', inline: true },
                { name: 'Get an useful advice', value: '/advice', inline: true },
                { name: 'Get a joke', value: '/joke', inline: true },
                { name: 'Get a meme', value: '/meme', inline: true },
                { name: 'Gets you some information about movies or series', value: '/movseries', inline: true },
            )
            .setImage('https://cdn.discordapp.com/attachments/828176464041476111/866784466927484928/unknown.png')
            .setTimestamp()
            .setFooter(`type /help to return to the Help Menu`, 'https://img.icons8.com/nolan/2x/bot.png');

        const mod_embed = new MessageEmbed()
            .setColor(color)
            .setTitle('🔨 | Moderation Menu')
            .setAuthor('🔨')
            .setThumbnail('https://i.imgur.com/mjDRDGl.png')
            .addFields(
                //{ name: '\u200B', value: '\u200B' },
                { name: 'Kick an user \u200B ``Bot & executer requires permissions``', value: '/kick <user>', inline: true },
                { name: 'Ban an user \u200B ``Bot & executer requires permissions``', value: '/ban <user>', inline: true },
                { name: 'Warn an user \u200B ``Executer needs admin permissions``', value: '/warn <user>', inline: true },
                { name: 'Mute an user \u200B ``Executer neends admin permissions | Mute role on the server required``', value: '/mute <user>', inline: true },
                { name: 'Report an user \u200B', value: '/report <user>', inline: true },
            )
            .setImage('https://cdn.discordapp.com/attachments/828176464041476111/866785884124872734/unknown.png')
            .setTimestamp()
            .setFooter(`type /help to return to the Help Menu`, 'https://img.icons8.com/nolan/2x/bot.png');



        client.on('interactionCreate', async (inter) => {
            if (!inter.isSelectMenu()) return;

            console.log(inter);
            if (inter.values[0] === 'about') inter.reply({
                embeds: [botabout_embed],
                ephemeral: true
            })
            if (inter.values[0] === 'settings') inter.reply({
                embeds: [management_embed],
                ephemeral: true
            })
            if (inter.values[0] === 'games') inter.reply({
                embeds: [games_embed],
                ephemeral: true
            })
            if (inter.values[0] === 'tool') inter.reply({
                embeds: [tools_embed],
                ephemeral: true
            })
            if (inter.values[0] === 'mod') inter.reply({
                embeds: [mod_embed],
                ephemeral: true
            })

        })
    }
}