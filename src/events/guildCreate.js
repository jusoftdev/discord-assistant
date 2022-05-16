const client = require('../../index');

client.on('guildCreate', async (guild) => {
    await guild
        .systemChannel.send("https://i.imgur.com/MDYXwEi.png").catch((err) => { });
});