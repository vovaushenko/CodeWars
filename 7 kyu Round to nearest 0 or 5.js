// https://www.codewars.com/kata/582f52208278c6be55000067

const nearestNumberDivByFive = (n) => {
	let res = [~~n, ~~n];
	while (res[0] % 5 !== 0) res[0]++;
	while (res[1] % 5 !== 0) res[1]--;

	return Math.abs(n - res[0]) < Math.abs(n - res[1]) ? res[0] : res[1];
};

const roundToFive = (nums) => nums.map((n) => nearestNumberDivByFive(n));
