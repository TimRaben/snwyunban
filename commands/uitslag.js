const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var categoryID = "996332158627106866";

    var unbanUser = message.guild.member(message.mentions.users.first());

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(":x: **||** Jij bent niet gemachtigd om een beoordeling te geven.") && message.delete();

    if (!unbanUser) return message.reply(":x: **||** Geef een geldig persoon op.") && message.delete();

    var kiesEmbed = new discord.MessageEmbed()
        .setTitle("Maak een keuze...")
        .setColor("PURPLE")
        .addField(`Goedkeuren:`, '✅', false)
        .addField("Afwijzen:", "❌", false);

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

            message.channel.awaitMessages(filter, { max:1, time: 10000 }).then(collected => { 

                var redenGoed = collected.first();

                var antwoordGoed = new discord.MessageEmbed()
                    .setTitle("Goedgekeurd")
                    .setColor("GREEN")
                    .addField("Wie:", `${unbanUser}`, false)
                    .addField("Reden:", `${redenGoed}`, false);

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

async function promptMessage(message, author, time, reactions) {
    time *=1000;

    for (const reaction of reactions) {
        await message.react(reaction);
    }

    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);

}



module.exports.help = {
    name: "uitslag"
}

