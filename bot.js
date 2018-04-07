const discord = require('discord.js')
const bot = new discord.Client()
const prefix = ".."

bot.on('ready', () => {
  bot.user.setActivity('Dev mode | Don\'t Ping.', {type: "PLAYING"})
  bot.user.setStatus(`dnd`)
  console.log(`Selfbot Started at ${Date()}`)
})

bot.on("message", message => {
  if (message.content.includes("discord.gg/")) {
    if (message.author.id == 251928361851551756) {
      message.channel.send("Alright, I warned you. I hate to do this, but I'm blocking you. :sob:")
      setTimeout(() => {
        message.author.block()
      }, 10000)
    }
  }
  let mArray = message.content.split(" ")
  let args = mArray.slice(prefix.length)
  
  if (!message.author.id == 242734840829575169) return;
  
  if (message.content == prefix + "setname") {
    bot.user.setUsername(args[0])
    message.delete(100)
  }
  
  if (message.content == prefix + "dnd") {
    message.delete(100)
    bot.user.setStatus(`dnd`)
  } 
  if (message.content == prefix + "online") {
    message.delete(100) 
    bot.user.setStatus(`online`)
  }
  if (message.content == prefix + "idle") {
    message.delete(100)
    bot.user.setStatus(`idle`)
  }
  if (message.content == prefix + "inv") {
    message.delete(100)
    bot.user.setStatus(`invisible`)
  }
  if (message.content == prefix + "setgame") {
    let game = args.join(' ')
    bot.user.setActivity(game, { type: "WATCHING" })
  }
})

bot.login(process.env.tok)
