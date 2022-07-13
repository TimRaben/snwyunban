const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var categoryID = "996330238353092648";

    var unbanUser = message.guild.member(message.mentions.users.first());

    if (message.channel.parentID !== categoryID) return message.reply(":x: **||** Verzoeken kunnen alleen worden beoordeelt in het Verzoek Kanaal zelf, klein privacy puntje =)") && message.delete();

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(":x: **||** Jij bent niet gemachtigd om een beoordeling te geven.") && message.delete();

    if (!unbanUser) return message.reply(":x: **||** Geef een geldig persoon op.") && message.delete();

    var kiesEmbed = new discord.MessageEmbed()
        .setTitle("Maak een keuze...")
        .setColor("PURPLE")
        .addField(`Goedkeuren:`, '✅', false)
        .addField(`Afwijzen:`, "❌", false);

    var redenEmbed = new discord.MessageEmbed()
        .setTitle("Vertel een Reden:")
        .setColor("PURPLE")
        .addField(`Reden:`, 'Geef een reden op...', false);

        const filter = m => m.content;

    message.channel.send(kiesEmbed).then(async msg => {

        message.delete();

        var emoji = await promptMessage(msg, message.author, 60, ["✅", "❌"]);

        if (emoji === "✅") {

            message.channel.send(redenEmbed).then(msg => msg.delete({ timeout: 10000 }));

            message.channel.awaitMessages(filter, {max:1, time: 10000}).then(collected => { 

                var redenGoed = collected.first();

                var antwoordGoed = new discord.MessageEmbed()
                    .setTitle("Goedgekeurd")
                    .setColor("GREEN")
                    .addField("Wie:", `${unbanUser}`, false)
                    .addField("Reden:", `${redenGoed}`, false);

                message.channek.send(`${unbanUser}`)
                message.channel.send(antwoordGoed);
                message.channel.bulkDelete(1);
                message.channel.setTopic(`**Persoon**: ${unbanUser} **Status**: Goedgekeurd`);


            })

        } else if (emoji === "❌") {

            message.channel.send(redenEmbed).then(msg => msg.delete({ timeout: 10000 }));

            message.channel.awaitMessages(filter, {max:1, time: 10000}).then(collected => { 

                var redenslecht = collected.first();

                var antwoordAf = new discord.MessageEmbed()
                    .setTitle("Afgewezen")
                    .setColor("GREEN")
                    .addField("Wie:", `${unbanUser}`, false)
                    .addField("Reden:", `${redenslecht}`, false);

                message.channek.send(`${unbanUser}`)
                message.channel.send(antwoordAf);
                message.channel.bulkDelete(1);
                message.channel.setTopic(`**Persoon**: ${unbanUser} **Status**: Afgewezen ❌`);


            })

        }




    })


} 



module.exports.help = {
    name: "uitslag"
}

