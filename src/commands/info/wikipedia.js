const { Message, Client } = require("discord.js");

const { Wikipedia } = require("ultrax")

module.exports = {
    name: "wiki",

    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */

    run: async (client, message, args) => {

        /*if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send({
                embeds: [client.perms_embed]
            })*/
    let query = args.join(" ")
    if(!query) return message.channel.send("Please include a query")

    // Inistigating the wikipedia class
    const res = new Wikipedia({ 
        message:  message, // The message
        color:  "RED", // Color of embed that will be sent
        query:  query  // what the search query is
    })

    res.fetch()

    }
}