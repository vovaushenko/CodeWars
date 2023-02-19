// 2567. Minimum Score by Changing Two Elements
var minimizeSum = function (nums) {
	const sorted = [...nums].sort((a, b) => a - b);
	let max = Infinity;

	max = Math.min(max, sorted.at(-2) - sorted.at(1));
	max = Math.min(max, sorted.at(-3) - sorted.at(0));
	max = Math.min(max, sorted.at(-1) - sorted.at(2));

	return max;
};
