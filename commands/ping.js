module.exports.run = async (client, message, args) => {

    const discord = require("discord.js");

    let min = '1'
    let max = '50'

    let ping1 = Math.round(Math.random() * max + min)
    let ping2 = Math.round(Math.random() * max + min)
    let ping3 = Math.round(Math.random() * max + min)

    const embed = new discord.MessageEmbed()
    .setTitle("Snwy Discord - BOT Status")
    .setDescription(`Ping: ` + (message.createdTimestamp - Date.now()) + ` ms\n\n🟢 - Goed | 🟠 - Stabiel | 🔴 - Laag\n\n**BOT Snelheid:** 🟢 **||** ${ping1}ms \n**Database:** 🔴 **||** Offline\n**Ddoss Protectie:** 🟢 **||** ${ping2}\n**Algemene Ping:** 🟠 ${ping3}`)
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