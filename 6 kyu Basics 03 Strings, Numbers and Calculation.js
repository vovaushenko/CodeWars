// https://www.codewars.com/kata/56b5dc75d362eac53d000bc8/train/javascript

const calculateString = (str) => {
	let pureStr = str.match(/[0-9+*-/.]/g, '');
	let operand = pureStr.find((o) => '+-*/'.includes(o));

	let [firstNum, secondNum] = pureStr.join('').split(operand);

	return Math.round(eval(`${firstNum}${operand}${secondNum}`)) + '';
};
