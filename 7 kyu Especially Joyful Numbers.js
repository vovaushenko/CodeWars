// https://www.codewars.com/kata/570523c146edc287a50014b1

const numberJoy = (n) => {
	const digitsSum = [...(n + '')].reduce((sum, digit) => sum + +digit, 0);
	return digitsSum * reversedNumber(digitsSum) === n;
};

const reversedNumber = (num) => +[...(num + '')].reverse().join('');
