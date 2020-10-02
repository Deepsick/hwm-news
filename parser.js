const date = require(`./date`);
const telebot = require(`./telebot`);

const needle = require(`needle`);
const cheerio = require("cheerio");

/**
 * Scrub our news and save it to news-data.json
 */
const getNews = (link, domen) => {
	needle.get(link, (err, res) => {
		if (err) throw(err);

		const formattedDate = date.getFormattedDate();
		
		let $ = cheerio.load(res.body);
		let linkWithoutDomen;
		const links = $(`.table3 tr td:first-child a`);
		links.each((index, link) => {
			if ($(link).text().startsWith(`[${formattedDate}]`)) {
				linkWithoutDomen = $(link).attr(`href`);
			}
		});

		const newsLink = domen + linkWithoutDomen;
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



