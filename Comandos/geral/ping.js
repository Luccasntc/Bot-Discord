const Discord = require("discord.js");

module.exports = {
    name: "ping",
    description: " Veja o ping do bot",
    type: Discord.ApplicationCommandType.ChatInput,
    
    run: async(client, interaction) => {
        let embed = new Discord.EmbedBuilder()
        .setDescription(`Oi ${interaction.user}, ping = \`${client.ws.ping}\``)
        .setColor("Green");
        
        interaction.reply({ embeds: [embed] })
  }
}