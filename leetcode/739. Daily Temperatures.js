const dailyTemperatures = (temperatures) => {
	const res = [];

	for (let i = 0; i < temperatures.length; i++) {
		let currentTemp = temperatures[i];

		for (let j = i + 1; j < temperatures.length; j++) {
			if (temperatures[j] > currentTemp) {
				res.push(j - i);
				break;
			}
			if (j === temperatures.length - 1) {
				res.push(0);
			}
		}
	}
	res.push(0);

	return res;
};
