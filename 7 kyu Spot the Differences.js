// https://www.codewars.com/kata/596776fbb4f24d0d82000141
const f = (x, cc) => {
	let values = Object.values(cc);
	for (let i = 0; i < values.length; i++) {
		if (values[i] === x && values[i + 1] === 0) return 0;
		if (values[i] === x) return values[i + 1] || values[0];
	}
};
