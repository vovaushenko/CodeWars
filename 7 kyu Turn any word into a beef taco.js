// https://www.codewars.com/kata/59414b46d040b7b8f7000021

const TACO_CODE = {
	t: 'tomato',
	l: 'lettuce',
	c: 'cheese',
	g: 'guacamole',
	s: 'salsa',
};

const tacofy = (word) => [
	'shell',
	...[...word.toLowerCase()]
		.map((char) =>
			TACO_CODE[char] ? TACO_CODE[char] : /[aeiou]/gi.test(char) ? 'beef' : ''
		)
		.filter((taco) => taco),
	'shell',
];
