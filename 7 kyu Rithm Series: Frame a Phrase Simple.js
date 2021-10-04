// https://www.codewars.com/kata/5867d76b36959fa4a400034e

const frame = (phrase, ch = '*') => {
	if (!phrase) return '****\n*  *\n*  *\n****';
	return [
		ch.repeat(phrase.length + 4),
		`${ch}${' '.repeat(phrase.length + 2)}${ch}`,
		`${ch} ` + phrase + ` ${ch}`,
		`${ch}${' '.repeat(phrase.length + 2)}${ch}`,
		ch.repeat(phrase.length + 4),
	].join('\n');
};
