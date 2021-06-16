// https://www.codewars.com/kata/58067088c27998b119000451

const reverseFactorial = (num) => {
	let currentFactorial = 1;
	let current = 2;

	while (num > currentFactorial) {
		currentFactorial *= current;
		current++;
	}

	return currentFactorial === num ? `${--current}!` : 'None';
};
