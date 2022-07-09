//1769. Minimum Number of Operations to Move All Balls to Each Box
const minOperations = (boxes) => {
	const ballIds = [...boxes]
		.map((box, id) => (box === '1' ? id : null))
		.filter((i) => i || i === 0);
	const res = [];
	for (let i = 0; i < boxes.length; i++) {
		res.push(ballIds.reduce((acc, id) => acc + Math.abs(id - i), 0));
	}

	return res;
};
