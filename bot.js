const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['403395428722278410'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus("dnd")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('.pl')) {
client.user.setActivity(argresult, {type:'Playing'});
    message.channel.send(` تم تغير البلاينق ألى **${argresult} \** `)
} else 
if (message.content.startsWith('.st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/meercy");
   message.channel.send(` تم تغير الستريمنق ألى **${argresult} \** `)
} else
if (message.content.startsWith('.ls')) {
   client.user.setActivity(argresult, {type:'Listening'});
    message.channel.send(` تم تغير اللسننق ألى **${argresult} \** `)
} else
if (message.content.startsWith('.wt')) {
   client.user.setActivity(argresult, {type:'Watching'});
    message.channel.send(` تم تغير الواتشنق ألى **${argresult} \** `)
}
});

client.login(process.env.B);
