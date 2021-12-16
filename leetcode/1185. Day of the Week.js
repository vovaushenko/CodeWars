// 1185. Day of the Week
/*
Given a date, return the corresponding day of the week for that date.

The input is given as three integers representing the day, month and year respectively.

Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.
*/

const dayOfTheWeek = (day, month, year) => {
	const d = new Date(year, month - 1, day);
	return d.toLocaleString('en', { weekday: 'long' });
};
