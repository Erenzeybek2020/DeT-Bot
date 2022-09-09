const Discord = require('discord.js')
const db = require('croxydb');


exports.run = async (client, message, args) => {
  
  const embed = new Discord.EmbedBuilder()
  .setTitle("CoT - Yardım Menüsü!")
  .addFields({ name: 'r!cf', value: `Kumar Oynarsın!`, inline: true})
  .addFields({ name: 'r!çal', value: "Birinden Para Çalarsın!", inline: true})
  .addFields({ name: 'r!çalış', value: `Çalışırsın!`, inline: true})
  .addFields({ name: 'r!banka', value: `Bankadaki Parana Bakarsın!`, inline: true})
  .addFields({ name: 'r!günlük', value: `Günlük Harçlık Alırsın!`, inline: true})
  .addFields({ name: 'r!para-gönder', value: `Birine Para Gönderirsin!`, inline: true})
  .addFields({ name: 'r!bakiye', value: `Kendi Parana Bakarsın!`, inline: true})
  .addFields({ name: 'r!satın-al', value: `Marketten Bir Şey Satın Alırsın!`, inline: true})
  .addFields({ name: 'r!market', value: `Markete Bakarsın!`, inline: true})
  .addFields({ name: 'r!para-çek', value: `Bankadan Para Çekersin!`, inline: true})
  .addFields({ name: 'r!para-yatır', value: `Bankaya Para Yatırırsın!`, inline: true})
  .setImage(`https://cdn.discordapp.com/attachments/1004369361387139142/1015675086289780746/IMG_1291.gif`)
  .setColor("#ff0000")
  message.channel.send({embeds: [embed]})
}
exports.conf = {
  
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'yardım-ekonomi'
}