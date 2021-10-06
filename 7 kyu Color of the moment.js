// https://www.codewars.com/kata/55f416b2019f552cb0000086/train/javascript
const hexToNum = (hex) => parseInt(hex, 16);
const addTrainlingZero = (n) => (String(n).length < 2 ? `${0}${n}` : n);
const hexToTime = (hexCode) => {
	const [hours, minutes, seconds] = [
		hexToNum(hexCode.slice(1, 3)),
		hexToNum(hexCode.slice(3, 5)),
		hexToNum(hexCode.slice(5, 7)),
	];
	if (hours > 23 || minutes > 59 || seconds > 59) throw new Error('💥');

	return [hours, minutes, seconds]
		.reduce((r, c) => r.concat(addTrainlingZero(c)), [])
		.join(':');
};
