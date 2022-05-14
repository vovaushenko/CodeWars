// https://www.algoexpert.io/questions/Largest%20Range

// BRUTE FORCE

const largestRange = (arr) => {
	if (arr.length === 1) return [1, 1];
	const sorted = [...new Set(arr)].sort((a, b) => a - b);
	let longestRange = [];
	let maxLength = 0;

	for (let i = 0; i < sorted.length; i++) {
		const tempRange = [sorted[i]];
		for (let j = i + 1; j < sorted.length; j++) {
			const prev = tempRange[tempRange.length - 1];
			const current = sorted[j];

			if (current - prev === 1) {
				tempRange.push(current);
				console.log(tempRange);
			} else {
				if (tempRange.length > maxLength) {
					maxLength = tempRange.length;
					longestRange = [...tempRange];
				}
				break;
			}
			if (j === sorted.length - 1) {
				if (tempRange.length > maxLength) {
					maxLength = tempRange.length;
					longestRange = [...tempRange];
				}
			}
		}
	}

	return [longestRange[0], longestRange[longestRange.length - 1]];
};

console.log(largestRange([1, 1, 1, 3, 4]));
