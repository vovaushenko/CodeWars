// https://leetcode.com/problems/guess-number-higher-or-lower/
// 374. Guess Number Higher or Lower
/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns 3 possible results:

-1: The number I picked is lower than your guess (i.e. pick < num).
1: The number I picked is higher than your guess (i.e. pick > num).
0: The number I picked is equal to your guess (i.e. pick == num).
Return the number that I picked.
*/
const guessNumber = (n) => {
	let start = 0;
	let end = n;
	let mid = Math.floor((start + end) / 2);

	while (true) {
		let currentGuess = guess(mid);
		if (currentGuess === 0) return mid;
		if (currentGuess === -1) end = mid - 1;
		if (currentGuess === 1) start = mid + 1;
		mid = Math.floor((start + end) / 2);
	}
};
