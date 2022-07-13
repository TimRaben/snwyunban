const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "996332158627106866";

    var userName = message.author.username;
    var user = message.author;
    var userDiscriminator = message.author.discriminator;

    var meldingBestaat = false;

    message.guild.channels.cache.forEach(channel => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
            meldingBestaat = true;

            message.reply(":x: || Je hebt al een unban verzoek gedaan!");

            return;

        }


    });

    if (meldingBestaat) return;

    var meldinggemaaktembed = new discord.MessageEmbed()
        .setTitle("Unban Verzoek - Snwy Discord")
        .setAuthor("Snwy")
        .setDescription("Er word een verzoek aangemaakt, een ogenblik geduld alstublieft.")
        .setFooter("Je word getagged in een kanaal...");

    message.channel.send(meldinggemaaktembed)

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        VIEW_CHANNEL: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true
                    });


                    var vraag1 = new discord.MessageEmbed()
                        .setTitle("Unban Aanvraag - Snwy")
                        .setColor("RED")
                        .setDescription("Wat is je Discord Naam + Tag")
                    
                    var vraag2 = new discord.MessageEmbed()
                        .setTitle("Unban Aanvraag - Snwy")
                        .setColor("RED")
                        .setDescription("Wanneer ben je ongeveer verbannen?");
                    
                    var vraag3 = new discord.MessageEmbed()
                        .setTitle("Unban Aanvraag - Snwy")
                        .setColor("RED")
                        .setDescription("Waarom ben je verbannen?");

                    var vraag4 = new discord.MessageEmbed()
                        .setTitle("Unban Aanvraag - Snwy")
                        .setColor("RED")
                        .setDescription("Wat is volgens jou de reden van je verbanning?");

                    var vraag5 = new discord.MessageEmbed()
                        .setTitle("Unban Aanvraag - Snwy")
                        .setColor("RED")
                        .setDescription("Waarom wil je weer in de discord Server?");

                    var vraag6 = new discord.MessageEmbed()
                        .setTitle("Unban Aanvraag - Snwy")
                        .setColor("RED")
                        .setDescription("Wat ga je anders doen in tegenstelling tot de vorige keer?");

                    var vraag7 = new discord.MessageEmbed()
                        .setTitle("Unban Aanvraag - Snwy")
                        .setColor("RED")
                        .setDescription("Ben je al eens eerder verbannen op onze Server?");

                    var vraag8 = new discord.MessageEmbed()
                        .setTitle("Unban Aanvraag - Snwy")
                        .setColor("RED")
                        .setDescription("Wil je nog iets toevoegen?");


                    settedParent.send(vraag1);

                    settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                        var antwoord1 = antwoord.first();;
                        settedParent.send(vraag2);
                    
                        settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                            var antwoord2 = antwoord.first();;
                            settedParent.send(vraag3);
                        
                        settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                var antwoord3 = antwoord.first();;
                                settedParent.send(vraag4);

                                settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                    var antwoord4 = antwoord.first();;
                                    settedParent.send(vraag5);

                                    settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                        var antwoord5 = antwoord.first();;
                                        settedParent.send(vraag6);

                                        settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                            var antwoord6 = antwoord.first();;
                                            settedParent.send(vraag7);

                                            settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                                var antwoord7 = antwoord.first();;
                                                settedParent.send(vraag8);

                                                settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                                    var antwoord8 = antwoord.first();;
                                                   

                                var melding = new discord.MessageEmbed()
                                    .setTitle("Snwy Discord - Unban Aanvraag")
                                    .setColor("RED")
                                    .setDescription(`Zie hieronder het verzoek.\n\n**Discord Naam + Tag**\n${antwoord1}\n**Datum Verbanning (ongeveer):**\n${antwoord2}\n**Reden van Verbanning:**\n${antwoord3}\n**Volgens de Persoon de Reden:**\n${antwoord4}\n**Waarom wilt de persoon weer in de Server:**\n${antwoord5}\n**Wat ga je doen in tegenstelling tot de vorige keer:**\n${antwoord6}\n**Ben je al eerder verbannen op onze Server:**\n${antwoord7}\n**Toevoegingen:**\n${antwoord8}`)


                                var channel = message.guild.channels.cache.get("996337002943365121");
                                channel.send(melding)
                                


                                settedParent.bulkDelete(6).then(
                                    settedParent.send("U heeft succesvol een Verzoek ingediend hij wordt zo spoedig mogelijk bekeken en beoordeelt, u hoort van ons.")
                                    
                                )
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})



                })
}


    module.exports.help = {
        name: "unban",
        aliases: "status",
        description: "Geeft al de verschillende commands",
        category: "Informatie",
    }

    