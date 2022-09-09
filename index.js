const { Client, GatewayIntentBits, Partials, EmbedBuilder } = require("discord.js");
const config = require("./config.js");
const db = require("croxydb")
const client = new Client({
  partials: [
    Partials.Message, // for message
    Partials.Channel, // for text channel
    Partials.GuildMember, // for guild member
    Partials.Reaction, // for message reaction
    Partials.GuildScheduledEvent, // for guild events
    Partials.User, // for discord user
    Partials.ThreadMember, // for thread member
  ],
  intents: [
    GatewayIntentBits.Guilds, // for guild related things
    GatewayIntentBits.GuildMembers, // for guild members related things
    GatewayIntentBits.GuildBans, // for manage guild bans
    GatewayIntentBits.GuildEmojisAndStickers, // for manage emojis and stickers
    GatewayIntentBits.GuildIntegrations, // for discord Integrations
    GatewayIntentBits.GuildWebhooks, // for discord webhooks
    GatewayIntentBits.GuildInvites, // for guild invite managing
    GatewayIntentBits.GuildVoiceStates, // for voice related things
    GatewayIntentBits.GuildPresences, // for user presence things
    GatewayIntentBits.GuildMessages, // for guild messages things
    GatewayIntentBits.GuildMessageReactions, // for message reactions things
    GatewayIntentBits.GuildMessageTyping, // for message typing things
    GatewayIntentBits.DirectMessages, // for dm messages
    GatewayIntentBits.DirectMessageReactions, // for dm message reaction
    GatewayIntentBits.DirectMessageTyping, // for dm message typinh
    GatewayIntentBits.MessageContent, // enable if you need message content things
  ],
});

module.exports = client;
const Discord = require("discord.js")
const { ButtonBuilder, ChannelType, DiscordEmbedBuilder, PermissionsBitField, ButtonStyle, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType, SelectMenuBuilder, } = require("discord.js");
require("./events/message.js")
require("./events/ready.js")
client.on('interactionCreate', async (interaction) => {
	if (!interaction.isButton()) return;
  let message = await interaction.channel.messages.fetch(interaction.message.id)
  if(interaction.customId == "evet") {
const db = require("croxydb")
db.push(`evet_${interaction.message.id}`, interaction.user.id)
interaction.reply({content: "Başarıyla Oyunu **Evet** Olarak Verdin!", ephemeral: true})

const evet = db.get(`evet_${interaction.message.id}`).length;
const hayir = db.get(`hayir_${interaction.message.id}`).length;
const aciklama = db.get(`oylama_${interaction.message.id}`)
const embed = new EmbedBuilder()
.setTitle("Oylama Sistemi!")
.setDescription(`Oylama: **${aciklama}**\n\nEvet: **${evet}**\n\nHayır: **${hayir}**`)
.setColor("#ff0000")
await message.edit({embeds: [embed]})
  }
});
client.on('interactionCreate', async (interaction) => {
	if (!interaction.isButton()) return;
  let message = await interaction.channel.messages.fetch(interaction.message.id)
  if(interaction.customId == "hayır") {
const db = require("croxydb")
db.push(`hayir_${interaction.message.id}`, interaction.user.id)
interaction.reply({content: "Başarıyla Oyunu **Hayır** Olarak Verdin!", ephemeral: true})

const evet = db.get(`evet_${interaction.message.id}`).length;
const hayir = db.get(`hayir_${interaction.message.id}`).length;
const aciklama = db.get(`oylama_${interaction.message.id}`)
const embed = new EmbedBuilder()
.setTitle("Oylama Sistemi!")
.setDescription(`Oylama: **${aciklama}**\n\nEvet: **${evet}**\n\nHayır: **${hayir}**`)
.setColor("#ff0000")
await message.edit({embeds: [embed]})
  }
});

client.on("messageCreate", async message => {
  const db = require("croxydb");

  if (await db.get(`afk_${message.author.id}`)) {
   
    db.delete(`afk_${message.author.id}`);

    message.channel.send("Artık AFK değilsiniz!");
  }

  var kullanıcı = message.mentions.users.first();
  if (!kullanıcı) return;
  var sebep = await db.get(`afk_${kullanıcı.id}`);

  if (sebep) {
    message.reply("Etiketlediğiniz kullanıcı AFK");
  }
});

client.on("messageCreate", (message) => {
  const db = require("croxydb")
  let kufur = db.fetch(`kufurengel_${message.guild.id}`)
  if(!kufur) return;
  
  if(kufur) {
  const kufurler = [
    
    "amk",
    "piç",
    "yarrak",
    "oç",
    "göt",
    "amq",
    "yavşak",
    "amcık",
    "amcı",
    "orospu",
    "sikim",
    "sikeyim",
    "aq",
    "mk"
       
  ]
  
if(kufurler.some(alo => message.content.toLowerCase().includes(alo))) {
message.delete()
message.channel.send(`Hey <@${message.author.id}>, Bu Sunucuda Küfür Engel Sistemi Aktif! `)
}
}
})
client.on("messageCreate", (message) => {
  const db = require("croxydb")
  let reklamlar = db.fetch(`reklamengel_${message.guild.id}`)
  if(!reklamlar) return;
  
  if(reklamlar) {

  const linkler = [
    
    ".com.tr",
    ".net",
    ".org",
    ".tk",
    ".cf",
    ".gf",
    "https://",
    ".gq",
    "http://",
    ".com",
    ".gg",
    ".porn",
    ".edu"
       
  ]
  
if(linkler.some(alo => message.content.toLowerCase().includes(alo))) {
message.delete()
message.channel.send(`Hey <@${message.author.id}>, Bu Sunucuda Reklam Engel Sistemi Aktif! `)
}
}
})

client.on('guildMemberAdd', async member => {
  let sayac = db.fetch(`sayac_${member.guild.id}`)
  let kalan = sayac.sayi - member.guild.memberCount || '?'
  if(!kalan) return;
  if(!sayac) return;
  
  client.channels.cache.get(sayac.kanal).send("<a:hello2:1015677337024593990> Hoşgeldin **"+member.user.username+"** Seninle Beraber `"+member.guild.memberCount+"` Kişi Olduk, `"+sayac.sayi+"` Kişi Olmamıza Son `"+kalan+"` Kişi Kaldı! <a:pepecomfyhype:1015676487250231416>")
  
});
client.on('guildMemberRemove', async member => {
  
  let sayac = db.fetch(`sayac_${member.guild.id}`)
  let kalan = sayac.sayi - member.guild.memberCount
  if(!sayac) return;
  
  client.channels.cache.get(sayac.kanal).send("<a:hello2:1015677337024593990> Görüşürüz **"+member.user.username+"** Senin Ayrılmanla Birlikte `"+member.guild.memberCount+"` Kişi Olduk! <a:peepoEvil:1015676403804540979>")
  
});

client.on('guildMemberAdd', async member => {
  
  let otorol = db.fetch(`otorol_${member.guild.id}`)
  if(!otorol) return;
  
  client.channels.cache.get(otorol.kanal).send("<a:hello2:1015677337024593990> **"+member.user.tag+"** Kullanıcı Katıldı! Gerekli Rolleri Verdim. <a:BoiGif:1015677581636419634>")
  member.roles.add(otorol.rol).catch(() => {})
  
});


client.on("messageCreate", (message) => {
  
  let saas = db.fetch(`saas_${message.guild.id}`)
  if(!saas) return;
  
  if(saas) {
  
  let selaamlar = message.content.toLowerCase()  
if(selaamlar === 'sa' || selaamlar === 'slm' || selaamlar === 'sea' || selaamlar === ' selamünaleyküm' || selaamlar === 'Selamün Aleyküm' || selaamlar === 'selam'){

message.channel.send(`<@${message.author.id}> Aleyküm selam, Hoşgeldin <a:hello2:1015677337024593990>`)
}
}
})

client.on("messageCreate", async message => {
  
  const cmd = db.fetch(`otocevap_${message.content}`)
  if(!cmd) return;
  
  if(cmd) {
    message.reply({ content: `${cmd.answer}` })
  }
  
});
client.on("guildMemberAdd", async member => {
  let ototag = db.get(`ototag_${member.guild.id}`);;
  if (ototag) return member.setNickname(`${ototag} ${member.user.username}`)
})




client.login(process.env.token)

client.on("messageCreate", async (message) => {
let kanal = db.fetch(`dosyaengel_${message.channel.id}`) 
  let log = db.fetch(`log_${message.guild.id}`) 
 
  if (message.channel.id === kanal) {
    if (message.attachments.size >= 1) {
      message.delete();
      message.channel.send("Bu kanalda dosya engel sistemi etkin!")
      client.channels.cache.get(log).send("<@"+message.author+">"+ " Adlı Kullanıcı "+ "<#"+kanal+">"+ " Kanalında Dosya Atmaya Çalıştı!")
    }
  }
});
   
  client.on("messageCreate", async message => { 
    const ananınamı = db.fetch(`roletiket_${message.guild.id}`)
    if (message.content.toLowerCase() === `<@&${ananınamı}>` || message.content.toLowerCase() === `<@&${ananınamı}>` || message.content.toLowerCase() === `<@&${ananınamı}>`) {
    message.delete()
    message.channel.send(`${message.author}, bu rolü etiketleyemezsin.`)
    let log = db.fetch(`log_${message.guild.id}`) 
    client.channels.cache.get(log).send(`${message.author.tag} Adlı Kullanıcı ${ananınamı} IDli Rolü Etiketlemeye Çalıştı!`)
    }

  })
 
                        
                      
                  
                 
                 client.on('messageCreate', msg => {
                  const filtre = db.fetch(`küfürengel_${msg.guild.id}`)
                     if (filtre) {
                         const kufurler = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq",];
                         let kelimeler = msg.content.split(' ');
                         kelimeler.forEach(kelime=> {
                          if(kufurler.some(küfür => küfür === kelime))  {
                                   msg.delete();  
                                   let log = db.fetch(`log_${msg.guild.id}`) 
                                   client.channels.cache.get(log).send(`${msg.author.tag} Adlı Kullanıcı Küfür Etmeye Çalıştı!`)
                                       return msg.channel.send('Bu Sunucuda Küfür Filtresi Aktiftir.').then(msg => console.log());
                                   
                                      }
                                    })
                                }
                               }) 
   client.on("messageUpdate", (oldMessage, newMessage, msg) => {
     
     
    const filtre = db.fetch(`küfürengel_${newMessage.guild.id}`)
       if (filtre) {
           const kufurler = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq",];
           let kelimeler = newMessage.content.split(' ');
           kelimeler.forEach(kelime=> {
            if(kufurler.some(küfür => küfür === kelime))  {
        
             
              newMessage.delete();
              let log = db.fetch(`log_${msg.guild.id}`) 
              client.channels.cache.get(log).send(`${msg.author.tag} Adlı Kullanıcı mesajını düzenleyerek küfür çalıştı`) 
                         return newMessage.channel.send('Bu Sunucuda Küfür Filtresi Aktiftir.').then(msg => console.log());
                        
             
             }
           })
       }
      }) 
     
      client.on("messageCreate", msg => {
       let i = db.fetch(`reklam_${msg.guild.id}`)
          if (i == 'acik') {
              const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
              if (reklam.some(word => msg.content.includes(word))) {
                
                        msg.delete();
                        let log = db.fetch(`log_${msg.guild.id}`) 
                        client.channels.cache.get(log).send(`${msg.author.tag} Adlı Kullanıcı Reklam Yapmaya Çalıştı`)
                          return msg.channel.send('**Bu Sunucuda** `Reklam Engelle`** Aktif Reklam Yapmana İzin Vermem İzin Vermem ? !**').then(msg => console.log);
          

                }
              }
          })
        
       
            
          
         
       

client.on('interactionCreate', async interaction => {
            let butonrol = db.fetch(`buton_rol${interaction.message.id}`)
          if(!butonrol) return;
          if (!interaction.isButton()) return;
          if(interaction.customId === "rol") {
              if(!interaction.member.roles.cache.has(butonrol)) { 
              interaction.member.roles.add(butonrol)
            interaction.reply({content: "Rol Başarıyla Verildi!", ephemeral: true})
             } else {
               
              interaction.member.roles.remove(butonrol)
            interaction.reply({content: "Rol Başarıyla Alındı!", ephemeral: true})
          }
            }
          })




client.on("messageCreate", async (message) => {
    const db2 = require("croxydb")
    const prefix = config.prefix
    if (message.author.bot) return;
    db2.add(`point_${message.guild.id}${message.author.id}`, 5)
 
})
client.on("messageCreate", message => {
const db = require("croxydb")
    let varmi = db.fetch(`rol_${message.guild.id}`) || {puan: "300000000000", rol: "burayı hiç bir türlü ellemeyin."}
    let puan = varmi.puan
    let rol = varmi.rol 
    let seviye = db.fetch(`point_${message.guild.id}${message.author.id}`)
    let log = db.fetch(`log_${message.guild.id}`)
       if (seviye == puan) {
message.channel.send("Başarıyla **"+ puan + "** Puanına Ulaştın ve Belirtilen Rol Sana Verildi.")
message.guild.members.cache.get(message.author.id).roles.add(rol)
client.channels.cache.get(log).send("<@"+message.author + "> Adlı Kullanıcı " + puan + " Puanına Ulaştı Ve <@&"+rol+"> Rolü Verildi.")
db.add(`point_${message.guild.id}${message.author.id}`, 5)     
}
    
    })




client.on("ready", async () => {
   const moment = require("moment") 
   require("moment-duration-format")
   moment.locale("tr")
  setInterval(async () => {
    client.guilds.cache.map(async guild => {
      guild.channels.cache.map(async channel => {
        let data = db.get(`cekilis.${guild.id}_${channel.id}`);
        if (data) {
          let time = Date.now() - data.zaman;
          let sure = data.sure;
let kanal = guild.channels.cache.get(data.kanalid);
kanal.messages.fetch(data.mesajid).then(async mesaj => {
  let toplam = data.toplam
            })

          if (time >= sure) {
            
            let win = client.channels.cache.get(data.kanalid)
            if(win){
              win = await win.messages.fetch(data.mesajid).then(a => a.reactions.cache.get("🎉").users.fetch())
            } 
           if(win){
            let toplam = data.toplam
             
            let won = []
            let winner = []

            for(let i = 0; i < toplam; i += 1){
          await client.channels.cache.get(data.kanalid).messages.fetch(data.mesajid).then(a => a.reactions.cache.get("🎉").users.fetch()).then(a => a.map(u => {
            if (!u.bot) {
            won.push("<@"+ u.id + ">");
            db.push(`rerollusers_${data.mesajid}`, u.id);
            }}))

           let kazanan = won[Math.floor(Math.random() * won.length)]

            if(!winner.map(cs => cs).includes(kazanan))
            winner.push(kazanan)
            }
              
           
            
      
            kanal.messages.fetch(data.mesajid).then(async mesaj => {
              const Discord = require("discord.js")
             const row = new Discord.ActionRowBuilder()
             .addComponents(
             new Discord.ButtonBuilder()
               .setLabel("Reroll")
               .setStyle(Discord.ButtonStyle.Success)
               .setCustomId("reroll")
             )
              const embed = new EmbedBuilder()
                .setTitle(data.odul)
               .setColor("#5865f2")
                .setTimestamp()
              .setDescription(`
Sona Erdi: <t:${Math.floor(Date.now() /1000)}:R> (<t:${Math.floor(Date.now() /1000)}:f>)
Düzenleyen: <@${data.hosted}>
Kazanan: ${winner.join(", ")}`)
            mesaj.edit({embeds: [embed], components: [row]})  
     
             if(winner.join(", ")){
            kanal.send(`Tebrikler ${winner} **${data.odul}** Kazandın!`)
            db.delete(`cekilis.${guild.id}_${channel.id}`);
            db.set(`son_${guild.id}_${channel.id}`, data.mesajid)
        
             } else {
                  db.delete(`cekilis.${guild.id}_${channel.id}`);
                 
                const embed = new EmbedBuilder()
                .setTitle(data.odul)
               .setColor("#5865f2")
              .setDescription(`
Sona Erdi: <t:${Math.floor(Date.now() /1000)}:R> (<t:${Math.floor(Date.now() /1000)}:f>)
Düzenleyen: <@${data.hosted}>
Kazanan: Bilinmiyor`) 
mesaj.edit({embeds: [embed], components: []})
          
             }
                    })                                           
          
          }
        }
        }
      });
    });
  }, 5000);
});
client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === "reroll") {
      let sahip = db.fetch(`cekilis.${interaction.guild.id}_${interaction.message.id}`)
      if(interaction.user.id !== sahip) return interaction.reply({content: `Bu butonu sadece çekilişi düzenleyen (<@${sahip}>) kullanabilir`, ephemeral: true})
        let data = db.get(`rerollusers_${interaction.channel.id}`)
          let kazanan = db.get(`rerollusers_${interaction.message.id}`)[
      Math.floor(Math.random() * db.get(`rerollusers_${interaction.message.id}`).length)
    ]

                    interaction.reply(`Tebrikler <@${kazanan}> Yeni Kazanan Sensin!`)
                  
                
            }
        })
        client.on('interactionCreate', async interaction => {
          if (!interaction.isButton()) return;
          if (interaction.customId === "rerolls") {
            let sahip = db.fetch(`cekilis.${interaction.guild.id}_${interaction.message.id}`)
            if(interaction.user.id !== sahip) return interaction.reply({content: `Bu butonu sadece çekilişi düzenleyen (<@${sahip}>) kullanabilir`, ephemeral: true})
              let data = db.get(`rerollusers_${interaction.channel.id}`)
                let kazanan = db.get(`kullanıcı_${interaction.message.id}`)[
            Math.floor(Math.random() * db.get(`kullanıcı_${interaction.message.id}`).length)
          ]
      
                          interaction.reply(`Tebrikler <@${kazanan}> Yeni Kazanan Sensin!`)
                        
                      
                  }
              })





  
       
const modal = new ModalBuilder()
.setCustomId('form')
.setTitle('CoT - Destek Sistemi!')
  const a1 = new TextInputBuilder()
  .setCustomId('sebep')
  .setLabel('Destek Açma Sebebiniz?')
  .setStyle(TextInputStyle.Paragraph) 
  .setMinLength(2)
  .setPlaceholder('Destek Oluşturma Sebebiniz Nedir?')
  .setRequired(true)
  const row = new ActionRowBuilder().addComponents(a1);
  
  modal.addComponents(row);
client.on('interactionCreate', async (interaction) => {

	if(interaction.customId === "ticket"){
    await interaction.showModal(modal);
	}
})  

const mod = new ModalBuilder()
.setCustomId('eklemenu')
.setTitle('CoT - Destek Sistemi!')
  const e = new TextInputBuilder()
  .setCustomId('uyeid')
  .setLabel('Kullanıcı ID')
  .setStyle(TextInputStyle.Paragraph) 
  .setMinLength(10)
  .setPlaceholder('Eklemek istediğiniz kullanıcı ID girin.')
  .setRequired(true)
  const row2 = new ActionRowBuilder().addComponents(e);
  
  mod.addComponents(row2);
client.on('interactionCreate', async (interaction) => {

	if(interaction.customId === "ekle"){
    await interaction.showModal(mod);
	}
})  

const mod2 = new ModalBuilder()
.setCustomId('eklemenu2')
.setTitle('CoT - Destek Sistemi!')
  const a = new TextInputBuilder()
  .setCustomId('cikarid')
  .setLabel('Kullanıcı ID')
  .setStyle(TextInputStyle.Paragraph) 
  .setMinLength(10)
  .setPlaceholder('Çıkarmak istediğiniz kullanıcı ID girin.')
  .setRequired(true)
  const row3 = new ActionRowBuilder().addComponents(a);
  
  mod2.addComponents(row3);
client.on('interactionCreate', async (interaction) => {

	if(interaction.customId === "çıkar"){
    await interaction.showModal(mod2);
	}
})  
client.on('interactionCreate', async interaction => {
  if (interaction.type !== InteractionType.ModalSubmit) return;
  if (interaction.customId === 'form') {
    const sebep = interaction.fields.getTextInputValue('sebep')
  
const row = new ActionRowBuilder()
.addComponents( 
  new SelectMenuBuilder()
  .setCustomId('del')
.setPlaceholder('Bilet Menüsü!')
.addOptions([
{
label: 'Bileti Sil',
description: 'Kanalı silersin!',
emoji: "1002538609003470898",
value: 'delete',
},
{
label: "Panel",
description: "Üye Ekleme Çıkarma Menüsü.",
emoji: "984924491777998938",
value: "panel"

}
])
);

  let data3 =  db.get("destek"+ interaction.guild.id)
  let roleStaff = interaction.guild.roles.cache.get(data3.rolID)
  let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
              if (DejaUnChannel) return interaction.reply({content: 'Sunucuda zaten açık bir biletiniz var.', ephemeral: true})
              interaction.guild.channels.create({
              name: `ticket-${interaction.user.username}`,
                type: ChannelType.GuildText,
        
                permissionOverwrites: [
                  {   
                      id: interaction.guild.id,
                      deny: [PermissionsBitField.Flags.ViewChannel]
                  },
                  {
                      id: interaction.user.id,
                      allow: [PermissionsBitField.Flags.ViewChannel]
                  },
                  {
                      id: roleStaff,
                      allow: [PermissionsBitField.Flags.ViewChannel]
                  }
              ]
            })
            
                  
                  .then((c)=>{
                 
                      const i1 = new EmbedBuilder()
                      .setTitle('CoT - Destek Sistemi')
                      .setDescription(`Kullanıcı Destek Talebini **${sebep}** Sebebiyle Oluşturdu!\n\nDestek Oluşturan: ${interaction.user}`)
                      .setColor(0x0099ff)
                      c.send({embeds: [i1], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                      interaction.reply({content: `Biletiniz başarıyla açıldı. <#${c.id}>`, ephemeral: true})
                  })
          
          }
        })
        client.on('interactionCreate', async interaction => {
          if (!interaction.isSelectMenu()) return;
          if(interaction.customId === "del") {
            if (interaction.values[0] == "panel") {
              await interaction.deferUpdate()
const row2 = new ActionRowBuilder()
.addComponents(
new ButtonBuilder()
.setLabel("Ekle")
.setStyle(ButtonStyle.Success)
.setCustomId("ekle"),
new ButtonBuilder()
.setLabel("Çıkar")
.setStyle(ButtonStyle.Danger)
.setCustomId("çıkar"),
new ButtonBuilder()
.setLabel("Sil")
.setStyle(ButtonStyle.Secondary)
.setCustomId("sil")
)
const embed = new EmbedBuilder()
.setTitle("CoT - Kullanıcı Paneli!")
.setDescription("Aşağıdaki butonlardan üye ekleyebilir veya çıkarabilirsin!")
.setColor(0x0099ff)
let message = await interaction.channel.messages.fetch(interaction.message.id)
await message.edit({embeds: [embed], components: [row2]})
          }
        }
        })
        client.on('interactionCreate', async interaction => {
          if (interaction.type !== InteractionType.ModalSubmit) return;
          if (interaction.customId === 'eklemenu') {
            const id = interaction.fields.getTextInputValue('uyeid')
            const channel = interaction.channel
                channel.permissionOverwrites.create(
                  id, {ViewChannel: true}
                  
                  )
                  interaction.reply({content: `<@${id}> Adlı Kullanıcı Başarıyla Destek Talebine Eklendi!`})
                } else {
                
          }
        })
        client.on('interactionCreate', async interaction => {
          if (interaction.type !== InteractionType.ModalSubmit) return;
          if (interaction.customId === 'eklemenu2') {
            const id = interaction.fields.getTextInputValue('cikarid')
            const channel = interaction.channel
                channel.permissionOverwrites.create(
                  id, {ViewChannel: false}
                  
                  )
                  interaction.reply({content: `<@${id}> Adlı Kullanıcı Başarıyla Destek Talebinden Atıldı!`})
                } else {
               
          }
        })
        client.on('interactionCreate', async interaction => {
        if (!interaction.isSelectMenu()) return;
        if(interaction.customId === "del") {
          if (interaction.values[0] == "delete") {
            let log = db.fetch(`log_${interaction.guild.id}`)
              const channel = interaction.channel
              channel.delete();
              client.channels.cache.get(log).send(`<@${interaction.user.id}> Adlı Kullanıcı **${interaction.channel.name}** Adlı Desteği Sildi!`)
            
          }
        }
        })
        client.on('interactionCreate', async interaction => {
          if (!interaction.isButton()) return;
          if(interaction.customId === "sil") {
              let log = db.fetch(`log_${interaction.guild.id}`)
                const channel = interaction.channel
                channel.delete();
                client.channels.cache.get(log).send(`<@${interaction.user.id}> Adlı Kullanıcı **${interaction.channel.name}** Adlı Desteği Sildi!`)
              
            
          }
          })
               





  







client.on('voiceStateUpdate', (newMember) => {
  const db = require("croxydb")
  if (newMember.member.voice.channel != null && newMember.member.voice.channel.name.startsWith("Özel Oda Oluştur")) {
  newMember.guild.channels.create({name: `║👤 ${newMember.member.displayName}`, type: ChannelType.GuildVoice}).then((sesli) => {
    newMember.member.voice.setChannel(sesli.id)
db.set(`oda_${newMember.id}`, sesli.id)
db.set(`oda2_${newMember.id}`, sesli)
sesli.permissionOverwrites.create(
  newMember.guild.roles.everyone, {ViewChannel: false}
  
  )
  })
}
      }   
)

const mod60 = new ModalBuilder()
.setCustomId('eklemenu')
.setTitle('CoT - Kullanıcı Ekleme!')
  const e50 = new TextInputBuilder()
  .setCustomId('uyeid')
  .setLabel('Kullanıcı ID')
  .setStyle(TextInputStyle.Paragraph) 
  .setMinLength(10)
  .setPlaceholder('Eklemek istediğiniz kullanıcı ID girin.')
  .setRequired(true)
  const row80 = new ActionRowBuilder().addComponents(e);
  
  mod.addComponents(row2);
client.on('interactionCreate', async (interaction) => {

	if(interaction.customId === "ekle"){
    let odasiz = db.fetch(`oda_${interaction.user.id}`)
    if (!odasiz) return interaction.reply({content: "Sana Ait Bir Oda Bulamadım!", ephemeral: true})
    await interaction.showModal(mod);
	}
})  

const mod50 = new ModalBuilder()
.setCustomId('eklemenu2')
.setTitle('CoT - Kullanıcı Çıkarma!')
  const a90 = new TextInputBuilder()
  .setCustomId('cikarid')
  .setLabel('Kullanıcı ID')
  .setStyle(TextInputStyle.Paragraph) 
  .setMinLength(10)
  .setPlaceholder('Çıkarmak istediğiniz kullanıcı ID girin.')
  .setRequired(true)
  const row100 = new ActionRowBuilder().addComponents(a);
  
  mod2.addComponents(row3);
client.on('interactionCreate', async (interaction) => {

	if(interaction.customId === "çıkar"){
    let odasiz = db.fetch(`oda_${interaction.user.id}`)
    if (!odasiz) return interaction.reply({content: "Sana Ait Bir Oda Bulamadım!", ephemeral: true})
    await interaction.showModal(mod2);
	}
})  

client.on('interactionCreate', async interaction => {
  if (interaction.type !== InteractionType.ModalSubmit) return;
  if (interaction.customId === 'eklemenu2') {
      const id = interaction.fields.getTextInputValue('cikarid')
    let oda = interaction.member.voice.channel
    console.log(oda)
    oda.permissionOverwrites.create(
      id, {ViewChannel: false}      
      )
      interaction.reply("<@"+id+"> Adlı Kullanıcı Odadan Başarıyla Atıldı")
    } else {
  }
})
client.on('interactionCreate', async interaction => {
  if (interaction.type !== InteractionType.ModalSubmit) return;
  if (interaction.customId === 'eklemenu') {
      const id = interaction.fields.getTextInputValue('uyeid')
    let oda = interaction.member.voice.channel
    console.log(oda)
    oda.permissionOverwrites.create(
      id, {ViewChannel: true}      
      )
      interaction.reply("<@"+id+"> Adlı Kullanıcı Odaya Eklendi")
    } else {
  }
})





client.on('messageDelete', message => {

  db.set(`snipe.mesaj.${message.guild.id}`, message.content)
  db.set(`snipe.id.${message.guild.id}`, message.author.id)

})


