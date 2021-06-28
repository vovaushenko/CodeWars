// https://www.codewars.com/kata/57293671c98f77e84b000065

const type = (val) => {
	if (Array.isArray(val)) return 'array';
	if (val instanceof Date) return 'date';
	if (val === null) return 'null';
	return typeof val;
};
