const moment = require(`moment-timezone`);

const getFormattedDate = (timezone) => {
	const fullDate = moment(new Date()).tz(timezone).format();
	const currentDate = fullDate.split(`T`)[0];
	const separation = `-`;
	const date = {
		day: currentDate.split(separation)[2],
		month: currentDate.split(separation)[1], 
		year: currentDate.split(separation)[0]
	};

	const newSeparation = `.`;
	const formattedDate = `${date.day}${newSeparation}${date.month}${newSeparation}${date.year}`;
	return formattedDate;
};

module.exports = {
	getFormattedDate
};
