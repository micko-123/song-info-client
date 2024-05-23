const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");

const url = "https://song-info-client.vercel.app/";
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Welcome"), {
  reply_markup: {
    keyboard: [[{ text: "web_app", web_app: { url } }]],
  },
});

bot.launch();

// // Enable graceful stop
// process.once("SIGINT", () => bot.stop("SIGINT"));
// process.once("SIGTERM", () => bot.stop("SIGTERM"));
