// simulation
const firstStep = (mat) => {
	const values = [...mat.shift()];
	return { mat, values };
};

const secondStep = (mat) => {
	const values = [];
	for (const row of mat) values.push(row.pop());

	return { mat, values };
};

const thirdStep = (mat) => {
	const values = [...mat.pop()].reverse();
	return { mat, values };
};

const fourthStep = (mat) => {
	const values = [];
	for (const row of mat) values.push(row.shift());
	return { mat, values: values.reverse() };
};

const moves = {
	1: firstStep,
	2: secondStep,
	3: thirdStep,
	4: fourthStep,
};

const spiralTraverse = (matrix) => {
	const result = [];
	let step = 1;

	const traverse = (currentMatrix) => {
		if (!currentMatrix.length || !currentMatrix[0].length) return;
		const { mat, values } = moves[step](currentMatrix);
		result.push(...values);
		step++;
		if (step > 4) step = 1;
		traverse(mat);
	};
	traverse(matrix);

	return result;
};
