// 70. Climbing Stairs

/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

const climbStairs = (n, memo = []) => {
	if (memo[n] !== undefined) return memo[n];
	if (n === 0) return 1;
	if (n < 0) return 0;

	let res = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
	memo[n] = res;

	return memo[n];
};
