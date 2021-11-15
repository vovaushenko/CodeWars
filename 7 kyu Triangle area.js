const tArea = (tStr) => {
	const floors = tStr.split('\n').filter((c) => c);

	const h = floors.length - 1;
	const b = [...floors[floors.length - 1]].filter((c) => c === '.').length - 1;

	console.log(tStr);

	console.log(h, b);

	return (h * b) / 2;
};
