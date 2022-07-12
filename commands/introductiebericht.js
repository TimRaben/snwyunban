const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var welkomEmbed = new discord.MessageEmbed()
            .setColor("YELLOW")
            .setTitle("Introductie - Spijkenisse Roleplay")
            .setDescription('Hallo! Wij zijn Spijkenisse Roleplay, wij zijn een leuke en gezellig Roleplay Server, wij proberen het vrijwel onmogelijke in onze Roleplay terug te laten komen, heb je bijvoorbeeld altijd al je bezig willen houden in de grote ondernemers wereld? hier kan je dat helemaal uitleven! wij hebben een erg geavanceerd systeem.\n\nWij als Tean doen er alles aan om jou een goed gevoel te geven op onze Server en dat jij hier met plezier bent, je kan voor banen Solliciteren, je kan zelf een bedrijf aanvragen, je kan een Gang joinen of creëren, alles kan!\n\nZoals wij al hadden vermeld doen wij er alles aan om de speelervaring van onze Spelers leuk te maken, daardoor zullen wij ook ingrijpen bij dingen als Staffteam.');

        return message.channel.send(welkomEmbed);

}

module.exports.help = {
    name: "introductieembed"
}