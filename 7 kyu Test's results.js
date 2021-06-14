// https://www.codewars.com/kata/599db0a227ca9f294b0000c8

const testResult = (arr) => {
	const result = [];
	const average = parseFloat(
		(arr.reduce((total, mark) => total + mark, 0) / arr.length).toFixed(3)
	);
	result.push(average);

	const dictionary = arr.reduce(
		(dict, mark) => (
			mark >= 9 ? dict['h']++ : mark <= 6 ? dict['l']++ : dict['a']++, dict
		),
		{ h: 0, a: 0, l: 0 }
	);
	result.push(dictionary);

	if (!dictionary['a'] && !dictionary['f']) result.push('They did well');

	return result;
};
