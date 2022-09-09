const { EmbedBuilder } = require('discord.js')
const moment = require('moment')
moment.locale('TR')

    exports.run = (client, message, args) => {

        const member = message.mentions.members.first() || message.member
        const status = {
            online: '🟢 Çevrimiçi',
            idle: '🟡 Boşta',
            dnd: '🔴 Rahatsız Etmeyin',
            offline: '⚫ Çevrimdışı'
        }
const embed = new EmbedBuilder()
.setTitle("CoT - Kullanıcı Bilgi")
.setDescription(`Kullanıcı Adı: ${member.user.username}\n\nKullanıcı ID: ${member.id}\n\nStatus: ${status[member.presence.status]}\n\nHesap Oluşturulma Tarihi: ${moment.utc(member.user.createdAt).format('LLLL')}\n\nSunucuya Katılım Tarihi: ${moment.utc(member.joinedAt).format('LLLL')}\n\nRolleri: ${member.roles.cache.map(role => role.toString())}`)
.setColor("#ff0000")
        
        message.channel.send({embeds: [embed]})
    }
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ["kb"],
        permLevel: 0
       };
       
       exports.help = {
          name: 'kullanıcı-bilgi',
        description: 'kullanıcı bilgi verir',
        usage: 'kb'
       };