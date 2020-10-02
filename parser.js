const date = require(`./date`);
const telebot = require(`./telebot`);

const needle = require(`needle`);
const cheerio = require("cheerio");

const TIMEZONE = `Europe/Moscow`;
/**
 * Scrub our news and save it to news-data.json
 */
const getNews = function () {
	const FORUM_LINK = `http://www.heroeswm.ru/forum_thread.php?id=2`;
	const DOMEN = `http://www.heroeswm.ru/`;
	needle.get(FORUM_LINK, (err, res) => {
		if (err) throw(err);

		const formattedDate = date.getFormattedDate(TIMEZONE);
		
		let $ = cheerio.load(res.body);
		let linkWithoutDomen;
		const links = $(`.table3 tr td:first-child a`);
		links.each((index, link) => {
			if ($(link).text().startsWith(`[${formattedDate}]`)) {
				linkWithoutDomen = $(link).attr(`href`);
			}
		});

		const newsLink = DOMEN + linkWithoutDomen;
		needle.get(newsLink, (err, res) => {
			if (res) {
				$ = cheerio.load(res.body);
				const news = $(`.table3 tr:nth-child(3)`).text();
				telebot.sendMsg(news);
			}
		});
	});

};


module.exports = {
	getNews
};



