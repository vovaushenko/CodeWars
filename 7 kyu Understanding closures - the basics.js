// https://www.codewars.com/kata/56b71b1dbd06e6d88100092a

function buildFun(n) {
	const res = [];

	for (let i = 0; i < n; i++) {
		res.push(function () {
			return i;
		});
	}
	return res;
}
