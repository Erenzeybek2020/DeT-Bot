const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
const ses = "https://media.discordapp.net/attachments/1013106535720833125/1014254368834453644/RPReplay_Final1661887286.mp4"
const { joinVoiceChannel, createAudioPlayer, createAudioResource} = require('@discordjs/voice');
exports.run = async (client, message, args) => {
let sesli = db.fetch(`sesli_${message.guild.id}`)
if (!sesli) return message.reply("Sesli Kanali Ayarlamamışsın!")
let channel = sesli
setInterval(() => {
const connection = joinVoiceChannel({
   channelId: channel,
   guildId: message.guild.id,
   adapterCreator: message.guild.voiceAdapterCreator,
   selfDeaf: false
})

        const player = createAudioPlayer();
    const resource = createAudioResource(ses)

    player.play(resource);
    connection.subscribe(player);
}, 15000);
    message.reply("Bağlandım")
    
};
exports.conf = {
  aliases: []
};

exports.help = {
  name:"sese-bağlan"
};
