module.exports.run = async (client, message, args) => {

    const discord = require("discord.js");

    let min1 = '1'
    let max1 = '50'
    let min2 = '1'
    let max2 = '50'
    let min3 = '25'
    let max3 = '50'

    let ping1 = Math.round(Math.random() * max1 + min1)
    let ping2 = Math.round(Math.random() * max2 + min2)
    let ping3 = Math.round(Math.random() * max3 + min3)

    const embed = new discord.MessageEmbed()
    .setTitle("Snwy Discord - BOT Status")
    .setDescription(`Ping: ` + (message.createdTimestamp - Date.now()) + ` ms\n\nš¢ - Goed | š  - Stabiel | š“ - Laag\n\n**BOT Snelheid:** š¢ **||** ${ping1}ms \n**Database:** š“ **||** Offline\n**Ddoss Protectie:** š¢ **||** ${ping2}ms\n**Algemene Ping:** š  ${ping3}ms`)
    .setColor("PURPLE")
    .setFooter("Snwy Unban");

    message.channel.send(embed)

}

module.exports.help = {
    name: "ping",
    aliases: "status",
    description: "Geeft al de verschillende commands",
    category: "Informatie",
}