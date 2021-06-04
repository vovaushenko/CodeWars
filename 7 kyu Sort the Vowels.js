// https://www.codewars.com/kata/59e49b2afc3c494d5d00002a

const sortVowels = (s) =>
	typeof s === 'string'
		? [...s].map((c) => (/[aeiou]/gi.test(c) ? `|${c}` : `${c}|`)).join('\n')
		: '';
