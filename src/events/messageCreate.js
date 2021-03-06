const client = require("../../index");

client.on("messageCreate", async (message) => {
    if (message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(client.config.prefix)) return;

    if (message.content.toLowerCase() === 'gg') message.reply({ content: '+10 Karma' })

    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(" ");

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;

    await command.run(client, message, args, color = '#2F3136');
});
