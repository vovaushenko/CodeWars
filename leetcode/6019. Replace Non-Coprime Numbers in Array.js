//6019. Replace Non-Coprime Numbers in Array
/*
You are given an array of integers nums. Perform the following steps:

Find any two adjacent numbers in nums that are non-coprime.
If no such numbers are found, stop the process.
Otherwise, delete the two numbers and replace them with their LCM (Least Common Multiple).
Repeat this process as long as you keep finding two adjacent non-coprime numbers.
Return the final modified array. It can be shown that replacing adjacent non-coprime numbers in any arbitrary order will lead to the same result.

The test cases are generated such that the values in the final array are less than or equal to 108.

Two values x and y are non-coprime if GCD(x, y) > 1 where GCD(x, y) is the Greatest Common Divisor of x and y.
*/
const gcd = (a, b) => (!b ? a : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b) || 0;

const areCoprimes = (a, b) => gcd(a, b) === 1;

const replaceNonCoprimes = (nums) => {
	let [i, j] = [0, 1];
	while (j < nums.length) {
		if (!areCoprimes(nums[i], nums[j])) {
			const inject = lcm(nums[i], nums[j]);
			nums[i] = inject;
			nums.splice(j, 1);

			if (i && j) {
				j--;
				i--;
			}
		} else {
			i++;
			j++;
		}
	}
	return nums;
};
