require("dotenv").config()

const Discord = require('discord.js')
const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MEMBERS"
  ],

  partials:[
    "MESSAGE"
  ]
  
})

const BOT_PREFIX = '!'
const ONETAP_COMMAND = 'Onetap'

client.on('ready' , () => {
  console.log('Our bot is ready to go !!!')
})

client.on('messageDelete', msg => {
  msg.channel.send("Stop deleting messages!!")
})

client.on('message' , msg => {
  if(msg.content === 'Ping') {
    msg.reply('Pong!')
  }

  else if(msg.content == "I love Beluga") {
    msg.react("❤️")
  }

  else if (msg.content === `${BOT_PREFIX}${ONETAP_COMMAND}`) {
    modUser(msg.member)
  }

  function modUser(member) {
    member.roles.add("870536088647762011");
  }
})

client.login(process.env.BOT_TOKEN)