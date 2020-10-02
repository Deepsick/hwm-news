const parser = require(`./parser`);

const FORUM_LINK = `http://www.heroeswm.ru/forum_thread.php?id=2`;
const DOMEN = `http://www.heroeswm.ru/`;

const startServer = function () {
		parser.getNews(FORUM_LINK, DOMEN);
};

startServer();