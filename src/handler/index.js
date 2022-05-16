const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");
const { mongodb } = require("../../config.js");
const mongoose = require("mongoose");

const globPromise = promisify(glob);

/**
 * @param {Client} client
 */
module.exports = async (client) => {
    // Commands
    const commandFiles = await globPromise(`${process.cwd()}/src/commands/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            client.commands.set(file.name, properties);
        }
    });

    // Events
    const eventFiles = await globPromise(`${process.cwd()}/src/events/*.js`);
    eventFiles.map((value) => require(value));

    // Slash Commands
    const slashCommands = await globPromise(
        `${process.cwd()}/src/SlashCommands/*/*.js`
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);

        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);
    });
    client.on("ready", async () => {

        // Register for all the guilds the bot is in
        client.guilds.cache.forEach(async (guild) => {
            await guild.commands.set(arrayOfSlashCommands).catch((error) => {
                console.log(error.message)
                
                // console.log(`${guild.name} (${guild.id}) - No perms for Slash commands!`);
            });
        })
    });

    // mongoose
    if (!mongodb) return;

    mongoose.connect(mongodb, {
        useFindAndModify: true,
        useUnifiedTopology: true,
    });
};
