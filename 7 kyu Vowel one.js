// https://www.codewars.com/kata/580751a40b5a777a200000a1

const vowelOne = (str) =>
	[...str].reduce(
		(bin, char) => ('aeiouAEIOU'.includes(char) ? bin + '1' : bin + '0'),
		''
	);
