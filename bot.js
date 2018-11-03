const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const jimp = require('jimp');
const Canvas = require('canvas');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("PROFESSIONALS",{type: 'WATCHING'});
  
  });
var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on('guildMemberAdd', member => {
const channel = member.guild.channels.find("name","chat")
if (member.user.bot) return;
var Canvas = require('canvas')
var jimp = require('jimp')
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
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
const w = ['./no2.png'];
              let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 557, 241);

      })
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);

                                    ctx.font = '30px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 277, 138);

                                    ctx.font = '20px Arial Bold';
                              ctx.fontSize = '15px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(`${hours}:${minutes}:${seconds} ${suffix}`, 314, 200);
                                                     var guild;
    while (!guild)
                        guild = member.guild
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
                        member.guild.fetchInvites().then(invs => {
      let user = Invite.inviter;
      let invites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = invites.reduce((p, v) => v.uses + p, 0);

 channel.send(`**Invited By** : **${Invite.inviter} (${inviteCount})**`);

})
}
            dat[Inv] = Invite.uses;
})
})
                              //NAMEً
                              ctx.font = '40px Bebas';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`Welcome To`, 260, 44);


                              //NAMEً
                              ctx.font = '30px Bebas';
                              ctx.fontSize = '22px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`${member.guild.name}`, 315, 76);

                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                   ctx.closePath();

                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();
 channel.sendFile(canvas.toBuffer())
                          })
})
});

/////////////////////////////////////////////////////

client.on('guildMemberAdd', member => {
if(member.user.bot) {
member.user.ban();
let c = member.guild.channels.find(r => r.name === "chat");
if(c) return;
if(c) return c.send(`:no_entry: | Banned ${member} , Reason: \`AntiBots - Protection\``);
}
});

////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("**:link: تم أرسال الرابط برسالة خاصة**")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** مدة الرابط : ساعه | عدد استخدامات الرابط : 5 **")
      message.author.sendEmbed(Embed11)
    }
});

///////////////////////////////////////////////////////////////////////////////////////

client.on("message", message => {
    var prefix = "-";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✅| جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('📝| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    });

////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
var prefix = "-";
 
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == '422403573767340043' ) return;
 
if (message.content.startsWith(prefix + 'sp')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
} else
 
if (message.content.startsWith(prefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/sytra_ayman");
    message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
} else
 
if (message.content.startsWith(prefix + 'sw')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'sl')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 'sname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
  return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
} else

if (message.content.startsWith(prefix + 'savt')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
}
});

client.login(process.env.BOT_TOKEN);
