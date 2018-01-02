const discord = require('discord.js')
const bot = new discord.Client()

bot.on("ready", () => {
  bot.user.setGame(`Visual Studio Code`)
})

bot.login(process.env.tok)
