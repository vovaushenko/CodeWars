const isLeapYear = (y) => y % 400 == 0 || (y % 4 == 0 && y % 100 != 0);

const dayOfYear = (date) => {
	const [year, month, day] = date.split('-').map(Number);
	const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if (isLeapYear(year)) DAYS_IN_MONTH[2] = 29;
	let prevDays = 0;

	for (let m = 1; m < month; m++) prevDays += DAYS_IN_MONTH[m];
	return prevDays + day;
};
