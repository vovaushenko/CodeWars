//5993. Keep Multiplying Found Values by Two
/*
You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.

You then do the following steps:

If original is found in nums, multiply it by two (i.e., set original = 2 * original).
Otherwise, stop the process.
Repeat this process with the new number as long as you keep finding the number.
Return the final value of original.
*/
const findFinalValue = (nums, original) => {
	const map = nums.reduce((h, c) => ((h[c] = true), h), {});
	if (!(original in map)) return original;

	while (original in map) {
		if (!(original in map)) break;
		original = original * 2;
	}

	return original;
};
