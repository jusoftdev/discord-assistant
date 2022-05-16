const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "warn",
    aliases: ['warn'],
    slash: 'both',

    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */

    run: async (client, message, args, color) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("<:error:872775118856810616> | You need admin permissions to use this command!")
        }

        const user = message.mentions.members.first()

        if (!user) {
            return message.channel.send("<:bot:872774084331712512> | Please Mention the person to who you want to warn - `/warn @mention <reason`")
        }

        if (message.mentions.users.first().bot) {
            return message.channel.send("<:bot:872774084331712512> | You can not warn bots")
        }

        if (message.author.id === user.id) {
            return message.channel.send("<:bot:872774084331712512> | You can not warn yourself")
        }

        if (user.id === message.guild.owner.id) {
            return message.channel.send("<:bot:872774084331712512> | You jerk, how do you want to warn the server owner...")
        }

        const reason = args.slice(1).join(" ")

        if (!reason) {
            return message.channel.send("<:bot:872774084331712512> | Please provide reason to warn - `/warn @mention <reason`")
        }

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

        if (warnings === 3) {
            return message.channel.send(`<:error:872775118856810616> | ${message.mentions.users.first().username} already reached the limit with 3 warnings`)
        }

        if (warnings === null) {
            const warn_embed = new Discord.MessageEmbed()
                .setAuthor('Discord Assistant Warn System', 'https://img.icons8.com/ios/2x/fa314a/break--v2.png')
                .setThumbnail('https://i.imgur.com/mjDRDGl.png')
                .setTitle(`Sucessfully warned ${message.mentions.users.first().username}`)
                .addField('Reason', `${reason}`, true)
                .addField('Show all warnings of an user', `/warnings <user>`, )
                .addField('Reset all warnings of an user', `/resetwarn <user>`, )
                .setColor(color)
                .setImage('https://cdn.discordapp.com/attachments/828176464041476111/867388771602399232/unknown.png')
                .setTimestamp()
                .setFooter(`executed by ${message.author.tag}`, 'https://img.icons8.com/ios/2x/ffffff/run-command.png');


            const warned_embed = new Discord.MessageEmbed()
                .setAuthor('Discord Assistant Warn System', 'https://img.icons8.com/ios/2x/fa314a/break--v2.png')
                .setThumbnail('https://i.imgur.com/mjDRDGl.png')
                .setTitle(`You got warned`)
                .addField('Reason', `${reason}`, true)
                .setColor(color)
                .setImage('https://cdn.discordapp.com/attachments/828176464041476111/867393569890369566/unknown.png')
                .setTimestamp()
                .setFooter(`be careful, ${message.mentions.users.first().username}`, 'https://img.icons8.com/ios/2x/ffffff/run-command.png');


            db.set(`warnings_${message.guild.id}_${user.id}`, 1)
            await user.send(warned_embed)
            await message.channel.send(warn_embed)
        } else {
            const warn2_embed = new Discord.MessageEmbed()
                .setAuthor('Discord Assistant Warn System','https://img.icons8.com/ios/2x/fa314a/break--v2.png')
                .setThumbnail('https://i.imgur.com/mjDRDGl.png')
                .setTitle(`Sucessfully warned ${message.mentions.users.first().username}`)
                .addField('Reason', `${reason}`, true)
                .addField('Show all warnings of an user', `/warnings <user>`, )
                .addField('Reset all warnings of an user', `/resetwarn <user>`, )
                .setColor(color)
                .setImage('https://cdn.discordapp.com/attachments/828176464041476111/867388771602399232/unknown.png')
                .setTimestamp()
                .setFooter(`executed by ${message.author.tag}`, 'https://img.icons8.com/ios/2x/ffffff/run-command.png');

            const warned2_embed = new Discord.MessageEmbed()
                .setAuthor('Discord Assistant Warn System', 'https://img.icons8.com/ios/2x/fa314a/break--v2.png')
                .setThumbnail('https://i.imgur.com/mjDRDGl.png')
                .setTitle(`You got warned`)
                .addField('Reason', `${reason}`, true)
                .setColor(color)
                .setImage('https://cdn.discordapp.com/attachments/828176464041476111/867393569890369566/unknown.png')
                .setTimestamp()
                .setFooter(`be careful, ${message.mentions.users.first().username}`, 'https://img.icons8.com/ios/2x/ffffff/run-command.png');
            {
                db.add(`warnings_${message.guild.id}_${user.id}`, 1)
                {
                    await user.send(warned2_embed)
                    await message.channel.send(warn2_embed)
                }
            }
        }
    }
}