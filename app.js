const ALPHABET = [
	'.-',
	'-...',
	'-.-.',
	'-..',
	'.',
	'..-.',
	'--.',
	'....',
	'..',
	'.---',
	'-.-',
	'.-..',
	'--',
	'-.',
	'---',
	'.--.',
	'--.-',
	'.-.',
	'...',
	'-',
	'..-',
	'...-',
	'.--',
	'-..-',
	'-.--',
	'--..',
];

const uniqueMorseRepresentations = (words) =>
	[
		...new Set(
			words.map(
				(wrd) => [...wrd].map((c) => ALPHABET[c.charCodeAt(0) - 97]).join(''),
				''
			)
		),
	].length;

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']));
