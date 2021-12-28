// 1441. Build an Array With Stack Operations
/*
You are given an array target and an integer n.

In each iteration, you will read a number from list = [1, 2, 3, ..., n].

Build the target array using the following operations:

"Push": Reads a new element from the beginning list, and pushes it in the array.
"Pop": Deletes the last element of the array.
If the target array is already built, stop reading more elements.
Return a list of the operations needed to build target. The test cases are generated so that the answer is unique.
*/
const buildArray = (target, n) => {
	const targetArray = Array.from({ length: n }, (_, id) => ++id);
	const map = target.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

	const res = [];
	for (const number of targetArray) {
		if (number > target[target.length - 1]) {
			break;
		}
		if (number in map) {
			res.push('Push');
		} else {
			res.push('Push', 'Pop');
		}
	}
	return res;
};
