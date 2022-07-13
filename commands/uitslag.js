const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var guilds = '845678808857051146';
    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    guilds.members.unban(user);
    let successfullyembed = new Discord.MessageEmbed()
      .setTitle(`${member.tag} is succesvol geunbanned`)
      .setColor("#2C2F33");

    message.channel.send(successfullyembed);
  }



module.exports.help = {
    name: "uitslag"
}

