const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
const config = require("../config.js")
exports.run = async (client, message, args) => {
    const topgg = config.topgg
    const davet = config.botdavet
    const destek = config.desteksunucusu
    const value = args[0]

  const embed = new diskord.EmbedBuilder()
  .setTitle("Kategoriler")
  .setDescription(`<:kmDeveloper:1012023785878208542> **r!yardım ayarlamalı |** Ayarlamalı yetkili komutlarını gösterir.\n\n<:kmDeveloper:1012023785878208542> **r!yardım eğlence |** Eğlence Komutlarını Gösterir.\n\n<:kmDeveloper:1012023785878208542> **r!yardım kullanıcı |** Kullanıcı Komutlarını Gösterir.\n\n<:kmDeveloper:1012023785878208542> **r!yardım yetkili |** Yetkili Komutlarını Gösterir.\n\n<:kmDeveloper:1012023785878208542> **r!yardım bot |** Bot Komutlarını Gösterir\n\n<:kmDeveloper:1012023785878208542> **r!yardım chatguard |** Chat guard komutlarını gösterir\n\n<:kmDeveloper:1012023785878208542> **r!yardım-ekonomi |** Ekonomi komutlarını gösterir\n\n<:kmDeveloper:1012023785878208542>**r!yardım-kayıt |** Kayıt sisteminin komutlarını gösterir \n\n<:zil:1012030406347997315> **CoT Bağlantılar** \n[Botu Sunucuna Ekle](${davet})\n[Destek Sunucum](${destek})\n[Bota Oy Ver](${topgg}) \n\n**Unutma bota yetki vermezsen çoğu komutları çalışmaz!**`)
  .setImage (`https://cdn.discordapp.com/attachments/1004369361387139142/1015675086289780746/IMG_1291.gif`)
  if(!args[0]) return message.channel.send({embeds: [embed]})
if(value === "bot") {
const embed = new diskord.EmbedBuilder()
.setTitle("<:blurple_bot:1012023860138360832> Ana Komutlar <:blurple_bot:1012023860138360832>")
.setDescription("**r!istatistik |** Botun istatistiklerini gösterir\n**r!linkler |** Botla Alakalı Linkleri Alırsınız\n**r!oyver |** Botun oy verme linkini ve birkaç bilgi alırsınız\n**r!ping |** Botun pingini gösterir")
.setImage(`https://cdn.discordapp.com/attachments/1004369361387139142/1015675086289780746/IMG_1291.gif`)
message.channel.send({embeds: [embed]})
}
if(value === "yetkili") {
const embed = new diskord.EmbedBuilder()
.setTitle("<:blurple_bot:1012023860138360832> Yetkili Komutları <:blurple_bot:1012023860138360832>")
.setDescription("**r!ban |** Etiketlediğiniz kişiyi sunucudan yasaklar\n**r!ban-list |** Sunucundan Banlanan üyeleri gösterir\n**r!forceban |** ID'sini belirttiğiniz kullanıcıyı sunucudan yasaklar\n**r!kanal-açıklama |** Bulunduğunuz kanalın konusunu/açıklamasını değiştirir\n**r!kick |** İstediğiniz kişiyi sunucudan atar\n**r!rol-al** | Belirtilen kullanıcıdan istediğiniz rolü alır\n**r!rol-oluştur** | Yazılan Adda Rol Oluşturulur\n**r!rol-ver** | Belirtilen kullanıcıya istediğiniz rolü verir\n**r!a** | Belirtilen kullanıcaya abone rolü verir\n**r!abone-rol** | Abone rolünü ayarlarsınız\n**r!abone-yetkilisi** | Abone yetkilisi ayarlarsınız\n**r!öneri-log** | Önerlileri atacak kanal\n**r!promosyon-oluştur** | Promosyon oluşturur kod ile rol alırsınız\n**promosyon-sil** | Promosyon silersiniz\n**r!ticket-log |** Ticket log ayarlar\n**r!ticket-yetkilisi |** Ticket yetkilisi ayarlarsınız\n**r!ticket-oluştur |** Embed ve buton yazısı ayarlayıp ticket açma mesajı gönderirsiniz\n**r!buton-rol |** Butonla rol alma ayarlarsınız\n**r!sesli-çek |** Etiketlediğiniz kullanıcıyı yanınıza çeker\n**r!temizle |** Belirtilen miktar mesajı siler\n**r!unban |** Belirtilen kişinin banını kaldırır\n**r!slowmode** | Kanalda yavaşmod'u ayarlarsınız\n**r!seviye-log |** Seviye log ayarlarsınız\n**r!seviye-aç |** Seviye sistemini açarsınız\n**r!seviye-kapat |** Seviye sistemini kapatırsınız\n**r!başlat |** Çekiliş başlatırsınız\n**r!bitir |** Çekiliş bitirirsiniz\n**r!reroll |** Yeni çekiliş kazananı belirler")
.setImage(`https://cdn.discordapp.com/attachments/1004369361387139142/1015675086289780746/IMG_1291.gif`)
message.channel.send({embeds: [embed]})
}
if(value === "eğlence") {
const embed = new diskord.EmbedBuilder()
.setTitle("<:blurple_bot:1012023860138360832> Eğlence Komutları <:blurple_bot:1012023860138360832>")
.setDescription("**r!alkış |** Bot Alkışlar\n**r!aşkölçer |** Bot etiketlediğiniz kişiye karşı olan aşkını ölçer\n**r!emojiyazı |** Bot mesajınızı emoji haline getirir\n**r!hackle |** Etiketlediğiniz kişiyi hackler\n**r!kaçcm |** Malafatının uzunluğunu söyler\n**r!sarıl |** Etiketlediğiniz kişiye sarılırsınız\n**r!slot |** Slots oyununu oynar\n**r!şanslısayım |** Bot Şanslı sayınızı tahmin eder")
.setImage(`https://cdn.discordapp.com/attachments/1004369361387139142/1015675086289780746/IMG_1291.gif`)
message.channel.send({embeds: [embed]})
}
if(value === "kullanıcı") {
const embed = new diskord.EmbedBuilder()
.setTitle("<:kmDeveloper:1012023785878208542> Kullanıcı Komutları <:kmDeveloper:1012023785878208542>")
.setDescription("**r!afk |** AFK olunca seni etiketleyen kişiye sebebini yazar\n**r!atatürk |** Rastgele bir Atatürk fotoğrafı gönderir\n**r!avatar/r!av |** Etiketlediğiniz kişinin avatarını gösterir\n**r!emojiler |** Sunucuda bulunan emojileri gösterir\n**r!hesapla |** Belirtilen işlemi yapar\n**r!kurucu-kim |** Sunucunun kurucusunu söyler\n**r!minecraft |** Belirlediğiniz Minecraft sunucusunun bilgilerini verir\n**r!not-al |** Bot not alır\n**r!notum |** Notunuzu gösterir\n**r!radyo |**  Sesli kanaldan Radyo dinlersiniz\n**r!sunucubilgi |** Bulunduğun sunucu hakkında bilgi verir\n**r!promosyon-kullan** | Saklanan kodu bulabilirseniz özel rol alırsınız\n**r!özel-oda-sil |** Özel odanızı silersiniz\n**r!snipe |** En son silinen mesajı gösterir")
.setImage(`https://cdn.discordapp.com/attachments/1004369361387139142/1015675086289780746/IMG_1291.gif`)
message.channel.send({embeds: [embed]})
}
if(value === "ayarlamalı") {
const embed = new diskord.EmbedBuilder()
.setTitle("<:blurple_bot:1012023860138360832> Ayarlamalı Komutları <:blurple_bot:1012023860138360832>")
.setDescription("**r!küfürengel |** Küfür engelleme sistemini ayarlamanızı sağlar\n**r!reklamengel |** Reklam engelleme sistemini ayarlamanızı sağlar\n**r!oto-cevap |** Belirtilen yazıyı biri yazarsa bot belirtilen cevabı vermeye ayarlanır\n**r!otorol |** Sunucuya girenlere verilecek olan otorolü ayarlar\n**r!ototag |** Bot belirtilen tagı sunucuya girenlerin isimlerinin başına koyar\n**r!sa-as |** Oto sa-ası ayarlarsınız\n**r!sayaç |** Sayacı ayarlarsınız")
.setImage(`https://cdn.discordapp.com/attachments/1004369361387139142/1015675086289780746/IMG_1291.gif`)
message.channel.send({embeds: [embed]})
}
if(value === "chatguard") {
const embed = new diskord.EmbedBuilder()
.setTitle("<:blurple_bot:1012023860138360832> Chat Guard Komutları <:blurple_bot:1012023860138360832>")
.setDescription("**r!log |** Chat Guard log ayarlar\n**r!rol-etiket-engel |** Rol etiket atılırsa atan kişinin mesajını silir")
.setImage(`https://cdn.discordapp.com/attachments/1004369361387139142/1015675086289780746/IMG_1291.gif`)
message.channel.send({embeds: [embed]})
}
}
exports.conf = {
  aliases: []
}

exports.help = {
  name: "yardım"
}