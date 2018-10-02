const TeleBot = require('telebot');

const bot = new TeleBot(`633444483:AAHRoLolxGilji5XvsID8LtqiNNqG3OtkhQ`);
const myId = `69462703`;
const chatId = `-111585222`;
const sendMsg = function (news) {
	bot.sendMessage(chatId, news);
};

bot.start();

module.exports = {
	sendMsg
};