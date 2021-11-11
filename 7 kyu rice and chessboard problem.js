// https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7

const squaresNeeded = (grains) => {
	let square = 0;
	let current = 1;
	while (current <= grains) {
		square++;
		current = current * 2;
	}

	return square;
};
