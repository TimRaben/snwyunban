const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("⛔ **|** Sorry! Jij hebt niet de juiste bevoegdheid om iemand te whitelisten.");

    if (!args[0]) return message.reply("⛔ **|** Geef geen geldige persoon op.");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    user.send(`${args.slice(1).join(" ")}`)

    message.channel.send(`Je hebt succesvol een Prive bericht gestuurd naar ${args[0]}\n\nInhoud Bericht:\n${args.slice(1).join(" ")}`)

}

module.exports.help = {
    name: "msg" 
}