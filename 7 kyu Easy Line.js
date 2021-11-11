const easyLine = (n) => {
	let rowSum = 1;
	for (var i = 1; i <= n; i++) {
		rowSum *= (n + i) / i;
	}
	return Math.round(Math.log(sum));
};
