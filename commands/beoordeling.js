const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const amountStars = args[0];

    if (!amountStars || amountStars < 1 || amountStars > 5) return message.reply(":x:  **|** Geef een geldig aantal sterren op 1 t/m 5.")

    var text = args.splice(1, args.length).join(" ") || 'Geen beoordeling opgegeven.';

    var channel = message.member.guild.channels.cache.get("908711829356834886");

    var stars = "";
    for (let i = 0; i < amountStars; i++) {

        stars += ":star: ";

    } 

    const embed = new discord.MessageEmbed()
        .setTitle(`${message.author.username} heeft een beoordeling geschreven.`)
        .setColor("BLUE")
        .addField("Aantal Sterren: ", stars)
        .addField("Beoordeling: ", text)
        .setDescription('Bedankt voor het aanmaken van een Beoordeling, wij zullen hier aandachtig naar kijken om eventuele minpunten te verbeteren\n\n*Je kan een Revieuw maken doormiddel van ``spn/review (aantal sterren in getallen) (beoordeling)``*')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setFooter("Snwy • Review Systeem")
        .setTimestamp();

    message.channel.send("✅  **|** Je hebt succesvol een beoordeling gemaakt, heel erg bedankt.");

    return channel.send(embed);
    
}

module.exports.help = {
    name: "review"
}