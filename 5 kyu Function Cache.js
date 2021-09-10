// https://www.codewars.com/kata/525481903700c1a1ff0000e1

function cache(func) {
	const cache = new Map();

	return (...args) => {
		let key;
		if ([...args].some((el) => typeof el === 'object')) {
			key = [...args].map((obj) => JSON.stringify(obj)).join('*');
		} else {
			key = [...args].join('*');
		}

		if (cache.has(key)) {
			return cache.get(key);
		} else {
			const calculation = func(...args);
			cache.set(key, calculation);

			return calculation;
		}
	};
}


