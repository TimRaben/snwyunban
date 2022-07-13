const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var guild = '845678808857051146';
    var user = args(1);
    guild.members.unban(user);
    let successfullyembed = new Discord.MessageEmbed()
      .setTitle(`${member.tag} is succesvol geunbanned`)
      .setColor("#2C2F33");

    message.channel.send(successfullyembed);
  }



module.exports.help = {
    name: "uitslag"
}

