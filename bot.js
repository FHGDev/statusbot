const discord = require('discord.js')
const bot = new discord.Client()
const prefix = ".."

bot.on('ready', () => {
  bot.user.setActivity('Dev mode | Don\'t Ping.', {type: "PLAYING"})
  console.log(`Selfbot Started at ${Date()}`)
})

bot.on("message", message => {
  let mArray = message.content.split(" ")
  let args = mArray.slice(1)
  
  if (!message.author.id == 242734840829575169) return;
  
  if (message.content == prefix + "setname") {
    bot.user.setUsername(args.join(" ")) 
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
    let [type, game] = args
    bot.user.setActivity(game, { type: type.toUppercase() })
  }
})

bot.login(process.env.tok)
