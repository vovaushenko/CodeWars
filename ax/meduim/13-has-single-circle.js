const hasSingleCycle = (array) => {
	let id = 0;
	let visitedNodes = 0;

	while (visitedNodes < array.length) {
		if (visitedNodes && id === 0) return false;

		visitedNodes++;
		id = getNextId(id, array);
	}

	return id === 0;
};

const getNextId = (id, arr) => {
	const jump = arr[id];
	const nextId = (id + jump) % arr.length;
	return nextId >= 0 ? nextId : nextId + arr.length;
};
