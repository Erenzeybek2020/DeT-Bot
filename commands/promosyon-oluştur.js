const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
let rol = message.mentions.roles.first()
let promosyon = args.slice(1).join(" ")
if (!rol) return message.reply("Lütfen bir rol etiketle!")
if (!promosyon) return message.reply("Lütfen bir promosyon gir!")
message.reply("Promosyon Başarıyla Oluşturuldu.")
db.set(`promo_${promosyon}_${message.guild.id}`, rol.id)


};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "promosyon-oluştur"
};