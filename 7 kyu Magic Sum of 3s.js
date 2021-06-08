// https://www.codewars.com/kata/57193a349906afdf67000f50

const magicSum = (numbers) =>
	Array.isArray(numbers)
		? numbers
				.filter((n) => hasThree(andIsOdd(n)))
				.reduce((sum, properNum) => sum + properNum, 0)
		: 0;

const andIsOdd = (num) => !!(num % 2) && num;
const hasThree = (num) => [...(num + '')].includes('3');
