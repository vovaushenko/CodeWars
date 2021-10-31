// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

const add = (a, b) => {
	let longest = a.length >= b.length ? a : b;
	let shortest = a.length < b.length ? a : b;
	let difference = longest.length - shortest.length;
	longest = [...longest];
	shortest = [...'0'.repeat(difference).split(''), ...shortest];

	const sum = [];
	let carry = 0;
	for (let j = longest.length - 1; j >= 0; j--) {
		let tempSum = 0;
		if (carry === 1) {
			tempSum += carry;
			carry = 0;
		}
		tempSum += +shortest[j] + +longest[j];

		if (tempSum >= 10) {
			sum.push(tempSum - 10);
			carry += 1;
		} else {
			sum.push(tempSum);
		}
	}
	if (carry === 1) sum.push(carry);

	return sum.reverse().join('');
};

console.log(add('1372', '69'));
