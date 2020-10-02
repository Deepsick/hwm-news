const TeleBot = require('telebot');

const bot = new TeleBot(//YOUR TOKEN);
const chatId = //CHAT-ID;
const sendMsg =(news) => bot.sendMessage(chatId, news);

bot.start();

module.exports = {
	sendMsg
};