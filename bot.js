const discord = require('discord.js')
const bot = new discord.Client()
const prefix = ".."

bot.on('ready', () => {
  bot.user.setActivity('Linkin Park', {type: "LISTENING"})
  console.log(`Selfbot Started at ${new Date().toString()}`)
})

bot.on("message", message => {
  let args = message.content.split(' ').slice(0)
  if (!message.author.id == 242734840829575169) return;
  
  if (message.content == prefix + "dnd") {
    message.delete(1000)
    bot.user.setStatus(`dnd`)
  } 
  if (message.content == prefix + "online") {
    message.delete(1000) 
    bot.user.setStatus(`online`)
  }
  if (message.content == prefix + "idle") {
    message.delete(1000)
    bot.user.setStatus(`idle`)
  }
  if (message.content == prefix + "inv") {
    message.delete(1000)
    bot.user.setStatus(`invisible`)
  }
})

bot.login(process.env.tok)
