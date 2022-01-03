require("dotenv").config()

const generateImage = require("./generateImage")

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

  else if (msg.content == "stupid") {
    msg.reply("no no no, i'm not stupid");
  }

  else if (msg.content == "you gay") {
    msg.reply("nope ur the one gay");
  }

  else if (msg.content == "lol") {
    msg.reply("HAHAHA");
  }

  else if (msg.content == "valo" || msg.content == "valo?") {
    msg.reply("Let's go!!")
  }

  else if (msg.content === `${BOT_PREFIX}${ONETAP_COMMAND}`) {
    modUser(msg.member)
  }

  function modUser(member) {
    member.roles.add("870536088647762011");
  }
})

const welcomeChannelId = "832225260052414479"

cilent.on("guildMemberAdd" , async (member) => {
  const img = await generateImage(member)
  member.guild.channels.cache.get(welcomeChannelId).send({
    content: `<@${member.id}> Welcome to the server!`,
    files: [img]
  })
})


client.login(process.env.BOT_TOKEN)