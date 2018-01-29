const discord = require('discord.js')
const bot = new discord.Client()
const prefix = ".."

bot.on('ready', () => {
  bot.user.setActivity('Linkin Park', {type: "LISTENING"})
  console.log(`Selfbot Started at ${new Date().getTime().toString()}`)
})

bot.on("message", message => {
  let args = message.content.split(' ').slice(0)
  
  if (message.content == prefix + "dnd") {
    bot.user.setStatus(`dnd`)
  } 
  if (message.content == prefix + "online") {
    bot.user.setStatus(`online`)
  }
  if (message.content == prefix + "idle") {
    bot.user.setStatus(`idle`)
  }
  if (message.content == prefix + "inv") {
    bot.user.setStatus(`invisible`)
  }
  if (message.content == prefix + "changestatus") {
    let game = args[0,1,2]
    let type = args[3]
    bot.user.setActivity(game, {type: type})
  }
})

bot.login(process.env.tok)
