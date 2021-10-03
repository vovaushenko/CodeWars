const howManyYears = (date1, date2) =>
	Math.abs(getYear(date1) - getYear(date2));

const getYear = (date) => date.split('/')[0];
