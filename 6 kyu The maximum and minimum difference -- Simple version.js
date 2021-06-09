// https://www.codewars.com/kata/583c5469977933319f000403

const maxAndMin = (a1, a2) => {
	let minDiff = Infinity;
	let maxDiff = -Infinity;

	for (let num1 of a1) {
		for (let num2 of a2) {
			minDiff = Math.min(minDiff, Math.abs(num1 - num2));
			maxDiff = Math.max(maxDiff, Math.abs(num1 - num2));
		}
	}

	return [maxDiff, minDiff];
};
