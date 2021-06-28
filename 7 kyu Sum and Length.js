// https://www.codewars.com/kata/571965ccdf7fdb10a00000ea

const sumLength = (nums) =>
	`${nums.reduce((a, n) => (n > 0 ? (a += n) : (a += 0)), 0)} ${
		nums.filter((n) => n < 0).length +
		Math.round(nums.filter((n) => !n).length / 2)
	}`;
