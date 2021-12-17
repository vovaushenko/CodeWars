// 5 kyu
// Find four numbers

const getSum = (arr) => [...arr].reduce((a, b) => a + b, 0);

const find4Number = (n) => {
	if (n < 4) return null;
	const squares = [];
	let currentSquare = 2;
	while (currentSquare ** 2 < n) {
		squares.push(currentSquare ** 2);
		currentSquare++;
	}

	squares.reverse();

	const validCombos = [];

	const findSum = (currentSum, combo, startID) => {
		if (currentSum < 0) return;
		if (currentSum === 0) {
			validCombos.push([...combo]);
			return;
		}

		for (let i = startID; i < squares.length; i++) {
			const diff = currentSum - squares[i];
			findSum(diff, [...combo, squares[i]], i);
		}
	};

	findSum(n, [], 0);

	const res = validCombos
		.filter((cmb) => cmb.length === 4)
		.map((cmb) => cmb.map((n) => Math.sqrt(n)));

	return res[0];
};
