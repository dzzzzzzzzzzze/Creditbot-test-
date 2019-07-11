const Discord = require("discord.js");
const client = new Discord.Client();

const myid = ['478975894061449216'];
const prefix = ['s'];

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});

client.on('message',message => {
if(message.content === prefix+'$daily')
message.channel.send('$daily')
}
});          
client.on('message',message => {
if(message.content === prefix+'$credits')
message.channel.send('$credits')
}
});          
client.on('message',message => {
if(message.content === prefix+'$rep')
message.channel.send('$rep')
}
});          

client.on('message',message => {
if(message.content === prefix+'#daily')
message.channel.send('#daily')
}
});          
client.on('message',message => {
if(message.content === prefix+'#credits')
message.channel.send('#credits')
}
});          

client.on('message', message => {
    if(message.content === prefix+'#rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Sexy.');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});



client.login(process.env.TOKEN);

