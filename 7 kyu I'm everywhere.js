// https://www.codewars.com/kata/6097a9f20d32c2000d0bdb98

const i = (word) => {
	if (
		!word ||
		/^i/i.test(word) ||
		word[0].toUpperCase() !== word[0] ||
		(word.match(/[aeiou]/gi) || []).length >= word.length / 2
	)
		return 'Invalid word';

	return `i${word}`;
};
