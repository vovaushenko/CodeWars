const findRotation = (mat, target) => {
	const init = JSON.stringify(target);

	let counter = 0;

	let isRotation = false;

	const rotate = (mt) => {
		if (JSON.stringify(mt) === init) {
			return (isRotation = true);
		}

		if (counter === mat.length + 2) return (isRotation = false);

		let rotated = Array.from({ length: mat.length }, () => []);

		for (let i = 0; i < mt.length; i++) {
			const row = mt[i];

			for (let i = 0; i < row.length; i++) {
				rotated[i].push(row[i]);
			}
		}

		rotated = rotated.map((r) => [...r].reverse());

		counter++;

		rotate(rotated);
	};

	rotate(mat);

	return isRotation;
};
