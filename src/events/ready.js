const client = require("../../index");

client.on("ready", () => {
    console.log(`${client.user.tag} is up and ready to go!`)

    const bversion = client.config.version

    const activities_list = [
        "/help | " + bversion,
        "</> by JuSoft",
        "with ModMail",
        "rope",
        "GTA 6 for samsung fridge",
        "jusoft.dev",
        "/help",
        bversion,
        "/about",
        "/snake",
        "/h",
        "/changelog",
        "/advice",
        "/joke",
        "/meme",
        "/facts",
        "with you",
        "nothing",
        "with DevBot"
    ];

    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index], {
            type: 'PLAYING'
        }); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.

});
