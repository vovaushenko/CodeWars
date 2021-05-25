// https://www.codewars.com/kata/5a19226646d843de9000007d

const countConsonants = (str) =>
	[
		...new Set(
			[...str.replace(/[^a-z]/gi, '').toLowerCase()].filter(
				(c) => !'aeiou'.includes(c)
			)
		),
	].length;

console.log(countConsonants('5FeDi'));

console.log('5FeDi'.replace(/[^a-z]/gi, ''));
