const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "905439432168058920";

    if (message.channel.parentID == categoryID) {
        message.channel.delete();
    } else {


        message.channel.send(":x: **|** Doe dit in een officieel verzoek.");
    
    }

}

module.exports.help = {
    name: "behandeld",
    description: "Geeft al de verschillende commands",
    category: "Informatie",
}