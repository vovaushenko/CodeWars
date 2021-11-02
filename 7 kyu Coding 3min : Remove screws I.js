// https://www.codewars.com/kata/5710a50d336aed828100055a

const sc = (screws) => {
	let sum = 1;
	for (let i = 1; i < screws.length; i++) {
		let prev = screws[i - 1];
		const current = screws[i];
		prev === current ? (sum += 2) : (sum += 7);
	}
	return sum;
};
