// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/

const getLucky = (s, k, counter = 0) =>
	counter === k
		? s
		: counter === 0
		? getLucky(
				sumOfDigits([...s].map((l) => l.charCodeAt(0) - 96).join('')),
				k,
				counter + 1
		  )
		: getLucky(sumOfDigits(s), k, counter + 1);

const sumOfDigits = (s) => String([...s].reduce((s, c) => s + +c, 0));

console.log(sumOfDigits('262124'));

console.log(getLucky('iiii', 1));
