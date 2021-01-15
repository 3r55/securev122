const Discord = require("discord.js");
const bot = new Discord.Client();
const dateFormat = require("dateformat"); //npm i dateformat
const client = new Discord.Client();
const yt = require("ytdl-core");
const ms = require("ms");
const moment = require("moment");
const request = require("request");
const fs = require("fs");
const prefix = 'b!';
const Enmap = require('enmap')
const google = require('google-it');
const db = require('quick.db');
var youtube = ("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const getYoutubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");
const yt_api_key = "AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8";
const nekoclient = require("nekos.life");
const neko = new nekoclient();


client.on("ready", () => {
  console.log("♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔");
  console.log("By black jack"); /////BLACK JACK
  console.log("BLACK BOT");
  console.log("ALLAH AKBAR");
  console.log("♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔");
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ");
  client.user.setActivity(
    `${prefix}help | BLACK BOT IS HERE: SERVERS ${client.guilds.size}`
  ); 
  client.user.setStatus("idle"); /////by black jack
  console.log(`Logined`);
});

client.on("message", async msg => {
 
  if (msg.content === prefix + "server") {
    var w1 = msg.guild.createdAt.getFullYear();
    var w2 = msg.guild.createdAt.getMonth();
    var w3 = msg.guild.createdAt.getDate();
    let embed = new Discord.RichEmbed()
      .addField("**🆎Name server** :", msg.guild.name)
      .addField("**📷Photo server**: ", msg.guild.iconURL)
      .addField("**🆔Id server**:", msg.guild.id)
      .addField("**📅Time guild created**: ", w3 + "/" + w2 + "/" + w1)
      .addField("**👑Owner ship **: ", msg.guild.owner)
      .addField("**👥Member count**: ", msg.guild.memberCount)
      .addField("**↗️Level server**: ", msg.guild.verificationLevel)
      .addField("**🌎Region server**: ", msg.guild.region)
      .addField("**Channel counts**: ", msg.guild.channels.size)
      .addField("**Roles counts**: ", msg.guild.roles.size)
      .setColor("BLACK")
      .setFooter(`${msg.guild.name}`);
    msg.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(NoNo => {
          message.guild.unban(NoNo);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`**✅ Unbanned ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**🙄 - I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

///by black jack
client.on("message", msg => {
if (msg.content.startsWith(prefix + "year")){
    let now = new Date();
    let next = new Date(now);
    next.setFullYear(now.getFullYear() + 1);
    next.setHours(0, 0, 0, 0);
    next.setMonth(0, 1);
    let duration = next - now;
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / 1000 / 60) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    let days = Math.floor(duration / (1000 * 60 * 60 * 24));
    
    let embed = new Discord.RichEmbed()
    .setAuthor("Next Year!", msg.author.displayAvatarURL)
    .setColor("#000000")
    .setDescription(`There are **${days} days**, **${hours} hours**, **${minutes} minutes** and **${seconds} seconds** until **${next.getFullYear()}**!`)
    .setFooter(`Or, in short, ${moment.duration(next - now).humanize()}.`)
    msg.channel.send(embed)
}
})
//Best Rainbow Bot .

client.on("message", message => {
  if (message.content === prefix + "info roles") {
    if (!message.channel.guild) return;
    var roles = message.guild.roles.map(roles => `${roles.name}, `).join(" ");
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("Roles:", `**[${roles}]**`);
    message.channel.sendEmbed(embed);
  }
});


client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});
client.on("message", Black => {
  if (Black.content === "Hi") {
    Black.author.send("");
    Black.channel.send("Hello");
  }
});
client.on("message", Black => {
  if (Black.content === "ھلا") {
    Black.author.send("");
    Black.channel.send('ھلا حبیبي');
  }
});
client.on("message", Black => {
  if (Black.content === "سلاو") {
    Black.author.send("");
    Black.channel.send("Baxerbey dllakam");
  }
});
client.on("message", Black => {
  if (Black.content === "Slaw") {
    Black.author.send("");
    Black.channel.send("Baxerbey dllakam");
  }
});
client.on("message", message => {
  if (message.content.startsWith(`<@${client.user.id}>`)) {
    if (message.author.bot || message.channel.type == "dm") return;
    let mention = new Discord.RichEmbed()
      .setColor("black")
      .setDescription(
        `   **Hi I'm Black Bot i'm created by black jack my prefix ${prefix} **  
  **Support Server** [ https://discord.gg/GmSYVCQMRU ] 
  **Add bot ** [ https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975 ] 
  **Bot orders** [ • **b!help** • ]   `
      )
 
      .setImage("https://images-ext-1.discordapp.net/external/RXd_Kc0_Ji0JNg67qAZcHPUOL8o60DLt3qecFb5FuC4/https/media.discordapp.net/attachments/777510905041911819/792459601193992202/image0.gif");
    message.channel.send(mention);
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "user")) {
    var args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
    moment.locale("en-TN");
    var id = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .addField(
        " Joined Discord At : ",
        `${moment(heg.createdTimestamp).format(
          "YYYY/M/D HH:mm:ss"
        )} **\n** \`${moment(heg.createdTimestamp).fromNow()}\``,
        true
      )
      .addField(
        " Joined Server At : ",
        `${moment(h.joinedAt).format("YYYY/M/D HH:mm:ss")} \n \`${moment(
          h.joinedAt
        ).fromNow()}\``,
        true
      )
      .setFooter(
        `${message.author.username}`,
        "https://images-ext-1.discordapp.net/external/RXd_Kc0_Ji0JNg67qAZcHPUOL8o60DLt3qecFb5FuC4/https/media.discordapp.net/attachments/777510905041911819/792459601193992202/image0.gif"
      )
      .setThumbnail(heg.avatarURL);
    message.channel.send(id);
  }
});

const antispam = JSON.parse(fs.readFileSync("./antispam.json", "utf8"));
 
client.on("message", async message => {

  if (antispam[message.author.id] == undefined) {
    antispam[message.author.id] = {
    lastmessage: "none"
    };
    fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
      if (err) throw err;
    });
  }else  if (antispam[message.guild.id] == undefined) {
    antispam[message.guild.id] = {
    onoff: "off"
    };
    fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
      if (err) throw err;
    });
  }
  let args = message.content.split(" ");
  let command = args[0]
  if(command === prefix + "antispam"){
    if(args[1] === "on"){
      antispam[message.guild.id].onoff = "on";
      fs.writeFile("./antispam.json", JSON.stringify(antispam), function(
        err
      ) {
        if (err) throw err;
      });
      message.channel.send(">**Done Sir Anti Spam Changed To ON**")
    }else if(args[1] === "off"){
      antispam[message.guild.id].onoff = "off";
      fs.writeFile("./antispam.json", JSON.stringify(antispam), function(
        err
      ) {
        if (err) throw err;
      });
      message.channel.send(">**Done Sir Anti Spam Changed To OFF**")
    }
  }
});
 
client.on("message", async message => {
  if (antispam[message.author.id] == undefined) {
    antispam[message.author.id] = {
    lastmessage: "none"
    };
    fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
      if (err) throw err;
    });
  }else  if (antispam[message.guild.id] == undefined) {
    antispam[message.guild.id] = {
    onoff: "off"
    };
    fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
      if (err) throw err;
    });
  }else if(antispam[message.author.id].lastmessage === "none") {
    return;
  }else if(antispam[message.author.id].lastmessage === message.content){
    return message.delete();
  }
 
  antispam[message.author.id].lastmessage = message.content;
  fs.writeFile("./antispam.json", JSON.stringify(antispam), function(
    err
  ) {
    if (err) throw err;
  });
 
});


const welcomer = JSON.parse(fs.readFileSync("./welcomer.json", 'utf-8'));
client.on('message', async message => {
    if(message.author.bot) return;
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**Only Administartor**`);
    let args = message.content.split(" ");
    if(args[0].toLowerCase() == prefix + 'setwelcomer'){
        let channel1 = message.content.split(" ")[1]
        let message2 = message.content.split(" ").slice(2).join(" ")
        if(!channel1 || !message2) return message.channel.send(`**Usage: ${prefix}setwelcomer \`<ChannelWelcomer>\` \`<MessageWelcomer>\`**`);
        let channel = message.guild.channels.cache.find(ch => ch.name === `${channel1}`);
        if(!channel) return message.channel.send(`\`\`\`Not Found Channel\`\`\``);
        message.channel.send(`**Done Has Been Set Welcome**`);
        welcomer[message.guild.id] = {
            channel: channel1,
            message: message2,
            by: message.author.id
        }
        fs.writeFile("./welcomer.json", JSON.stringify(welcomer,null,4), (err) => {
if(err) console.error(err)
        })
    }
});
 
client.on('guildMemberAdd', async user => {
    let channel2 = user.guild.channels.cache.find(ch => ch.name === `${welcomer[user.guild.id].channel}`);
    if(!channel2) return;
   const Canvas = require('canvas');
    const canvas = Canvas.createCanvas(700, 250),
    ctx = canvas.getContext('2d');
    const WelcomeImage = await Canvas.loadImage('https://cdn.discordapp.com/attachments/718816157842276405/719225489302093971/rp2.png')
    ctx.drawImage(WelcomeImage, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#fff';
    ctx.fillText(`${welcomer[user.guild.id].message}`, canvas.width / 2.5, canvas.height/ 3.5);
    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    const avatarUser = await Canvas.loadImage(user.user.displayAvatarURL({ format: 'jpg'}));
    ctx.drawImage(avatarUser, 25, 25, 200, 200);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
    channel2.send(`**${welcomer[user.guild.id].message}** ${user}`, attachment);
});                  
 
 
        
        
 
 

            
 




 
 
 


              
 
    
    
const log = JSON.parse(fs.readFileSync("./log.json", "utf8"));

client.on("message", message => {
  if (!message.channel.guild) return;
  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find(r => r.name == room);
  if (message.content.startsWith(prefix + "setLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.RichEmbed()
      .setTitle("**Done The Log Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The log Is __𝐎𝐍__ !**`),
        (log[message.guild.id].onoff = "On")
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The log Is __𝐎𝐅𝐅__ !**`),
        (log[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;

  let messageDelete = new Discord.RichEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL)
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);

  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldMessage.content.startsWith("https://")) return;
  let messageUpdate = new Discord.RichEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);

  logChannel.send(messageUpdate);
});
client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleCreate = new Discord.RichEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleDelete = new Discord.RichEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateColor);
    }
  });
});
client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelCreate = new Discord.RichEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelDelete = new Discord.RichEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelDelete);
  });
});
client.on("guildMemberAdd", member => {
  var logChannel = member.guild.channels.find(c => c.name === `${log[guild.id].channel}`);
  if (!logChannel) return;
 
  let newMember = new Discord.RichEmbed()
    .setTitle("**[NEW MEMBER ADDED]**")
    .setThumbnail(member.user.avatarURL)
    .setColor("GREEN")
    .setDescription(
      `**\n**:arrow_lower_right: Joined **${
        member.user.username
      }** To the server!\n\n**User:** <@${member.user.id}> (ID: ${
        member.user.id
      })\n**Days In Discord:** ${Days(member.user.createdAt)}`
    )
    .setTimestamp()
    .setFooter(member.user.tag, member.user.avatarURL);
 
  logChannel.send(newMember);
});
function Days(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " day" : " days") + " ago";
}
client.on("guildMemberRemove", member => {
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;
 
  let leaveMember = new Discord.RichEmbed()
    .setTitle("**[LEAVE MEMBER]**")
    .setThumbnail(member.user.avatarURL)
    .setColor("GREEN")
    .setDescription(
      `**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`
    )
    .setTimestamp()
    .setFooter(member.user.tag, member.user.avatarURL);
 
  logChannel.send(leaveMember);
});
 
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
            oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newTopic);
    }
  });
});
client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let banInfo = new Discord.RichEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(unBanInfo);
  });
});
client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.guild) return;
  if (!log[oldMember.guild.id])
    log[oldMember.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.find(
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "`اسمه الاصلي`";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "`اسمه الاصلي`";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.RichEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

      logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.RichEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("GREEN")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };

      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off"
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

    logChannel.send(newOwner);
  }
});

client.on("voiceStateUpdate", (voiceOld, voiceNew) => {
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[voiceOld.guild.id])
    log[voiceOld.guild.id] = {
      onoff: "Off"
    };
  if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
  var logChannel = voiceOld.guild.channels.find(
    c => c.name === `${log[(voiceOld, voiceNew.guild.id)].channel}`
  );
  if (!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**[VOICE MUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverMutev);
    }
    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**[VOICE UNMUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUnmutev);
    }
    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE DEAF]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverDeafv);
    }
    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUndeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE UNDEAF]**")
        .setThumbnail(
          "https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUndeafv);
    }
  });

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    voiceNew.voiceChannel &&
    voiceOld.voiceChannel != null
  ) {
    if (!log[voiceOld.guild.id])
      log[voiceOld.guild.id] = {
        onoff: "Off"
      };
    if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**[CHANGED VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);

    logChannel.send(voiceLeave);
  }
});
let warnings = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
client.on("message", async message => {
  var channellog = message.guild.channels.find(
    "name",
    `${log[message.guild.id].channel}`
  );
  var user = message.mentions.users.first();
  var reason = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (message.content.startsWith(prefix + "warn")) {
    if (!message.member.hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MUTE_MEMBERS`"
      );
    if (!channellog)
      return message.channel.send(
        "cant find log channel , to set the log channel type >setLog Aand then type the channel name"
      );
    if (!user) return message.channel.send("**Mention The Target**");
    if (!reason) return message.channel.send("** Type The Reason**");
    let warnembed = new Discord.RichEmbed()
      .setTitle(`**New  Warned  User  !**`)
      .addField("**-  Warned  User:**", `${user}  with  ID  ${user.id}`)
      .addField("**-  Warned  By:**", `${message.author.tag}`)
      .addField("**-  Reason:**", `${reason}`, true)
      .addField("**-  Warned  in:**", `${message.channel.name}`)
      .addField("**-  Time & Date:**", `${message.createdAt}`)
      .setFooter(client.user.avatarURL, client.user.username)
      .setColor("#060c37");
    message.delete();
    (warnings[message.guild.id] = {
      moderator: message.author,
      warning: message.createdAt,
      member: user
    }),
      channellog.sendEmbed(warnembed);
    message.channel.send(`**__${user} Has Been Warned __**`);
    fs.writeFile("./warnings.json", JSON.stringify(warnings), err => {
      if (err) console.error(err);
    });
  }
});
client.on("message", async message => {
  if (message.content.startsWith(prefix + "listwarns")) {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    message.channel.send(
      `Moderator:${warnings[message.guild.id].moderator} Warned Member: ${warnings[message.guild.id].member} Time & Date:${warnings[message.guild.id].warning}`
    );
  }
});


   
  


        

let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (message.content.startsWith(prefix + "anti")) {
    if (!message.member.hasPermission("ADMINISTRATOR")){
      let embeeed = new Discord.RichEmbed()
      .setTitle("Protection+")
      .setDescription("**JUST FOR ADMINSTRATOR**")
      .setColor("9e1c36");
      return message.channel.send(embeeed);
    }
    {
      let arkam = new Discord.RichEmbed()
      .setTitle("Protection+")
      .setDescription("**Send number**")
      .setColor("9e1c36");
 
      { let arkam2 = new Discord.RichEmbed()
      .setTitle("Protection+")
      .setDescription("**JUST SEND NUMBER**")
      .setColor("9e1c36");
 
      if (message.content.startsWith(prefix + "anti ban")) {
      if (!num) return message.channel.send(arkam);
      if (isNaN(num)) return message.channel.send(arkam2);
      config[message.guild.id].banLimit = num
       { let banLimit1 = new Discord.RichEmbed()
      .setTitle("Protection+")
      .setDescription(`Changed to : **${config[message.guild.id].banLimit}**`)
      .setColor("9e1c36");
        message.channel.send(banLimit1);}
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if (!num) return message.channel.send(arkam);
      if (isNaN(num)) return message.channel.send(arkam2);
      config[message.guild.id].kickLimits = num
      let embedddd = new Discord.RichEmbed()
      .setTitle("Protection+")
      .setDescription(`Changed to : **${config[message.guild.id].kickLimits}**`)
      .setColor("9e1c36");
      message.channel.send(embedddd);
    }
    if (message.content.startsWith(prefix + "anti roleD")) {
      if (!num) return message.channel.send(arkam);
      if (isNaN(num)) return message.channel.send(arkam2);
      config[message.guild.id].roleDelLimit = num
      let embeddddddddd = new Discord.RichEmbed()
      .setTitle("Protection+")
      .setDescription(`Changed to : **${config[message.guild.id].roleDelLimit}**`)
      .setColor("9e1c36");
      message.channel.send(embeddddddddd);
    }
    if (message.content.startsWith(prefix + "anti roleC")) {
      if (!num) return message.channel.send(arkam);
      if (isNaN(num)) return message.channel.send(arkam2);
      config[message.guild.id].roleCrLimits = num
      let embeed = new Discord.RichEmbed()
      .setTitle("Protection+")
      .setDescription(`Changed to : **${config[message.guild.id].roleCrLimits}**`)
      .setColor("9e1c36");
      message.channel.send(embeed);
 
    }
    if (message.content.startsWith(prefix + "anti channelD")) {
      if (!num) return message.channel.send(arkam);
      if (isNaN(num)) return message.channel.send(arkam2);
      config[message.guild.id].chaDelLimit = num
            let embeeed = new Discord.RichEmbed()
      .setTitle("Protection+")
      .setDescription(`Changed to  : **${config[message.guild.id].chaDelLimit}**`)
      .setColor("9e1c36");
      message.channel.send(embeeed);
 
 
    }
    if (message.content.startsWith(prefix + "anti channelC")) {
      if (!num) return message.channel.send(arkam);
      if (isNaN(num)) return message.channel.send(arkam2);
      config[message.guild.id].chaCrLimit = num
      let embd = new Discord.RichEmbed()
      .setTitle("Protection+")
      .setDescription(`Changed to  : **${config[message.guild.id].chaCrLimit}**`)
      .setColor("9e1c36");
      message.channel.send(embd);
 
    }
    if (message.content.startsWith(prefix + "anti time")) {
      if (!num) return message.channel.send(arkam);
      if (isNaN(num)) return message.channel.send(arkam2);
      config[message.guild.id].time = num
            let emb = new Discord.RichEmbed()
      .setTitle("Protection+")
      .setDescription(`Changed to: **${config[message.guild.id].time}**`)
      .setColor("9e1c36");
      message.channel.send(emb);
    }
  }
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
    }}
});    
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        chaCrLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }    
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} He Tried To Delete Many Channels**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
client.on("channelCreate", async channel => {
  if (!["text", "category", "voice"].includes(channel.type.toLowerCase()))
    return;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;

  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**❗️ | ${entry.username} Has \`Create\` Many Channels .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
    
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
}); 
 
client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        chaCrLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} He Tried To Delete Roles**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        chaCrLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} He Tried To Make Many Roles**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log("ban: " + entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `** | ${entry.username} Has \`Ban\` Many Members .**`
          )
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `** | ${entry.username} Has \`Kick\` Many Members .**`
          )
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
}); 
var guild = []

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.guild.id])
      config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        chaCrLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.members
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**⇏ | ${entry.username} Has kick Many Members**`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
          e
        ) {
          if (e) throw e;
        });
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
 
var antibots = JSON.parse(fs.readFileSync("./KickBots.json", "utf8"));
let saveSteve = () => {
  fs.writeFileSync(
    "./KickBots.json",
    JSON.stringify(antibots, null, 2),
    err => {
      if (err) throw err;
    }
  );
};
client.on("message", message => {
  if (!message.guild) return;
  if (!antibots[message.guild.id])
    config[message.guild.id] = {
      onoff: true
    };
  if (message.content.startsWith(prefix + "antibots on")) {
    if (message.author.bot || !message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    
    antibots[message.guild.id] = {
      onoff: true
    };
    saveSteve();
    message.channel.send("**AntiBots Join Is On :closed_lock_with_key: **");
  }
  if (message.content.startsWith(prefix + "antibots off")) {
    if (message.author.bot || !message.channel.guild) return;
     if (!message.member.hasPermission("ADMINISTRATOR")) return;
 
      
    antibots[message.guild.id] = {
      onoff: false
    };
    saveSteve();
    message.channel.send("**AntiBots Join Is Off :unlock: **");
  }
  saveSteve();
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    config[member.guild.id] = {
      onoff: true
    };
  if (antibots[member.guild.id].onoff == false) return;
  if (member.user.bot) return member.ban("Protection from Bots.");
  saveSteve();
});


client.on("message", message => {
  if (message.content === prefix + "settings") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      if (!message.channel.guild) return;
    if (message.content < 1023) return;
    const black = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL).setDescription(`AntiBan
Enabled:🟢 
Maximum Ban : ${config[message.guild.id].banLimit}
-
AntiKick
Enabled:🟢 
Maximum Kick : ${config[message.guild.id].kickLimits}
-
AntiChannelD
Enabled:🟢 
Maximum Delete : ${config[message.guild.id].chaDelLimit}
-
AntiChannelC
Enabled:🟢 
Maximum Create : ${config[message.guild.id].chaCrLimit}
-
AntiRoleD
Enabled:🟢 
Maximum Delete : ${config[message.guild.id].roleDelLimit}
-
AntiRoleC
Enabled:🟢 
Maximum Create : ${config[message.guild.id].roleCrLimits}
-
AntiTime
Enabled:🟢 
Maximum Time : ${config[message.guild.id].time}
`);

    message.channel.sendEmbed(black);
  }
});    



      



var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;

client.on("message", async message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  if (command == "autoc") {
    if (!message.channel.guild)
      return message.reply(`**this ~~command~~ __for servers only__**`);
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("sorry you can't do this");
    if (!args[0] || args[1])
      return message.channel.send(`\`\`\`${prefix}autoC <role-name>\`\`\``);
    var role = message.guild.roles.find(role => {
      return role.name == args[0];
    });
    if (!role)
      return message.channel.send(
        `no role with name ${definedReactionRole} found, make sure you entered correct name`
      );
    if (definedReactionRole != null || !stopReacord)
      return message.channel.send("another reaction role request is running");
    message.channel.send(
      `now go and add reaction in the message you want for role ${role.name}`
    );
    definedReactionRole = role;
    stopReacord = false;
  }
});
client.on("raw", raw => {
  if (!["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"].includes(raw.t))
    return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get(
      raw.d.emoji.id
        ? `${raw.d.emoji.name}:${raw.d.emoji.id}`
        : raw.d.emoji.name
    );
    if (raw.t === "MESSAGE_REACTION_ADD")
      return client.emit(
        "messageReactionAdd",
        reaction,
        client.users.get(raw.d.user_id)
      );
    if (raw.t === "MESSAGE_REACTION_REMOVE")
      return client.emit(
        "messageReactionRemove",
        reaction,
        client.users.get(raw.d.user_id)
      );
  });
});
client.on("messageReactionAdd", (reaction, user) => {
  if (user.id == client.user.id) return;
  if (!stopReacord) {
    var done = false;
    reactionRoles[reaction.message.id] = {
      role: definedReactionRole,
      message_id: reaction.message.id,
      emoji: reaction.emoji
    };
    stopReacord = true;
    definedReactionRole = null;
    reaction.message.react(reaction.emoji.name).catch(err => {
      done = true;
      reaction.message.channel.send(
        `sorry i can't use this emoji but the reaction role done! anyone react will get the role!`
      );
    });
    if (done) reaction.remove(user);
  } else {
    var request = reactionRoles[reaction.message.id];
    if (!request) return;
    if (request.emoji.name != reaction.emoji.name) return reaction.remove(user);
    reaction.message.guild.members.get(user.id).addRole(request.role);
  }
});

client.on("messageReactionRemove", (reaction, user) => {
  if (user.id == client.user.id) return;
  if (!stopReacord) return;
  let request = reactionRoles[reaction.message.id];
  if (!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);
}); //TALABANI

client.on("message", message => {
  if (message.author.bot) return; ///BLACK JACK
  if (message.content.startsWith(prefix + "clear")) {
    if (!message.channel.guild)
      return message.reply(`**ئەم فەرمانە تایبەتە بە سێرڤەر **`);
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(`** ببورە تۆ ئەم رۆلەت نیە!**`);
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
      return message.channel.send(`**I don't have Permission!**`);
    let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args);
    if (args > 100)
      return message
        .reply(`** The number can't be more than **100** .**`)
        .then(messages => messages.delete(5000));
    if (!messagecount) args = "100";
    message.channel
      .fetchMessages({ limit: messagecount })
      .then(messages => message.channel.bulkDelete(messages))
      .then(msgs => {
        message.channel
          .send(`** Done , Deleted \`${msgs.size}\` messages.**`)
          .then(messages => messages.delete(5000));
      });
  }
}); ///BY BLACK JACK
let antihack = JSON.parse(fs.readFileSync('./antihack.json' , 'utf8'));
client.on('message', message => { 
    if(message.content.startsWith(prefix + "antihack")) { 
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**'); 
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' ); 
        if(!antihack[message.guild.id]) antihack[message.guild.id] = { 
          onoff: 'Off'
        } 
          if(antihack[message.guild.id].onoff === 'Off') return [message.channel.send(`**✅ The AntiHack Is __𝐎𝐍__ !**`), antihack[message.guild.id].onoff = 'On']
          if(antihack[message.guild.id].onoff === 'On') return [message.channel.send(`**⛔ The AntiHack Is __𝐎𝐅𝐅__ !**`), antihack[message.guild.id].onoff = 'Off']
          fs.writeFile("./antihack.json", JSON.stringify(antihack), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })

 

 client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let coins = require("./coins.json");
 
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
 
  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);
 
  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#5074b3")
  .addField("💸", `${coinAmt} coins added!`);
 
  message.channel.send(coinEmbed).then
  }
});
 
 
 
 
 
 
 
client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let coins = require("./coins.json");
 
if(cmd === `${prefix}coins`) {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
 
  let uCoins = coins[message.author.id].coins;
 
 
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField("💸", uCoins);
 
  message.channel.send(coinEmbed).then
}
});
    
                  

 client.on('message', message => {
     let command = message.content.split(" ")[0];
   command = command.slice(prefix.length);
 
   let args = message.content.split(" ").slice(1);
 
 
 if(command == "draw") {
     var Canvas = require('canvas')
   , Image = new Canvas.Image
   , canvas = new Canvas(450, 170)
   , ctx = canvas.getContext('2d');
   ctx.font = '30px Impact';
   let args = message.content.split(" ").slice(1);
   
 Image.src = canvas.toBuffer();
 
     console.log(Image);
 ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
 ctx.fillText(args.join("  "),110, 70);
 
 
 ctx.beginPath();
 ctx.lineTo(50, 102);
 ctx.stroke();
 
 message.channel.sendFile(canvas.toBuffer());
 }
 
 });

client.on('message',async message => {
    const moment = require('moment'); //npm i moment
const ms = require('ms') //npm i ms 
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
 
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "gstart")) {
 
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **You dont have `MANAGE GUILD`**');
    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**The Bot Not Support This Time**');
            duration = collected.first().content
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                    message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});

const top = JSON.parse(fs.readFileSync("top.json", "UTF8"));
 
function save() {
    fs.writeFileSync("./top.json", JSON.stringify(top, null, 4));
}
client.on("voiceStateUpdate", async function(oldMember, newMember) {
    if (newMember.user.bot) return;
    if (!top[newMember.guild.id]) top[newMember.guild.id] = {};
    if (!top[newMember.guild.id][newMember.user.id]) top[newMember.guild.id][newMember.user.id] = {
        "text": 0,
        "voice": parseInt(Math.random()*10),
        "msgs": 0,
        "id": newMember.user.id
    }
    save();
    if (!oldMember.voiceChannel && newMember.voiceChannel) {
        var addXP = setInterval(async function () {
            top[newMember.guild.id][newMember.user.id].voice+=parseInt(Math.random()*4);
            save();
            if (!newMember.voiceChannel) {
                clearInterval(addXP);
            }
        }, 60000);
    }
});
client.on("message", async function (message) {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!top[message.guild.id]) top[message.guild.id] = {};
    if (!top[message.guild.id][message.author.id]) top[message.guild.id][message.author.id] = {
        "text": parseInt(Math.random()*10),
        "voice": 1,
        "msgs": 0,
        "id": message.author.id
    }
    if (top[message.guild.id][message.author.id].msgs > 10) {
        top[message.guild.id][message.author.id].text += parseInt(Math.random()*4);
        top[message.guild.id][message.author.id].msgs = 0;
    }
    save();
    var args = message.content.split(" ");
    var cmd = args[0].toLowerCase();
    if (!message.content.startsWith(prefix)) return;
 
  if(message.content.startsWith(prefix + "top text")) {
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 10).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.text > 0) {
                    return `**#${++num} | <@${user.id}> XP: ${user.text} **`
                }
            }).join("n")}`;
            var embed = new Discord.RichEmbed()
            .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)
  .setColor("13B813")
        .addField(`**:speech_balloon: | TEXT LEADERBOARD**`, `${textStr}   \n\n **✨ | For More: ${prefix}top text**`, true)  
        .setFooter(message.author.tag, message.author.displayAvatarURL)
            .setTimestamp()
            message.channel.send({
                embed: embed
            });
  } else {
    if(message.content.startsWith(prefix + "top voice")) {
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 10).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.voice > 0) {
                    return `**#${++num} | <@${user.id}> XP: ${user.voice}**`
                }
            }).join("n")}`;
            var embed = new Discord.RichEmbed()
            .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)
  .setColor("13B813")
        .addField(`**:microphone2: | VOICE LEADERBOARD**`, `${voiceStr}   \n\n **:sparkles: More?** ${prefix}top voice`, true)
  
        .setFooter(message.author.tag, message.author.displayAvatarURL)
            .setTimestamp()  
            message.channel.send({
                embed: embed
            });
  } else {
       if(message.content.startsWith(prefix + "top")) {
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 5).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.text > 0) {
                    return `**#${++num} | <@${user.id}> XP: ${user.text} **`
                }
            }).join("n")}`;
            num = 0;
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 5).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.voice > 0) {
                    return `**#${++num} | <@${user.id}> XP: ${user.voice} **`
                }
            }).join("n")}`;
            var embed = new Discord.RichEmbed()  
            .setAuthor("📋 | Guild Score Leaderboards", message.guild.iconURL)
            .addField("**TOP 5 TEXT :speech_balloon:**", `${textStr}  nn  **:sparkles: More?** ${prefix}top text`, true)
            .addField("**TOP 5 VOICE :microphone2:**", `${voiceStr} nn **:sparkles: More?** ${prefix}top voice`, true)
            .setFooter(message.author.tag, message.author.displayAvatarURL)
            .setTimestamp()
            .setColor("13B813");
            message.channel.send({
                embed: embed
            
  
            });
        }
  }
  }
});

const blacklist = JSON.parse(fs.readFileSync('./blacklist.json', 'utf8'));
client.on('message',message=>{
if(message.author.bot || !message.guild)return
if(!message.member) return
if(!message.member.hasPermission('MANAGE_GUILD'))return;
if(message.content.startsWith(prefix+'blacklist add')){
let user = message.mentions.members.first() || message.guild.members.get(message.content.split(" ")[2])
if(!user)return message.channel.send('**Please Mention the User Or Type His ID :x:**')
if(user.id == message.author.id || user.id == client.user.id) return message.channel.send(`**You Can't Add this Member!**`)
if (!message.guild.member(user).bannable) return message.channel.send(`:x: I couldn't ban that user. Please check my permissions and role position.`)
user.ban('blacklist by'+message.author.tag+'!')
if(blacklist[message.guild.id+user.id]) return message.channel.send('**This Member Allready Blacklisted!**')
blacklist[message.guild.id+user.id] = {};
message.channel.send(`**Added ${user} to The Blacklist ✅**`)
}if(message.content.startsWith(prefix+'blacklist remove')){
let user =  message.content.split(" ")[2]
if(!user)return message.channel.send('**Please Type His ID :x:**')
if(!blacklist[message.guild.id+user]) return message.channel.send('**I Can\'t Find This member In The Blacklist!**\nplease Check the Member ID')
delete blacklist[message.guild.id+user];message.guild.unban(user).catch(err=>{
  return message.channel.send(`:x: I couldn't unban that user.`)
})
message.channel.send(`**Removed <@${user}> from The Blacklist ✅**`)}
if(message == prefix+'blacklist list'){
const blacklistss = [];
client.users.forEach(m => {
if(!blacklist[message.guild.id + m.id]) return
blacklistss.push(`<@${m.id}>`);
});let MS = blacklistss.join("\n")
message.channel.send(new Discord.RichEmbed().setAuthor(message.guild.name,message.guild.iconURL)
.setTitle('**⛔ This This The Blacklist:**')
.setDescription(`${MS}`).setColor('RED').setFooter(message.author.username,message.author.avatarURL)
)
};
fs.writeFile("./blacklist.json", JSON.stringify(blacklist, null, 2), function (e) {if (e) throw e;})
fs.writeFile("./blacklist.json", JSON.stringify(blacklist, null, 2), function (e) {if (e) throw e;})})
client.on('guildMemberAdd',member=>{if(blacklist[member.guild.id+member.id])return member.ban('blacklist')})                          

///////////////
client.on("message", message => {
  if (message.author.bot) return;
 
  let command = message.content.split(" ")[0];
 
  if (command === "b!mute") {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** You dont have 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find("name", "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find("name", "Muted");
    if (!muteRole)
      return message
        .reply("**  dont have role 'Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** Please menition user**")
        .catch(console.error);
 
    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("Mute/ummute", "Uses")
      .addField(
        "Muted",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "By",
        `${message.author.username}#${message.author.discriminator}`
      );
 
    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("**You dont have Manage Roles **")
        .catch(console.error);
 
    if (message.guild.member(user).roles.has(muteRole.id)) {
      return message
        .reply("**:white_check_mark: .. Muted user**")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .addRole(muteRole)
        .then(() => {
          return message
            .reply("**:white_check_mark: .. Muted user with text**")
            .catch(console.error);
        });
    }
  }
});

client.on('message',async msg => {
        if(msg.channel.type === "dm") return;
     if(msg.author.bot) return;
     if(msg.content.startsWith(prefix + "setstats")) {
     if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ MANAGE CHANNELSرۆڵت نییە');
     if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ MANAGE CHANNELS ڕۆلت نییە');
     var ggg= msg.guild.createChannel('SERVER STATS', 'category').then(kk => {
 
              var ccc =msg.guild.createChannel('SERVER STATS', 'voice').then(b => {
                   var aa =msg.guild.createChannel('SERVER STATS', 'voice').then(bl => {
                      var aaa =msg.guild.createChannel('SERVER STATS', 'voice').then(bla => {
 
          b.setParent(kk);
          bl.setParent(kk);
          bla.setParent(kk);
 
        b.overwritePermissions(msg.guild.id, {
         CONNECT: false,
         SPEAK: false
       });
        bl.overwritePermissions(msg.guild.id, {
         CONNECT: false,
         SPEAK: false
       });
        bla.overwritePermissions(msg.guild.id, {
         CONNECT: false,
         SPEAK: false
       });//////by black jack
          b.setName(`All member : ${msg.guild.memberCount}`);
         bl.setName(`Member :${msg.guild.members.size}`);
           bla.setName(`Bot : ${msg.guild.members.filter(m => m.user.bot).size}`);
    },1000);
                     
       
       
                        
                      })
 
                   })
     })
              }
          
     
});


client.on('message', message => {
  const aa = message.content.split(" ").slice(1).join(" ");
  if(message.content.startsWith(prefix + "skin")){
    if(!aa) return message.reply(`:x:  -  **${prefix}skin <name>**`);
    var ss = new Discord.RichEmbed()
    .setTitle(`${aa}'s Skin!`)
    .setURL(`https://minotar.net/armor/body/${aa}/100.png`)
    .setThumbnail(`https://minotar.net/avatar/${aa}`)
    .setImage(`https://minotar.net/armor/body/${aa}/100.png`)
    .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(ss);
  }
});

const weather = require('weather-js');
 client.on('message', message => {
     if(message.content.startsWith(prefix + "weather")) {
         var args = message.content.split(" ").slice(1);
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('**Please enter a location!**')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Weather for ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('Timezone',`UTC${location.timezone}`, true)
          .addField('Degree Type',location.degreetype, true)
          .addField('Temperature',`${current.temperature} Degrees`, true)
          .addField('Feels Like', `${current.feelslike} Degrees`, true)
          .addField('Winds',current.winddisplay, true)
          .addField('Humidity', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}
 });
   client.on("message", message => {
  if (message.content.startsWith(prefix + "sug")) {
    if (message.author.bot) return;
    if (!message.guild)
      return message.reply("**❌ This Commands Just In Server**").then(v => {
        v.react("❌");
      });
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args)
      return message.reply("Type You Suggestion").then(c => {
        c.delete(5000);
      });
    let Room = message.guild.channels.find(`name`, "sug");
    if (!Room)
      return message.channel
        .send("Can't find suggestions channel.")
        .then(d => d.react("❌"));
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(
        `Vote on ${message.author.username}'s suggestion`,
        message.author.avatarURL
      )
      .addField("**Suggestion**", `${args}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`ID: ${message.author.id}`);
    Room.sendEmbed(embed)
      .then(c => {
        c.react("✅").then(() => c.react("❌"));
      })
      .catch(e => console.error(e));
  }
});

client.on('message', message => {//Turbo Codes
var args = message.content.split(" ").slice(1);//Turbo Codes  
if(message.content.startsWith(prefix + 'id')) {//Turbo Codes
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();//Turbo Codes
let args = message.content.split(' ').slice(1).join(' ');//Turbo Codes
if (args == '') {//Turbo Codes
var z = message.author;//Turbo Codes
}else {
var z = message.mentions.users.first();//Turbo Codes
}
 
let d = z.createdAt;//Turbo Codes          
let n = d.toLocaleString();//Turbo Codes   
let x;                       
let y;                        
 
if (z.presence.game !== null) {//Turbo Codes
y = `${z.presence.game.name}`;//Turbo Codes
} else {
y = "No Playing... |💤.";//Turbo Codes
}
if (z.bot) {
var w = 'Bot';//Turbo Codes
}else {
var w = 'Member';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| Name:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| Id:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| Your account',"**"+ w + "**",true)    
.addField('📛| Id member:',"**#" +  `${z.discriminator}**`,true)//Turbo Codes
.addField('**Date| 📆 **: ' ,year + "-"+ month +"-"+ day)//Turbo Codes 
.addField("**Time joined server| ⌚   :**", message.member.joinedAt.toLocaleString())//Turbo Codes    
 
.addField('**⌚ | Time created account**', message.author.createdAt.toLocaleString())
.addField("**End message| 💬  :**", message.author.lastMessage)            
 
.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)
 
message.channel.send({embed});
  if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);//Turbo Codes
 
}
 
});
var servers = {};






var q1 = ".quran 1"

var q2 = ".quran 2"

var q3 = ".quran 3"

var q4 = ".quran 4"





function play(connection, message) {
	var server = servers[message.guild.id];

	server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));

	server.queue.shift();

	server.dispatcher.on("end", function() {
		if (server.queue[0]) play(connection, message);
		else connection.disconnect();
	});
}

client.on("ready", () => {
	console.log(`Quran bot is in ${client.guilds.size} servers `)
});





//sowar


client.on("message", message => {

	                    if (message.content === "q1" ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=V4b9f9BQTKI', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
  	                    if (message.content === "q2") {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/0m02xNtR8gA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
    	                    if (message.content === "q3" ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=4JvY-MccxNk', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
      	                    if (message.content === "q4" ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://m.youtube.com/watch?v=PLPZHevNymk', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
    
    
    //outher_cummon  
    
  
  if(message.content === ".stop" ) {
      			var servers = {};

			if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	
  }

  
	    
});
client.on('message', message => {
if(message.content == 'b!help') {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 1000);
}
});
 
  client.on('message', message => {
if(message.content == 'b!help') {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 60);
}
});  

client.on("message", message => {
  if (message.content === prefix + "help") { 
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
       .setThumbnail(message.author.avatarURL)
       .setFooter("CREATED BY BLACK JACK")
      .setColor("BLACK").setDescription(` 

b!help1 => moderation command
b!help2 => general command
b!help3 => security command
b!help4 => funny command
b!help5 => music command
b!help6 => game command

`);
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === prefix + "help1") { 
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
       .setThumbnail(message.author.avatarURL)
       .setFooter("CREATED BY BLACK JACK")
      .setColor("BLACK").setDescription(` 
      **ADMIN**
 b!mute,b!unmute
 b!move,moveall
 b!ban
 b!unban all
 b!unban
 b!ccolor
 b!c text,voice
 b!kick
 b!clear <number>
 b!lock,unlock
 b!autoc <name role react>
 b!gstart
 b!uvb,vb
 b!role
 b!helprole
 b!warn,b!listwarns
 b!temp on/off
 b!bc
 b!mutevoice,unmute voice
 b!blacklist add
 b!blacklist remove
 b!blacklist list
 b!undeafen,deafen
 b!info arole
 b!hide all,b!unhide all
 b!setstats
 b!nick,help nick
 b!listbans
 b!setWelcomer <channel name>
 b!setCount
 b!setDate
 b!autorole <role name>
 b!setTime
 b!setbotv
 b!setmember
      
       `);
   message.channel.sendEmbed(embed);
  }
});
client.on("message", message => {
  if (message.content === prefix + "help2") { 
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
       .setThumbnail(message.author.avatarURL)
       .setFooter("CREATED BY BLACK JACK")
      .setColor("BLACK").setDescription(` 
       **GENERAL COMMAND**
 b!count
 b!info roles
 b!rooms
 b!botinfo
 b!server
 b!support
 b!year
 b!invites
 b!date
 b!xp
 b!draw <name>
 b!id
 b!youtube <name search>
 b!members
 b!premium
 b!weather <location name>
 b!guild
 b!avatar
 b!top 
 b!top voice 
 b!top text
 b!quran
 b!report
 b!sbot
 b!say,embed
 b!about
 b!invite
 b!user
      
       `);
   message.channel.sendEmbed(embed);
  }
});
client.on("message", message => {
  if (message.content === prefix + "help3") { 
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
       .setThumbnail(message.author.avatarURL)
       .setFooter("CREATED BY BLACK JACK")
      .setColor("BLACK").setDescription(` 
      **SECURITY COMMAND**
b!anti ban[number]
b!anti kick [number]
b!anti roleC [number]
b!anti roleD [number]
b!anti channelD [number]
b!anti channelC [number]
b!anti time [number]
b!antispam on/off
b!antibots on/off 
b!settings
      
       `);
   message.channel.sendEmbed(embed);
  }
});
client.on("message", message => {
  if (message.content === prefix + "help4") { 
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
       .setThumbnail(message.author.avatarURL)
       .setFooter("CREATED BY BLACK JACK")
      .setColor("BLACK").setDescription(` 
       **FUNNY COMAND**
 b!slap
 b!hug
 b!tickle
 b!feed
 b!pat
 b!cat
 b!dog
 b!poke
 b!cuddle   
       `);
   message.channel.sendEmbed(embed);
  }
});
client.on("message", message => {
  if (message.content === prefix + "help6") { 
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
       .setThumbnail(message.author.avatarURL)
       .setFooter("CREATED BY BLACK JACK")
      .setColor("BLACK").setDescription(` 
       **FUNNY COMAND**
 b!slots
 b!stone
 b!paper
 b!scissors
 b!skin <name>
 b!xo
 b!kill
 b!win
       `);
   message.channel.sendEmbed(embed);
  }
});

client.on("message", m => {
  if (m.content.startsWith(prefix + "win"))
    m.channel.send(`Lottery Winner : <@${m.guild.members.random().id}>`)
});


client.on('message', message => {
        if(message.content.startsWith(prefix + 'deafen')) {
      if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
        return message.reply('**کەسەکە دیاری بکە**❌').catch(console.error);
      }
      if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
        return message.reply('ناتوانم میوتی بکەم**❌').catch(console.error);
      }
 
      const deafenMember = (member) => {
        if (!member || !member.voiceChannel) return;
        if (member.serverDeaf) return message.channel.send(`${member} **دیفێند کرا**:x:`);
        member.setDeaf(true).catch(console.error);
        if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ببورە ئەو رۆلەت نیە DEAFEN_MEMBER**❌ ").then(m => m.delete(5000));
      };
 
      message.mentions.users.forEach(user => deafenMember(message.guild.member(user)));
      message.mentions.roles.forEach(role => role.members.forEach(member => deafenMember(member)));
        }
 
    });


client.on('message', async message =>{
      if(message.content.startsWith(prefix + 'undeafen')) {
 
    if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
      return message.reply('**تکایە کەسەکە تاگ بکە**❌').catch(console.error);
    }
    if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
      return message.reply('**ناتوانم دیفەیندی بکەم**❌ ').catch(console.error);
      if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ناتوانی ئەو کارە بکەی**❌ ").then(m => m.delete(5000));
    }
 
    const undeafenMember = (member) => {
      if (!member || !member.voiceChannel) return;
      if (!member.serverDeaf) return message.channel.send(`${member} `);
      member.setDeaf(false).catch(console.error);
    };
 
    message.mentions.users.forEach(user => undeafenMember(message.guild.member(user)));
    message.mentions.roles.forEach(role => role.members.forEach(member => undeafenMember(member)));
    }
    });
 
 
 client.on('message', message => {
  if(message.content.startsWith(prefix + 'helprole')) {
      if(!message.member.hasPermission('MANAGE_ROLES')) return
    let role = new Discord.RichEmbed()
  .setDescription(`
   Add role
 
  ${prefix}role @mention <role name>
  ${prefix}role all <role name>  
  ${prefix}role humans <role name> 
  ${prefix}role bots <role name>
   
  Remove role
 
  ${prefix}rmrole <@mention> <role name>
  ${prefix}rmrole all <role name> 
  ${prefix}rmrole humans <role name>  
  ${prefix}rmrole bots <role name> `)
  .setFooter('Requested by '+ message.author.username, message.author.avatarURL)
message.channel.sendEmbed(role)
  }})
 

 
	client.on('message', message => {
      
      if(message.content.startsWith(prefix + 'unmute voice')) {
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**MUTE MEMBER ببورە ئەو رۆلەت نیە**❌ ").then(m => m.delete(5000));
        if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**من ئەو پێرمیشنەم نیە `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
 
      if(message.mentions.users.size === 0) {
        return message.reply("کەسەکە تاگ بکە");
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.reply("دووبارە");
      }
      muteMember.setMute(false);
      if(muteMember) {
        message.channel.sendMessage("بەسەرکەوتوی میوت لادرا");
      }
    }
  });
 
 
 client.on('message' , message => {
if(message.content.startsWith(prefix + 'youtube')) {
const query = message.content.split(" ").slice(1);
const url = `https://www.youtube.com/results?search_query=${query}`;
if(!query) return message.channel.send(`**:x: | Error , Please Type Command True Ex : \`${prefix}youtube [Anything]\`**`)
let querry = new Discord.RichEmbed()
.setAuthor("Youtube","https://cdn.discordapp.com/attachments/599152027628732429/599229170517540874/1GNwojhBBCCCGEEEIIIYQQQgghhBBCCCGEEELI7APi4BZVCOUmf4AAAAASUVORK5CYII.png")
.setColor('RED')
.setTitle(`Results : \`${query.join(" ")}\``)
.setDescription(`${url}`)
.setFooter(message.author.username,message.author.avatarURL)
message.channel.send(querry)
}
})
 
 
	client.on('message', message => {
        if(message.content.startsWith(prefix + 'mutevoice')) {
          if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ").then(m => m.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
 
        if(message.mentions.users.size === 0) {
          return message.reply("کەسەکە تاگ بکە");
        }
        let muteMember = message.guild.member(message.mentions.users.first());
        if(!muteMember) {
          return message.reply("دووبارە");
        }
        muteMember.setMute(true);
        if(muteMember) {
          message.channel.sendMessage("بە سەرکەوتوی میوت کرا");
        }
      }
    });
 client.on('message', rw => {
  if (rw.content.startsWith(prefix + 'vb')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
let men = rw.mentions.users.first()
let mas = rw.author
if(!men) return rw.channel.send('``');
rw.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
YOU CANT JOIN THE VOICE ROOM
BANNER : <@${rw.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
 
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL)
.setDescription(`          <@${men.id}>
BANNED
BANNER : <@${rw.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(10000)})
    }
})
 
 //فكه
client.on('message', rw => {
  if (rw.content.startsWith(prefix + 'uvb')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
 let men = rw.mentions.users.first()
 let mas = rw.author
 if(!men) return rw.channel.send('`MANTION THE MEMBER `');
 rw.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
 Welcome Back
Back With : <@${rw.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
 
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL)
.setDescription(`          <@${men.id}>
GO FOR VOICE NOW
With : <@${rw.author.id}>
`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(15000)})
    }
}) 
 
  client.on('message', message => {
    if (message.content === prefix + "rooms") {
              
 
        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
 
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});
client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("BLACK BOT")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});
client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:']
  var grid_message;
 
  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1);
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    var player1_id = message.author.id
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `٢ پلەیێر<@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_(لقد خسرت, العب مع نفسك :joy:)_'
    }
    message.channel.send(`Xo ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('Loading... Please wait for the :ok: reaction.')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`It\'s <@${turn_id}>\'s اشتغل! الرمز هو ${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listeprefix initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.channel.send(`زەرب *xo @uesr`)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });  



      

 client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "role")) {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel.send("**You dont have** `MANAGE_ROLES`");
    let member = message.mentions.users.first();
    let role = args
      .join(" ")
      .replace(member, "")
      .replace(args[0], "")
      .replace(" ", "");
    console.log(role);
    if (member) {
      if (role.startsWith("v!")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        console.log(roleRe);
        let role1 = message.guild.roles.find("name", roleRe);
        console.log(`hi`);
        const ee = new Discord.RichEmbed()
          .setDescription(
            "**<a:no:643037582296612864> I can’t find the role.**"
          )
          .setFooter(
            "Requested By " + message.author.username,
            message.author.avatarURL
          );
        if (!role1) return message.channel.send(ee);
        message.guild.member(member).removeRole(role1.id);
 
        const e = new Discord.RichEmbed()
 
          .setDescription(
            "<a:yes:643037581222739978>** Changed Roles For **" +
              member +
              "**,** " +
              "**" +
              "-" +
              role1.name +
              "**"
          )
          .setFooter(
            "Requested By " + message.author.username,
            message.author.avatarURL
          )
          .setColor("BLACK");
        message.channel.send(e);
      } else if (!role.startsWith("v!")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        let role1 = message.guild.roles.find("name", roleRe);
        const ee = new Discord.RichEmbed()
          .setDescription(
            "**<a:no:643037582296612864> I can’t find the role.**"
          )
          .setFooter(
            "Requested By : " + message.author.username,
            message.author.avatarURL
          );
        if (!role1) return message.channel.send(ee);
        message.guild.member(member).addRole(role1);
        const e = new Discord.RichEmbed()
 
          .setDescription(
            "<a:yes:643037581222739978>** Changed Roles For **" +
              member +
              "**,** " +
              "**" +
              "+" +
              role1.name +
              "**"
          )
          .setFooter(
            "Requested By : " + message.author.username,
            message.author.avatarURL
          )
          .setColor("BLACK");
        message.channel.send(e);
      } else {
        message.reply(`You Should Type The Role Name`);
      }
    } else if (args[0] == "all") {
      if (role.startsWith("v!")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        let role1 = message.guild.roles.find("name", roleRe);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members.forEach(m => {
              message.guild.member(m).removeRole(role1.id);
            });
            msg.edit(
              `** <a:yes:643037581222739978>   Done...\n**` +
                role1.name +
                `** Has Taken From __${message.guild.members.size}__ Member**`
            );
          });
      }
      if (role) {
        let role1 = message.guild.roles.find("name", role);
        if (!role1) return;
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members.forEach(m => {
              message.guild.member(m).addRole(role1);
            });
            msg.edit(
              `** <a:yes:643037581222739978>   Done...\n**` +
                role1.name +
                `** Has Given To __${message.guild.members.size}__ Members **`
            );
          });
      }
    } else if (args[0] == "humans") {
      if (role.startsWith("v!")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        let role1 = message.guild.roles.find("name", roleRe);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members.forEach(m => {
              message.guild.member(m).removeRole(role1.id);
            });
            msg.edit(
              `** <a:yes:643037581222739978>   Done...\n**` +
                role1.name +
                `** Has Taken From __${message.guild.members.size}__ Member**`
            );
          });
      }
 
      if (role) {
        let role1 = message.guild.roles.find("name", role);
 
        const ee = new Discord.RichEmbed()
          .setDescription("I Cann’t Find This Role")
          .setFooter(
            "Requested By : " + message.author.username,
            message.author.avatarURL
          );
        if (!role1) return message.channel.send(ee);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members
              .filter(m => m.user.bot == false)
              .forEach(m => {
                message.guild.member(m).addRole(role1);
              });
            msg.edit(`** <a:yes:643037581222739978>   Done...**`);
          });
      }
    } else if (args[0] == "bots") {
      if (role.startsWith("v!")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        let role1 = message.guild.roles.find("name", roleRe);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members.forEach(m => {
              message.guild.member(m).removeRole(role1.id);
            });
            msg.edit(`** <a:yes:643037581222739978>  Done...**`);
          });
      }
      if (role) {
        let role1 = message.guild.roles.find("name", role);
        const ee = new Discord.RichEmbed()
          .setDescription("I Cann’t Find This Role")
          .setFooter(
            "Requested By : " + message.author.username,
            message.author.avatarURL
          );
        if (!role1) return message.channel.send(ee);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members
              .filter(m => m.user.bot == true)
              .forEach(m => {
                message.guild.member(m).addRole(role1);
              });
            msg.edit(
              `** <a:yes:643037581222739978>  Done...\n**` +
                role1.name +
                `** Has Given To __${message.guild.members.size}__ Member**`
            );
          });
      }
    }
  }
});
 
client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "rmrole")) {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel.send("**You dont have** `MANAGE_ROLES`");
    let member = message.mentions.users.first();
    let role = args
      .join(" ")
      .replace(member, "")
      .replace(args[0], "")
      .replace(" ", "");
    console.log(role);
    if (member) {
      if (role.startsWith(".")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        console.log(roleRe);
        let role1 = message.guild.roles.find("name", roleRe);
        console.log(`hi`);
        const ee = new Discord.RichEmbed()
          .setDescription(
            "**<a:no:643037582296612864> I can’t find the role.**"
          )
          .setFooter(
            "Requested By " + message.author.username,
            message.author.avatarURL
          );
        if (!role1) return message.channel.send(ee);
        message.guild.member(member).removeRole(role1.id);
 
        const e = new Discord.RichEmbed()
 
          .setDescription(
            ":white_check_mark:** Pull Role For **" +
              member +
              "**,** " +
              "**" +
              "-" +
              role1.name +
              "**"
          )
          .setFooter(
            "Requested By " + message.author.username,
            message.author.avatarURL
          )
          .setColor("BLACK");
        message.channel.send(e);
      } else if (!role.startsWith(">")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        let role1 = message.guild.roles.find("name", roleRe);
        const ee = new Discord.RichEmbed()
          .setDescription(
            "**<a:no:643037582296612864> I can’t find the role.**"
          )
          .setFooter(
            "Requested By : " + message.author.username,
            message.author.avatarURL
          );
        if (!role1) return message.channel.send(ee);
        message.guild.member(member).removeRole(role1);
        const e = new Discord.RichEmbed()
 
          .setDescription(
            "<a:yes:643037581222739978>** Pull Role For **" +
              member +
              "**,** " +
              "**" +
              "+" +
              role1.name +
              "**"
          )
          .setFooter(
            "Requested By : " + message.author.username,
            message.author.avatarURL
          )
          .setColor("BLACK");
        message.channel.send(e);
      } else {
        message.reply(`Please name role`);
      }
    } else if (args[0] == "all") {
      if (role.startsWith(".")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        let role1 = message.guild.roles.find("name", roleRe);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members.forEach(m => {
              message.guild.member(m).removeRole(role1.id);
            });
            msg.edit(
              `** <a:yes:643037581222739978>   Done...\n**` +
                role1.name +
                `** Has Pull From __${message.guild.members.size}__ Member**`
            );
          });
      }
      if (role) {
        let role1 = message.guild.roles.find("name", role);
        if (!role1) return;
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members.forEach(m => {
              message.guild.member(m).removeRole(role1);
            });
            msg.edit(
              `** <a:yes:643037581222739978>   Done...\n**` +
                role1.name +
                `** Has Pull To __${message.guild.members.size}__ Members **`
            );
          });
      }
    } else if (args[0] == "humans") {
      if (role.startsWith(".")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        let role1 = message.guild.roles.find("name", roleRe);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members.forEach(m => {
              message.guild.member(m).removeRole(role1.id);
            });
            msg.edit(
              `** <a:yes:643037581222739978>   Done...\n**` +
                role1.name +
                `** Has Pull From __${message.guild.members.size}__ Member**`
            );
          });
      }
 
      if (role) {
        let role1 = message.guild.roles.find("name", role);
 
        const ee = new Discord.RichEmbed()
          .setDescription("I Cann’t Find This Role")
          .setFooter(
            "Requested By : " + message.author.username,
            message.author.avatarURL
          );
        if (!role1) return message.channel.send(ee);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members
              .filter(m => m.user.bot == false)
              .forEach(m => {
                message.guild.member(m).removeRole(role1);
              });
            msg.edit(`** <a:yes:643037581222739978> Done...**`);
          });
      }
    } else if (args[0] == "bots") {
      if (role.startsWith(".")) {
        let roleRe = args
          .join(" ")
          .replace(member, "")
          .replace(args[0], "")
          .replace("-", "")
          .replace(" ", "");
        let role1 = message.guild.roles.find("name", roleRe);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members.forEach(m => {
              message.guild.member(m).removeRole(role1.id);
            });
            msg.edit(`** <a:yes:643037581222739978> Done...**`);
          });
      }
      if (role) {
        let role1 = message.guild.roles.find("name", role);
        const ee = new Discord.RichEmbed()
          .setDescription("I Cann’t Find This Role")
          .setFooter(
            "Requested By : " + message.author.username,
            message.author.avatarURL
          );
        if (!role1) return message.channel.send(ee);
        message.channel
          .send(`Please wait until the order is finished`)
          .then(msg => {
            message.guild.members
              .filter(m => m.user.bot == true)
              .forEach(m => {
                message.guild.member(m).removeRole(role1);
              });
            msg.edit(
              `** <a:yes:643037581222739978>  Done...\n**` +
                role1.name +
                `** rank has been pull To __${message.guild.members.size}__ Member**`
            );
          });
      }
    }
  }
});
 const rWlc = JSON.parse(fs.readFileSync("./AutoRole.json", "utf8"));
client.on('message', message => {
if(message.channel.type === "dm") return;
if(message.author.bot) return;
   if(!rWlc[message.guild.id]) rWlc[message.guild.id] = {
    role: "member"
  }
const channel = rWlc[message.guild.id].role
  if (message.content.startsWith(prefix + "autorole")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newrole = message.content.split(' ').slice(1).join(" ")
    if(!newrole) return message.reply(`**${prefix}autorole <role name>**`)
    rWlc[message.guild.id].role = newrole
    message.channel.send(`**${message.guild.name}'s role has been changed to ${newrole}**`);
  }
fs.writeFile("./AutoRole.json", JSON.stringify(rWlc), function(e){
    if (e) throw e;
})
});
client.on("guildMemberAdd", member => {
      if(!rWlc[member.guild.id]) rWlc[member.guild.id] = {
    role: "member"
  }
    const sRole = rWlc[member.guild.id].role
    let Rrole = member.guild.roles.find('name', sRole);
  member.addRole(Rrole);
 
      });
 
client.on("message", msg => {
    if(msg.content.startsWith(prefix + "info arole")){
    var sRole = rWlc[msg.guild.id].role
let emb = new Discord.RichEmbed()
.setTitle("**AutoRole Info**")
.setAuthor(msg.guild.name,msg.guild.iconURL)
.setThumbnail(msg.guild.iconURL)
.setColor("RANDOM")
.addField("**Server id**", msg.guild.id)
.addField("**Name server**", msg.guild.name)
.addField("**Role Auto role**", sRole)
.setFooter(client.user.tag,client.user.avatarURL)
msg.channel.send(emb)
    }
});

client.on('message', message => {
if(message.content.startsWith(prefix + "stone")) {
let slot1 = ['✂paper📄', '🗿stone🗿', '✂scissors📄'];
let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1) {
we = "🎮Play Again🎮"
} else {
we = "😣She lost the luck of Over😣"
}
message.channel.send(`${slots1} - ${we}`)
}
});

client.on('message', message => {
if(message.content.startsWith(prefix + "scissors")) {
  let slot1 = ['✂paper📄', '🗿stone🗿', '✂scissors📄'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1) {
we = "🎮Play Again🎮"
} else {
we = "😣She lost the luck of Over😣"
}
message.channel.send(`${slots1} - ${we}`)
}
});

client.on('message', message => {
if(message.content.startsWith(prefix + "paper")) {
  let slot1 = ['✂paper📄', '🗿stone🗿', '✂scissors📄'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1) {
we = "🎮Play Again🎮"
} else {
we = "😣She lost the luck of Over😣"
}
message.channel.send(`${slots1} - ${we}`)
}
});

////by black jack




client.on("message", message => {
  if (message.content.startsWith(prefix + "bc")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(" ");
    message.guild.members
      .filter(m => m.presence.status !== "offline")
      .forEach(m => {
        m.send(`${argresult}\n ${m}`);
      });
    message.channel.send(
      `\`${
        message.guild.members.filter(m => m.presence.status !== "online",).size
      }\` : ** ژمارەی ۆنلاینەکان** `
    );
    message.delete();
  }
});
 

client.on("message", message => {
  if (message.content.startsWith(prefix + "moveall")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send("**:x: You Dont Have Perms `MOVE_MEMBERS`**");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null)
      return message.channel.send(`**You Have To Be In Room Voice**`);
    var author = message.member.voiceChannelID;
    var m = message.guild.members.filter(m => m.voiceChannel);
    message.guild.members
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      })
      .setTitle(`✽ **Black bot**`)
      .setImage("");
 
    message.channel.send(
      `**:white_check_mark: Success Moved All To Your Channel**`
    );
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix +"avatar")) {
if(!message.channel.guild) return;
      var mentionned = message.mentions.users.first();
  var client;
    if(mentionned){
        var client = mentionned; } else {
        var client = message.author;
    }
      const embed = new Discord.RichEmbed()
                         .addField('Requested by:', "<@" + message.author.id + ">")
      .setColor("BLACK")
      .setImage(`${client.avatarURL}`)
      .setFooter("BLACK BOT")
    message.channel.sendEmbed(embed);
  }
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.startsWith(prefix + "settime")) {
    if (!msg.guild.member(msg.author).hasPermission("MANAGE_CHANNELS"))
      return msg.reply("❌ **go play minecraft**");
    if (!msg.guild.member(client.user).hasPermission(["MANAGE_CHANNELS"]))
      return msg.reply("❌ **بۆتەکە ئەو کردارەی بە دەست نییە**");
    var ggg = msg.guild.createChannel("DATE AND TIME", "category").then(kk => {
      var ccc = msg.guild.createChannel("SERVER STATS", "voice").then(al => {
        var aa = msg.guild.createChannel("SERVER STATS", "voice").then(alp => {
          var aaa = msg.guild
            .createChannel("SERVER STATS", "voice")
            .then(alph => {
              al.setParent(kk);
              alp.setParent(kk);
              alph.setParent(kk);
 
              al.overwritePermissions(msg.guild.id, {
                CONNECT: false,
                SPEAK: false
              });
              alp.overwritePermissions(msg.guild.id, {
                CONNECT: false,
                SPEAK: false
              });
              alph.overwritePermissions(msg.guild.id, {
                CONNECT: false,
                SPEAK: false
              });
              setInterval(() => {
                var currentTime = new Date(),
                  hours = currentTime.getHours() + 3,
                  minutes = currentTime.getMinutes(),
                  Seconds = currentTime.getSeconds(),
                  Year = currentTime.getFullYear(),
                  Month = currentTime.getMonth() + 1,
                  Dat = currentTime.getDate();
                if (minutes < 10) {
                  minutes = "0" + minutes;
                }
                var suffix = "AM";
                if (hours >= 12) {
                  suffix = "PM";
                  hours = hours - 12;
                }
                if (hours == 0) {
                  hours = 12;
                }
                al.setName(
                  `Voice Online :[ ${
                    msg.guild.members.filter(m => m.voiceChannel).size
                  } ]`
                );
                alp.setName(
                  `Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`
                );
                alph.setName(`[ Date : [${Year} - ${Month} - ${Dat} ]`);
              }, 1000);
            });
        });
      });
    });
  }
});
 
client.on("message", message => {
  if (message.content.startsWith(prefix + "nick")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check Your Permission.");
    if (!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check My Permission.");
    let user = message.mentions.users.first();
 
    if (!user) return message.channel.send(`**>>> ${prefix}nick @mention nickname**`);
    let args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args)
      message.guild
        .member(user)
        .setNickname("")
        .then(m => {
          message.channel.send(
            " " + user.username + " has been reseted nickname "
          );
        })
        .catch(error => {
          message.channel.send("Error: **" + error.message + "**");
        });
    message.guild
      .member(user)
      .setNickname(args)
      .then(m => {
        let embed = new Discord.RichEmbed()
          .setTitle("Nicknamed User!")
          .setDescription(
            "User: ```" +
              user.username +
              "```\nBy: ```" +
              message.author.username +
              "```\nNickname: ```" +
              args +
              "``` "
          );
        message.channel.send(embed);
      })
      .catch(error => {
        message.channel.send("Error: **" + error.message + "** ");
      });
  }
  if (message.content.toLowerCase() === prefix + "help nick") {
    let nick = new Discord.MessageEmbed()
      .setTitle(`Command: nick`)
      .addField("Usage", `${prefix}nick @user nickname`)
      .addField("Information", "Nicknames");
    message.channel.send(nick);
  }
});

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "about") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("RANDOM")
      .addField(
        "**Bot Ping** : ",
        `» ${Date.now() - message.createdTimestamp}` + " ms",
        true
      )
      .addField("**Servers** :  ", `» ${client.guilds.size}`, true)
      .addField("**Channels** : ", `» ${client.channels.size} `, true)
      .addField("**Users** : ", `» ${client.users.size} `, true)
      .addField("**Bot Name** :  ", `» ${client.user.tag} `, true)
      .addField("**Bot Owner** :  ", `» <@670647563627659306>`, true) // تعديل مهم عدل هذا الرقم لايدي حسابك
      .setImage("")
      .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(bot);
  }
});

client.on("guildCreate", guild => {
        client.users.get('670647563627659306').send('  BOT  Join To [ ' + `${guild.name}` + ' ]  ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]')
        });
 
        client.on("guildDelete", guild => {
        client.users.get('670647563627659306').send('   BOT  Leave From  [ ' + `${guild.name}` + ' ]   ,    Owner    ' + ' [ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]')
      });
 ////by black jack
client.on("message", Black => {
  if (Black.content.startsWith(prefix + "c text")) {
    if (!Black.member.hasPermission("MANAGE_CHANNELS"))
      return Black.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
    let args = Black.content.split(" ").slice(1);
    Black.guild.createChannel(args.join(" "), "text");
    Black.channel.sendMessage("Created text channel✅");
  }
});



client.on("message", Black => {
  if (Black.content.startsWith(prefix + "c vc")) {
    if (!Black.member.hasPermission("MANAGE_CHANNELS"))
      return Black.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
    let args = Black.content.split(" ").slice(1);
    Black.guild.createChannel(args.join(" "), "voice");
    Black.channel.sendMessage("Created voice✅");
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "listbans")) {
    if (!message.guild) return;
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `BAN_MEMBERS`"
      );
    message.guild.fetchBans().then(bans => {
      let b = bans.size;
      let bb = bans.map(a => `${a}`).join(" - ");
      message.channel.send(`**\`${b}\` | ${bb}**`);
    });
  }
});

client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'cat')) {
  if (message.content.includes("cattext")) return undefined;
  const GIF = await neko.sfw.meow();
  const embed = new Discord.RichEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random cat image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

// Dog
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'dog')) {
  const GIF = await neko.sfw.woof();
  const embed = new Discord.RichEmbed()
  .setColor('#202225')
  .setTitle(`${message.author.tag} here's a random dog image/gif`)
  .setImage(GIF.url)
  message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "botinfo")) {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor("RANDOM")
        .setTitle("``INFO  BLACK BOT`` ")
        .addField(
          "``My Ping``",
          [`${Date.now() - message.createdTimestamp}` + "MS"],
          true
        )
        .addField("``servers``", [client.guilds.size], true)
        .addField("``channels``", `[ ${client.channels.size} ]`, true)
        .addField("``Users``", `[ ${client.users.size} ]`, true)
        .addField("``My Name``", `[ ${client.user.tag} ]`, true)
        .addField("``My ID``", `[ ${client.user.id} ]`, true)
        .addField("``My Prefix``", `[ b! ]`, true)
        .addField("``My Language``", `[ JavaScript ]`, true)
        .addField("``Bot Version``", `[ v12 ]`, true)
        .setFooter("By | <@670647563627659306>")
    });
  }
});

client.on("message", message => {
  if (message.content === prefix + "lock") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("Sorry you dont have permission");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**🔒 Locked chat**");
      });
  }
  //BLACK JACK
  if (message.content === prefix + "unlock") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("Sorry you donst have permisssion");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**🔓 Unlock chat**");
      });
  }
});
client.on("message", message => {
  //Black jack
  if (!message.channel.guild) return;
  if (message.content == prefix + "count")
    //Black jack
    var Black = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle("🌍| زانیاری سێرڤەر ", `__${message.guild.name}__`)
      .addBlankField(true) //Black jack
      .addField("ژمارەی میبەرەکان", `__${message.guild.memberCount}__`);
  message.channel.send(Black);
});
client.on("message", async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "pat")) {
    if (message.mentions.members.size === 0) {
      const GIF = await neko.sfw.pat();
      const embed = new Discord.RichEmbed()
        .setColor("#202225")
        .setTitle(`${message.author.tag} patted themsselves`)
        .setImage(GIF.url);
      message.channel.send(embed);
    }
    const member = message.mentions.members.first();
    const GIF = await neko.sfw.pat();
    const embed = new Discord.RichEmbed()
      .setColor("#202225")
      .setTitle(`${message.author.tag} patted ${member.user.tag}`)
      .setImage(GIF.url);
    message.channel.send(embed);
  }
});

// Slap
client.on("message", async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "slap")) {
    if (message.mentions.members.size === 0) {
      const GIF = await neko.sfw.slap();
      const embed = new Discord.RichEmbed()
        .setColor("#202225")
        .setTitle(`${message.author.tag} slapped themsselves`)
        .setImage(GIF.url);
      message.channel.send(embed);
    }
    const member = message.mentions.members.first();
    const GIF = await neko.sfw.slap();
    const embed = new Discord.RichEmbed()
      .setColor("#202225")
      .setTitle(`${message.author.tag} slapped ${member.user.tag}`)
      .setImage(GIF.url);
    message.channel.send(embed);
  }
});

// Tickle
client.on("message", async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "tickle")) {
    if (message.mentions.members.size === 0) {
      const GIF = await neko.sfw.tickle();
      const embed = new Discord.MessageEmbed()
        .setColor("#202225")
        .setTitle(`${message.author.tag} tickled themsselves`)
        .setImage(GIF.url);
      message.channel.send(embed);
    }
    const member = message.mentions.members.first();
    const GIF = await neko.sfw.tickle();
    const embed = new Discord.RichEmbed()
      .setColor("#202225")
      .setTitle(`${message.author.tag} tickled ${member.user.tag}`)
      .setImage(GIF.url);
    message.channel.send(embed);
  }
});

// Poke
client.on("message", async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "poke")) {
    if (message.mentions.members.size === 0) {
      const GIF = await neko.sfw.poke();
      const embed = new Discord.RichEmbed()
        .setColor("#202225")
        .setTitle(`${message.author.tag} poked themsselves`)
        .setImage(GIF.url);
      message.channel.send(embed);
    }
    const member = message.mentions.members.first();
    const GIF = await neko.sfw.poke();
    const embed = new Discord.MessageEmbed()
      .setColor("#202225")
      .setTitle(`${message.author.tag} poked ${member.user.tag}`)
      .setImage(GIF.url);
    message.channel.send(embed);
  }
});

// Cuddle
client.on("message", async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "cuddle")) {
    if (message.mentions.members.size === 0) {
      const GIF = await neko.sfw.cuddle();
      const embed = new Discord.RichEmbed()
        .setColor("#202225")
        .setTitle(`${message.author.tag} cuddled themsselves`)
        .setImage(GIF.url);
      message.channel.send(embed);
    }
    const member = message.mentions.members.first();
    const GIF = await neko.sfw.cuddle();
    const embed = new Discord.RichEmbed()
      .setColor("#202225")
      .setTitle(`${message.author.tag} cuddled ${member.user.tag}`)
      .setImage(GIF.url);
    message.channel.send(embed);
  }
});

// Feed
client.on("message", async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "feed")) {
    if (message.mentions.members.size === 0) {
      const GIF = await neko.sfw.feed();
      const embed = new Discord.RichEmbed()
        .setColor("#202225")
        .setTitle(`${message.author.tag} feeded themsselves`)
        .setImage(GIF.url);
      message.channel.send(embed);
    }
    const member = message.mentions.members.first();
    const GIF = await neko.sfw.feed();
    const embed = new Discord.RichEmbed()
      .setColor("#202225")
      .setTitle(`${message.author.tag} feeded ${member.user.tag}`)
      .setImage(GIF.url);
    message.channel.send(embed);
  }
});
client.on("message", async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "hug")) {
    if (message.mentions.members.size === 0) {
      const GIF = await neko.sfw.hug();
      const embed = new Discord.RichEmbed()
        .setColor("#202225")
        .setTitle(`${message.author.tag} hugged themselves`)
        .setImage(GIF.url);
      message.channel.send(embed);
    }
    const member = message.mentions.members.first();
    const GIF = await neko.sfw.hug();
    const embed = new Discord.RichEmbed()
      .setColor("#202225")
      .setTitle(`${message.author.tag} hugged ${member.user.tag}`)
      .setImage(GIF.url);
    message.channel.send(embed);
  }
});

client.on("message", m => {
  if (m.content === prefix + "invite") {
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter("BLACK BOT")
      .addField(
        "click here",
        `https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975`
      );
    m.channel.send({ embed });
  }
});
client.on("message", async message => {
  if (message.content.startsWith(prefix + "setbotv")) {
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.reply("**بداخۆ پێرمیشنەمەت MANAGE CHANNEL نیە**");
    message.channel.send("✅| **بە سەرکەوتوی دروست بوو**");
    message.guild
      .createChannel(
        `Online : [ ${message.guild.members.filter(m => m.user.bot).size} `,
        "voice"
      )
      .then(c => {
        console.log(`Done make room in: \n ${message.guild.name}`);
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(() => {
          c.setName(
            `Bots:  ${message.guild.members.filter(m => m.user.bot).size} `
          );
        }, 1000);
      });
  }
});

client.on('message', message => {
if (message.content.startsWith(prefix + 'my perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var black = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)

          message.channel.send(black)

    }
});


client.on("message", message => {
  if (message.content.startsWith(prefix + "move")) {
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    if (!message.channel.guild || message.author.bot) return;
    if (!message.guild.member(message.author).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("ببورە ئەم پێرمیشنەت نییە MOVE MEMBERS");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("ببورە ئەم پێرمیشنەت نییە MOVE MEMBERS");
    if (!message.member.voice.channel)
      return message.channel.send("تکایە برۆ ڤۆیس ");
    if (!user)
      return message.channel.send(`**>>> ${prefix}move <@mention or id>`);
    if (!message.guild.member(user.id).voice.channel)
      return message.channel.send(
        `**${user.user.username}** Has not in Voice channel`
      );
    message.guild
      .member(user.id)
      .voice.setChannel(message.member.voice.channel.id)
      .then(() => {
        message.channel.send(
          `**${user.user.username}** موڤ کرا✅ **${
            message.guild.member(message.author).voice.channel.name
          }**`
        );
      });
  }
  if (message.content.toLowerCase() === prefix + "help move") {
    let move = new Discord.MessageEmbed()
      .setTitle(`Command: move`)
      .addField("Usage", `${prefix}move @user`)
      .addField("Information", "move members");
    message.channel.send(move);
  }
}); ////black jack
client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  if (!message.channel.guild)
    return message.reply("** This command only for servers **");
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (command === "kill") {
    var sabotage = message.mentions.users.first();
    if (sabotage == message.author)
      return message.reply(`**No please menition user**`);
    if (sabotage === client.user) return message.reply(`**Why?**`);
    if (sabotage < 1) {
      message.delete();
      return message.channel.sendMessage(
        "Put something to kill like mention your username or use an emoji"
      );
    }
    if (!sabotage)
      return message.channel.send(`Please Mention A Member to Kill :warning:`);
    message.channel.send("▄︻̷̿┻̿═━一 ${sabotage").then(msg => {
      msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :three:`);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :two:`);
      }, 1000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :one:`);
      }, 2000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 :boom:`);
      }, 3000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 :fire:`);
      }, 4000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 :skull:`);
      }, 5000);
      msg.delete(6000);
      message.delete();
    });
    message.channel
      .send("**** The crime has been successfully hidden 🕳 **")
      .then(msg => msg.delete(7000));
  }
});

let xp = require('./xp.json'); // {} و ضع به xp.json اصنع ملف باسم
 
client.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
 
 
    let Addxp = Math.floor(Math.random() * 6) + 8;
 
    if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp: 0,
            level: 1
        };
    }
 
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level + 1;
    let nextLvL = xp[message.author.id].level * 1000;
    xp[message.author.id].xp = curxp + Addxp;
    if(nextLvL <= xp[message.author.id].xp){
        xp[message.author.id].level = xp[message.author.id].level + 1;
       
        let errorup = new Discord.RichEmbed()
        .setTitle('Level Up!')
        .setColor('RANDOM')
        .setDescription(`New Level: `+curlvl)
        .setImage("https://media.discordapp.net/attachments/793750057500278805/796281012719321088/image0.gif")
        .setTimestamp()
        .setFooter(message.author.username+'#'+message.author.discriminator);
        message.channel.send(errorup )
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
        if (err) console.log(err)
    });
 
 
});
client.on('message', message =>{
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
 
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nextlvlxp = curlvl * 200;
    let difference = nextlvlxp - curxp
 
    if(message.content == prefix + "xp"){
 
        if(!xp[message.author.id]) {
            xp[message.author.id] = {
                xp: 0,
                level: 1,
            }
        }
        fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
            if(err) console.log(err)
        });
        var embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor('RANDOM')
        .setTitle('Your Profile.')
        .addField('XP: ', curxp, true)
        .addField('Level: ', curlvl, true)
        .setFooter(` ${difference} xp till level up `, message.author.displayAvatarURL);
        message.channel.send(embed);
 
    }
});

                
 
 

    
////black jack

client.on("message", message => {
  if (message.content.startsWith(prefix + "sbot")) {
    message.channel.send({
      embed: new Discord.RichEmbed()

        .setColor("BLACK")
        .addField("``Servers``", [client.guilds.size], true)
        .addField("``Users``", `[ ${client.users.size} ]`, true)
    });
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "setmember")) {
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.reply("❌ **بداخۆ ئەو رۆلەو نییە**");
    if (
      !message.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply("❌ **بداخۆ ئەو رۆلەو نیە**");
    message.channel.send("✅| **ژورەکە دروست بوو**");
    message.guild
      .createChannel(`Members [${message.guild.members.size}]`, "voice")
      .then(c => {
        console.log(`Done make room in: \n ${message.guild.name}`);
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(() => {
          c.setName(`Members [${message.guild.members.size}]`);
        }, 1000);
      });
  }
});


client.on("message", message => {
  if (message.content === prefix + "support") {
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("#9B59B6")
      .setImage("https://images-ext-1.discordapp.net/external/RXd_Kc0_Ji0JNg67qAZcHPUOL8o60DLt3qecFb5FuC4/https/media.discordapp.net/attachments/777510905041911819/792459601193992202/image0.gif")
      .addField(" ** CLICK HERE **", "  **https://discord.gg/tgcrhfT3dY*");
 
    message.channel.sendEmbed(embed);
  }
});



client.on("guildDelete", guild => {
  let joinedbot = new Discord.RichEmbed()
    .setColor("BLACK")
    .setTitle(" | جۆینی سێرڤەر کرا")
    .setFooter("CREATED BY BLACK JACK").setDescription(`
  Server Name: [ ${guild.name} ]
  Server Owner: [ ${guild.owner} ]
  Server ID: [ ${guild.id} ]
  Server Count: [ ${guild.memberCount} ]`);
  client.channels.get("792426159367127061").send(joinedbot);
}); ////BY BLACK JACK

client.on("guildDelete", guild => {
  let kickedbot = new Discord.RichEmbed()
    .setColor("BLACK")
    .setTitle("| دەرکرا لە سێرڤەر ")
    .setFooter("CREATED BY BLACK JACK").setDescription(`
  Server Name: [ ${guild.name} ]
  Server Owner: [ ${guild.owner} ]
  Server ID: [ ${guild.id} ]
  Server Count: [ ${guild.memberCount} ]`);
  client.channels.get("792426159367127061").send(kickedbot);
}); ////BY BLACK JACK

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == prefix + "members")
    var black = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle("🙆| INFO MEMBER")
      .addBlankField(true)
      .addField(
        "🐸| ONLINE MEMBER",
        `${
          message.guild.members.filter(m => m.presence.status == "online").size
        }`
      )
      .addField(
        "😡| DND",
        `${message.guild.members.filter(m => m.presence.status == "dnd").size}`
      )
      .addField(
        "🐨| IDLE",
        `${message.guild.members.filter(m => m.presence.status == "idle").size}`
      )
      .addField(
        "😴| OFFLINE",
        `${
          message.guild.members.filter(m => m.presence.status == "offline").size
        }`
      )
      .addField("👨‍👨‍👧‍👧| ALL MEMBERS", `${message.guild.memberCount}`);
  message.channel.send(black);
});


 const temp = {}; 
 
client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'Temporary Channels',
      channel : 'Temp room'
       }
        if(message.content.startsWith(prefix + 'temp on')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('Temporary Channels', 'category').then(cg => {
           var ccc =message.guild.createChannel('Temp room', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**:white_check_mark:  Done chek created channel  **')
              client.on('message' , message => {
               if(message.content === prefix + 'temp off') {
                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 cg.delete()
                  ch.delete()
                   message.channel.send('**:white_check_mark:  Done chek created channel **  ')
                    }
                     });
                      const time = temp[message.guild.id].time
                       client.on('message' , message => {
                        if (message.content.startsWith(prefix + "temp time")) {
                         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                          let newTime= message.content.split(' ').slice(1);
                          if(!newTime) return message.reply(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
                     if(isNaN(newTime)) return message.reply(`** The Time Be Nambers :face_palm: **`);
                    if(newTime < 1) return message.reply(`**The Time Be Up \`3000s\`**`)
                       temp[message.guild.id].time = newTime
                      message.channel.send(`**:white_check_mark:  Done chek new time  - \`${newTime}\`**`);
                     }
                    });
                   client.on('voiceStateUpdate', (old, neww) => {
                  let newUserChannel = neww.voiceChannel
                 let oldUserChannel = old.voiceChannel
                temp[message.guild.id].category = cg.id
               temp[message.guild.id].channel = ch.id
              let channel = temp[message.guild.id].channel
             let category = temp[message.guild.id].category
            if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
           neww.guild.createChannel(neww.displayName , 'voice').then(c => {
          c.setParent(category)
         let scan = setTimeout(()=>{
        if(!neww.voiceChannel) {
       c.delete();
      client.channels.get(channel).overwritePermissions(neww, {
     CONNECT:true,
    SPEAK:true
   })
  }
 }, temp[neww.guild.id].time);
  c.overwritePermissions(neww, {
   CONNECT:true,
    SPEAK:true,
     MANAGE_CHANNEL:true,
      MUTE_MEMBERS:true,
       DEAFEN_MEMBERS:true,
    MOVE_MEMBERS:true,
     VIEW_CHANNEL:true
      })
       neww.setVoiceChannel(c)
            })
             client.channels.get(channel).overwritePermissions(neww, {
          CONNECT:false,
           SPEAK:false
        })
               }
              })
             })
           })
          }
      });

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content == prefix + "uptime") {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {
      if (uptime >= 8.64e7) {
        days++;
        uptime -= 8.64e7;
      } else if (uptime >= 3.6e6) {
        hours++;
        uptime -= 3.6e6;
      } else if (uptime >= 60000) {
        minutes++;
        uptime -= 60000;
      } else if (uptime >= 1000) {
        seconds++;
        uptime -= 1000;
      }

      if (uptime < 1000) notCompleted = false;
    }

    message.channel.send(
      "`" +
        `${days} days, ${hours} hrs, $p{minutes} , ${seconds} sec` +
        "`**🎛 **"
    );
  }
});
client.on("message", msg => {
  if (msg.content === prefix + "hide all") {
    if (!msg.member.hasPermission("ADMINISTRATOR"))  return;
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
      });
    });
    msg.channel.send("Done check hide all");
  }
});
 
client.on("message", msg => {
  if (msg.content === prefix + "unhide all") {
    if (!msg.member.hasPermission("ADMINISTRATOR"))   return;
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      });
    });
    msg.channel.send("done check hide all");
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == prefix + "allbots") {
    if (message.author.bot) return;
    let i = 1;
    const botssize = message.guild.members
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setDescription(
        `**Found ${
          message.guild.members.filter(m => m.user.bot).size
        } bots in this Server**
${botssize.join("\n")}`
      )
      .setFooter(client.user.username, client.user.avatarURL)
      .setTimestamp();
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.content === prefix + "ping") {
    const embed = new Discord.RichEmbed()

      .setColor("#FF0000")
      .addField(
        "``خێرای خەتت`` ",
        `${Date.now() - message.createdTimestamp}` + " ms`"
      )
      .setFooter(
        ` BLACK BOT
 .`,
        "https://aladdintravel.com/wp-content/uploads/2014/11/pinterest-logo-2-1074x1067.png"
      );

    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
 
  let command = message.content.split(" ")[0];
 
  if (command === prefix + "unmute") {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** You dont have 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find("name", "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find("name", "Muted");
    if (!muteRole)
      return message
        .reply("** Don't have role Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** Menition user please**")
        .catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("Mute/unmute", "Uses")
      .addField(
        "Unmute",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "By",
        `${message.author.username}#${message.author.discriminator}`
      );
 
    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** You dont have Manage Roles **")
        .catch(console.error);
 
    if (message.guild.member(user).removeRole(muteRole.id)) {
      return message
        .reply("**:white_check_mark: .. Unmuted user**")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .removeRole(muteRole)
        .then(() => {
          return message
            .reply("**:white_check_mark: .. Unmuted user**")
            .catch(console.error);
        });
    }
  }
});
 



client.on("message", message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === prefix + "banslist") {
    message.delete(5000);
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
      return message
        .reply("Error : ` I Dont Have ADMINISTRATOR Permission`")
        .then(message => message.delete(5000));
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    if (!message.channel.guild) return;
    message.guild
      .fetchBans()
      .then(bans =>
        message.channel.send(`\`${bans.size}\` ***: ژمارەی باند بوەکان ***`)
      )
      .then(message => message.delete(5000))

      .catch(console.error);
  }
});



client.on("message", msg => {
  if (msg.content == prefix + "guild") {
    let embed = new Discord.RichEmbed()
      .setThumbnail(msg.guild.iconURL)
      .setColor("RANDOM")
      .addField("Year📆", msg.guild.createdAt.getFullYear())
      .addField("Hour📆", msg.guild.createdAt.getHours())
      .addField("Day📆", msg.guild.createdAt.getDay())
      .addField("Month📆", msg.guild.createdAt.getMonth())
      .addField("Minutes📆", msg.guild.createdAt.getMinutes())
      .addField("Seconds📆", msg.guild.createdAt.getSeconds())
      .addField("Full📆", msg.guild.createdAt.toLocaleString())
      .setTimestamp();
    msg.channel.send(embed);
  }
});
//BJ<BLACK/JACK>

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content === prefix + "ccolor") {
    if (message.member.hasPermission("MANAGE_ROLES")) {
      setInterval(function() {});
      message.delete(1000);
      message.channel.send("50 colors were created | ✅").then(message => {
        message.delete(5100);
      });
    } else {
      message.channel.send("ببورە ئەم پێرمیشنەت نییەMANAGE ROLES |❌");
    }
  }
});

client.on("message", message => {
  if (message.content === prefix + "ccolor") {
    if (!message.channel.guild) {
      return;
    }
    if (message.member.hasPermission("MANAGE_ROLES")) {
      setInterval(function() {});
      let count = 0;
      let ecount = 0;
      for (let x = 1; x < 51; x++) {
        message.guild.createRole({ name: x, color: "RANDOM" });
      }
    }
  }
});
//by black jack

client.on("message", async message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "pussywank")) {
    const GIF = await neko.nsfw.pussyWankGif();
    const embed = new Discord.RichEmbed()
      .setColor("#202225")
      .setTitle(`${message.author.tag} here's a random pussy wank gif`)
      .setImage(GIF.url);
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "slots")) {
    let slot1 = ["🍏", "🍇", "🍒", "🍍", "🍅", "🍆", "🍑", "🍓"];
    let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let we;
    if (slots1 === slots2 && slots2 === slots3) {
      we = "Win!";
    } else {
      we = "Lose!";
    }
    message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  // -say
  if (command === "say") {
    message.delete();
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }

  if (command == "embed") {
    let say = new Discord.RichEmbed()
      .setDescription(args.join("  "))
      .setColor(0x23b2d6);
    message.channel.sendEmbed(say);
    message.delete();
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "setVoice")) {
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.reply("BBWRA ROLET NYA");
    if (
      !message.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply("BBWRA ROLET NYA");
    message.channel.send("ZHWRAKA DRWST BW");
    message.guild
      .createChannel(
        `Voice Online : [ ${
          message.guild.members.filter(m => m.voiceChannel).size
        } ]`,
        "voice"
      )
      .then(c => {
        console.log(
          `Voice online channel setup for guild: \n ${message.guild.name}`
        );
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(function() {
          c.setName(
            `Voice Online : [ ${
              message.guild.members.filter(m => m.voiceChannel).size
            } ]`
          );
        }, 1000);
      });
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "setCount")) {
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.reply("BBWRA AW ROLAT NYA");
    if (
      !message.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply("BBWRA AW ROLAT NYA");
    message.channel.send("ZHWRAKA DRWST BW");
    message.guild
      .createChannel(
        `Members Count : [ ${message.guild.members.size} ]`,
        "voice"
      )
      .then(c => {
        console.log(
          `Count Members channel setup for guild: \n ${message.guild.name}`
        );
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(function() {
          c.setName(`Members Count :  ${message.guild.memberCount} `);
        }, 1000);
      });
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "setTime")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.reply("BBWRA ROLET NYA");
    if (
      !message.guild
        .member(client.user)
        .hasPermission(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply("BBWRA ROLET NYA");
    message.channel.send("ZHWRAKA DRWST BW");
    message.guild.createChannel("?? - Time  00", "voice").then(c => {
      console.log(`Time channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        var currentTime = new Date(),
          hours = currentTime.getHours() + 3,
          minutes = currentTime.getMinutes(),
          seconds = currentTime.getSeconds(),
          years = currentTime.getFullYear(),
          month = currentTime.getMonth(),
          day = currentTime.getDate(),
          week = currentTime.getDay();

        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        var suffix = "AM";
        if (hours >= 12) {
          suffix = "PM";
          hours = hours - 12;
        }
        if (hours == 0) {
          hours = 12;
        }

        c.setName("?? - Time   ?" + hours + ":" + minutes + " " + suffix + "?");
      }, 1000);
    });
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "setDate")) {
    var currentTime = new Date(),
      years = currentTime.getFullYear(),
      month = currentTime.getMonth() + 1,
      day = currentTime.getDate(),
      week = currentTime.getDay();
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.reply("? **ليس لديك الصلاحيات الكافية**");
    if (
      !message.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply("? **ليس معي الصلاحيات الكافية**");
    message.channel.send("?| **تم عمل الروم بنجاح**");
    message.guild
      .createChannel(
        "?? - Date " + "?" + day + "-" + month + "-" + years + "?",
        "voice"
      )
      .then(c => {
        console.log(`Date channel setup for guild: \n ${message.guild.name}`);
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(function() {
          c.setName("?? - Date " + "?" + day + "-" + month + "-" + years + "?");
        }, 1000);
      });
  }
});
client.on('message', message => {
         if (message.content === prefix + "date") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『TIME AND DATE』")
                .setColor('RANDOM')
                .setFooter("BLACK BOT")
                .setFooter(message.author.username, message.author.avatarURL)
                 .addField('Time',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
              
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });
client.on("message", async message => {
  var moment = require("moment");
  if (message.content.startsWith(prefix + "setDays")) {
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.reply("ببورە ئەو رۆلەت نیە");
    if (
      !message.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply("? **ليس معي الصلاحيات الكافية**");
    message.channel.send("?| **تم عمل الروم بنجاح**");
    message.guild
      .createChannel(`Day : ${moment().format("dddd")}`, "voice")
      .then(c => {
        console.log(`Day channel setup for guild: \n ${message.guild.name}`);
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(function() {
          c.setName(`?? - Day : ?${moment().format("dddd")}?`);
        }, 1000);
      });
  }
});

client.on('typingStart', (ch, user) => {
      if(user.presence.status === 'ofline') {
 
          ch.send(`${user}(:    خۆت ۆنلاین کەوە ساقیت`)    
          .then(msg => {
              msg.delete(10000)
          })
      }
  })

client.on("message", message => {
  if (message.content === prefix + "premium") {
    var start = moment()[(2019, 8, 6)];
    var end = moment([2019, 9, 6]);
    let embed = new Discord.RichEmbed().setColor("BLACK")
      .setDescription(`Today is: \`${moment().format("dddd, MMMM Do YYYY")}\`
School Date: \`2021/1/7\`
Time left: \`${moment("20190901", "YYYYMMDD", true).fromNow()}\``);
    message.channel.send(embed);
  }
});
client.on("message", async message => {
  if (
    message.content.includes(
      "@everyone",
      "@here",
   
    )
  ) {
    if (message.member.hasPermission("ADMINISTRATOR")) return;
    if (!message.channel.guild) return;
    message.delete();
    var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
             CONNECT: false,
            SPEAK: false,
            ADD_REACTIONS: false,
             READ_MESSAGES: false
            
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
    message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted menition")
      .addField(
        `**  You Have Been Muted **`,
        `**Reason : type meniton everyone**`
      )
      .setColor("RED")
      .setThumbnail(`${message.author.avatarURL}`)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setFooter(`${message.guild.name} `);
    message.channel.send(embed500);
  }
});


client.on("message", async message => {
  if (
    message.content.includes(
      "ker",
      "Kerm",
      "kerm",
      "maza",
      "qn",
      "qwn",
      "daykt",
      "dakt",
      "daikt",
      "bgem",
      "gawad",
      "daykt",
      "دایکت"
    )
  ) {
    
    if (!message.channel.guild) return;
    message.delete();
    var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "ZALAMY PSHT MOBILE",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            CONNECT: false,
           SPEAK: false,
           ADD_REACTIONS: false,
           READ_MESSAGES: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
    message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted BAD WORDS")
      .addField(
        `**  You Have Been Muted **`,
        `**Reason : Using  bad word**`
      )
      .setColor("BLACK")
      .setThumbnail(`${message.author.avatarURL}`)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setFooter(`${message.guild.name} `);
    message.channel.send(embed500);
  }
});

client.on('message', message => {
  if(message.guild) {
if(message.content.startsWith(prefix + "kick")) {
if(!message.member.hasPermission('ADMINISTRATOR'))  return message.channel.send(" **you need the** ``Administrator`` **permission!**").then(msg => msg.delete(3000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))   return message.channel.send(  " **I need the** ``Mange_Messages ``  **permission!** ").then(msg => msg.delete(3000));
var mention= message.mentions.members.first()
  if(!mention) return message.channel.send(`** MENTION SOMEONE : :no_entry_sign: **`)
  let edward = new Discord.RichEmbed()
  .setAuthor(message.author.username,message.author.avatarURL)
.setDescription(`**${mention} | Has been Kicked From The Server! **`)
    .setColor('#000000').setColor('#36393e')
.setTimestamp()

  .setFooter(mention.user.username,mention.user.avatarURL)
    mention.kick().then((member) => {
            // Successmessage
            message.channel.sendEmbed(edward);
        }).catch(error => {
             
      let errora = new Discord.RichEmbed()
  .setColor('#000000').setColor('#36393e')
      .setDescription(`**I Cant Kick ${mention} Its `+"``"+`${error}`+"``"+`**`)
            message.channel.sendEmbed(errora)
    })
}
}});



client.on('message', message => {
  
if(message.content.startsWith(prefix + "ban")) {
if(!message.member.hasPermission('ADMINISTRATOR'))  return message.channel.send(" **you need the** ``Administrator`` **permission!**").then(msg => msg.delete(3000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))   return message.channel.send(  " **I need the** ``Mange_Messages ``  **permission!** ").then(msg => msg.delete(3000));
var mention= message.mentions.members.first()
  if(!mention) return message.channel.send(`** MENTION SOMEONE : :no_entry_sign: **`)
  let edward = new Discord.RichEmbed()
  .setAuthor(message.author.username,message.author.avatarURL)
.setDescription(`**${mention} | Has been Banned From The Server! **`)
    .setColor('#000000').setColor('#36393e')
.setTimestamp()

  .setFooter(mention.user.username,mention.user.avatarURL)
   mention.ban().then((member) => {
            // Successmessage
            message.channel.sendEmbed(edward);
        }).catch(error => {
             
      let errora = new Discord.RichEmbed()
  .setColor('#000000').setColor('#36393e')
      .setDescription(`**I Cant Ban ${mention} Its `+"``"+`${error}`+"``"+`**`)
            message.channel.sendEmbed(errora)
    })
}});
client.on('message', message => {
	if(message.content.startsWith(prefix + 'quran')) {
		message.delete();
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**بچۆ ڤۆیسێک**`);

	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setFooter("صدقه جاريه للجميع", 'https://cdn.discordapp.com/avatars/474687430872793089/692c2796377c84d4edee0dcd1b59d7a9.jpg?size=128')
      .setDescription(`
     🕋 اوامر بوت القرآن الكريم 🕋
🇦 القرآن كاملاً ماهر المعيقلي
🇧 سورة البقرة كاملة للشيخ مشاري العفاسي
🇨 سورة الكهف كاملة بصوت مشارى بن راشد العفاسي
⏹ لإيقاف القرآن الكريم
🇩 القرآن كاملاً عبدالباسط عبدالصمد
🇪 القرآن كاملاً ياسر الدوسري
🇫 سورة الواقعه بصوت الشيخ مشاري بن راشد العفاسي`)

	message.channel.sendEmbed(embed).then(msg => {
			msg.react('🇦')
		.then(() => msg.react('🇧'))
		.then(() => msg.react('🇨'))
		.then(() => msg.react('⏹'))
		.then(() => msg.react('🇩'))
		.then(() => msg.react('🇪'))
		.then(() => msg.react('🇫'))

// Filters
	let filter1 = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
	let filter2 = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
	let filter3 = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
	let filter4 = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;
	let filter5 = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
	let filter6 = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
	let filter7 = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;

// Collectors
	let collector1 = msg.createReactionCollector(filter1, { time: 120000 });
	let collector2 = msg.createReactionCollector(filter2, { time: 120000 });
	let collector3 = msg.createReactionCollector(filter3, { time: 120000 });
	let collector4 = msg.createReactionCollector(filter4, { time: 120000 });
	let collector5 = msg.createReactionCollector(filter5, { time: 120000 });
	let collector6 = msg.createReactionCollector(filter6, { time: 120000 });
	let collector7 = msg.createReactionCollector(filter7, { time: 120000 });

// Events
collector1.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=Ktync4j_nmA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
   });
});
collector2.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=qFq5h4wtjaM&t=30s", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector3.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=8UWKiKGQmsE", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector4.on('collect', r => {
	if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم إيقاف القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
});
collector5.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=vqXLGtZcUm8", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector6.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=WYT0pQne-7w", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector7.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=LTRcg-gR78o", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
})
}
});



 

  
    
        

      
            
 
   

/*
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
*/


/*
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
*/




client.login(process.env.BOT_TOKEN);
