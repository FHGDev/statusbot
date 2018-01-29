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
    if (!args) {
      bot.user.setActivity('', {type: "PLAYING"})
    } 
    if (!args[0]) {
      return
    } else {
      if (args[1]) {
        let game = args[1]
        let type = args[2]
        bot.user.setActivity(game, {type: type})
        console.log(`Set the Selfbot's Activity to ${type} ${game}!`)
      }
      if (!args[1]) {
        let game = args[2]
        let type = args[3]
        bot.user.setActivity(game, {type: type})
        console.log(`Set the Selfbot's Activity to ${type} ${game}!`)
      }
      if (!args[2]) {
        let game = args[3]
        let type = args[4]
        bot.user.setActivity(game, {type: type})
        console.log(`Set the Selfbot's Activity to ${type} ${game}`)
      }
      if (!args[3]) {
        let game=args[4],
        type=args[5]
        bot.user.setActivity(game, {type: type})
        console.log(`Set the Selfbot's Activity to ${type} ${game}!`)
      }
      if (!args[3]) {
        return;
      }
    }
  }
})

bot.login(process.env.tok)
