const {EmbedBuilder} = require('discord.js')

exports.run = async (client, message, args) => {

let animEmotes = [], staticEmotes = [];
message.guild.emojis.cache.forEach((x) => {
x.animated ? animEmotes.push(`<a:${x.name}:${x.id}>`) : staticEmotes.push(`<:${x.name}:${x.id}>`);
})

const msg = new EmbedBuilder()
.setTimestamp()
.setColor('White')
.setTitle(`${message.guild.name}, Sunucusunun emojileri. \n\n `)
.setDescription(`Hareketli emojiler : ${animEmotes} \n\n Hareketsiz emojiler : ${staticEmotes}`)
message.reply({embeds : [msg]}).catch(error => {message.reply('Bir hata oluştu emojileri atamıyorum.')})

    };
exports.conf = {
  aliases: ['emojiler']
};

exports.help = {
  name: "emojiler"
};