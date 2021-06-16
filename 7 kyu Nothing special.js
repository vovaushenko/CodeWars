const nothingSpecial = (str) =>
	isValidString(str) ? str.replace(/[^a-z0-9\s]/gi, '') : 'Not a string!';

const isValidString = (s) => typeof s === 'string';
