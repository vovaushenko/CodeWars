// https://www.codewars.com/kata/5cd4aec6abc7260028dcd942

const shortestStepsToNum = (num) => {
	let steps = 0;
	while (num > 1) {
		num % 2 === 0 ? (num = num / 2) : (num = num - 1);
		steps++;
	}

	return steps;
};
