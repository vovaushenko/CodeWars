/**
 * @param {string} s
 * @return {number}
 */
var longestSemiRepetitiveSubstring = function (s) {
	let max = -Infinity;

	for (let i = 0; i < s.length; i++) {
		const stack = [];
		let stackHasConsecutive = false;

		for (let j = i; j < s.length; j++) {
			stack.push(s[j]);
			if (stack.length > 1) {
				const l1 = stack.at(-1);
				const l2 = stack.at(-2);
				if (l1 === l2) {
					if (stackHasConsecutive) break;
					stackHasConsecutive = true;
				}
			}
			max = Math.max(max, stack.length);
		}
	}
	return max;
};
