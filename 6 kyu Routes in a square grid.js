// https://www.codewars.com/kata/559aa1295f5c38fd7b0000ac

const routes = (n) => {
	if (n <= 0) return 0;
	const calculateRoutes = (x, y, memo) => {
		const key = `${x}*${y}`;
		if (key in memo) return memo[key];
		if (x === 1 && y === 1) return 1;
		if (x === 0 || y === 0) return 0;

		memo[key] =
			calculateRoutes(x - 1, y, memo) + calculateRoutes(x, y - 1, memo);

		return memo[key];
	};

	return calculateRoutes(n + 1, n + 1, {});
};
