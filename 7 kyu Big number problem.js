// https://www.codewars.com/kata/55f2f64faa2ffb24f6000005

const getNumberLength = (n) => {
	if (typeof n !== 'number') return 'wrong input';
	let length = +n.toString().slice(-2) + 1;
	return length < 21 ? 'wrong input' : length;
};
