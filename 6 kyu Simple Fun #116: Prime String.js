// https://www.codewars.com/kata/589d36bbb6c071f7c20000f7

const primeString = (str) => {
	let half = str.slice(0, ~~(str.length / 2));

	for (let i = 1; i <= half.length; i++) {
		let chunk = half.slice(0, i);

		if (chunk.repeat(str.length / chunk.length) === str) return false;
	}
	return true;
};
