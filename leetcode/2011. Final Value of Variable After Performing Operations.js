// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
/*
There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.
*/
const finalValueAfterOperations = (operations) => {
	let res = 0;
	for (let op of operations) {
		op.includes('++') ? res++ : res--;
	}

	return res;
};
