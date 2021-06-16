// https://www.codewars.com/kata/57882daf90b2f375280000ad

const SumSquares = (list) => deepFlat(list).reduce((a, b) => a + b ** 2, 0);

const deepFlat = (a, values = []) => {
	for (let val of a) {
		if (Array.isArray(val)) {
			deepFlat(val, values);
		} else {
			values.push(val);
		}
	}
	return values;
};
