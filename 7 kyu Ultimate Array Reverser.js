// https://www.codewars.com/kata/5c3433a4d828182e420f4197

const ultimateReverse = (s) => {
	let revesedAndCompressed = s
		.map((w) => [...w].reverse().join(''))
		.reverse()
		.join('');

	let ultimatelyRevesedArr = [];
	let prevCharSum = 0;

	for (let i = 0; i < s.length; i++) {
		let chunk = revesedAndCompressed.substring(
			prevCharSum,
			s[i].length + prevCharSum
		);

		prevCharSum += s[i].length;
		ultimatelyRevesedArr.push(chunk);
	}

	return ultimatelyRevesedArr;
};
