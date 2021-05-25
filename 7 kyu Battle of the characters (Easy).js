// https://www.codewars.com/kata/595519279be6c575b5000016

const stringPower = (s) =>
	[...s].reduce((weight, char) => weight + char.charCodeAt(0) - 64, 0);

const battle = (x, y) =>
	stringPower(x) > stringPower(y)
		? x
		: stringPower(y) > stringPower(x)
		? y
		: 'Tie!';
