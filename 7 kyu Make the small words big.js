// https://www.codewars.com/kata/57b4dd38d2a31c75f7000299

const smallWordHelper = (sentence) =>
	sentence
		.split(' ')
		.map((w) => (w.length <= 3 ? w.toUpperCase() : w.replace(/[aeiou]/gi, '')))
		.join(' ');
