// https://leetcode.com/problems/three-divisors/

// 1952. Three Divisors
/*
Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

An integer m is a divisor of n if there exists an integer k such that n = k * m.
*/

const isThree = (n) => {
	let divisors = 0;
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) divisors++;
	}

	return divisors === 3;
};
