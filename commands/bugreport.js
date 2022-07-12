const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete()

    if (!args[0]) return message.channel.send(":x:  **|** Geef een geldige bug report op!")

    message.channel.send(":white_check_mark: **|** Je hebt succesvol een Bug gerapporteerd!")

    setTimeout(() => {

        message.channel.bulkDelete(1)

    }, 1000);

    var embed = new discord.MessageEmbed()
        .setTitle("BUG REPORT")
        .addField("Bug", `${args.slice(0).join(" ")}`)
        .addField("Geraporteerd door:", `${message.author}`)
        .setFooter("Snwy Netwerk • Bug Report • Geraporteerd op:")
        .setTimestamp();

        var channel = message.guild.channels.cache.get("913838035379028048");

        channel.send(embed);
}

module.exports.help = {
    name: "bugreport" 
}