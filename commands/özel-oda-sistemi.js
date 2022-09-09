const {EmbedBuilder, ChannelType} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
message.guild.channels.create({name: "Özel Oda Oluştur", type: ChannelType.GuildVoice})
message.reply("Sesli Kanal Başarıyla Oluşturuldu.")
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "özel-oda-sistemi"
};