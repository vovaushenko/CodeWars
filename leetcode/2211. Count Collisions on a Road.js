const countCollisions = (directions) => {
	let res = 0,
		n = directions.length,
		i = 0,
		carsFromRight = 0;
	while (i < n && directions[i] === 'L') i++;
	for (; i < n; i++) {
		if (directions[i] === 'R') carsFromRight++;
		else {
			res += directions[i] === 'S' ? carsFromRight : carsFromRight + 1;
			carsFromRight = 0;
		}
	}
	return res;
};
