const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {
let promosyon = args.slice(0).join(" ")
if (!promosyon) return message.reply("Lütfen bir promosyon gir!")
let varmi = db.fetch(`promo_${promosyon}_${message.guild.id}`)
if (!varmi) return message.reply("Böyle bir promosyon bulamadım :(")
message.reply("Promosyonu Başarıyla Sildim.")
db.delete(`promo_${promosyon}_${message.guild.id}`)


};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "promosyon-sil"
};