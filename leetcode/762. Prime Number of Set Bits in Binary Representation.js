//* 762. Prime Number of Set Bits in Binary Representation
/*
Given two integers left and right, return the count of numbers in the inclusive range [left, right] having a prime number of set bits in their binary representation.

Recall that the number of set bits an integer has is the number of 1's present when written in binary.

For example, 21 written in binary is 10101 which has 3 set bits.
*/

let cache = {};

const isPrime = (num) => {
	if (cache[num] !== undefined) return cache[num];
	if (num === 1) return false;
	for (let i = 2; i < num; i++)
		if (num % i === 0) {
			cache[num] = false;
			return false;
		}
	cache[num] = true;
	return true;
};

const isPrimeBitWise = (n) =>
	isPrime([...n.toString(2)].reduce((s, v) => (v === '1' ? s + 1 : s + 0), 0));

const countPrimeSetBits = (left, right) => {
	let count = 0;
	while (left <= right) {
		if (isPrimeBitWise(left)) {
			count++;
		}
		left++;
	}
	return count;
};
