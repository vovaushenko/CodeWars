// 2571. Minimum Operations to Reduce an Integer to 0
/*
You are given a positive integer n, you can do the following operation any number of times:

Add or subtract a power of 2 from n.
Return the minimum number of operations to make n equal to 0.

A number x is power of 2 if x == 2i where i >= 0.
*/
function minOperations(n) {
	let count = 0;
	while (n) {
		let m = Math.floor(Math.log2(n));
		n = Math.min(n - 2 ** m, 2 ** (m + 1) - n);
		count++;
	}
	return count;
}
