const averageOfLevels = (root) => {
	if (!root) return 0;

	const queue = [root];
	const averages = [];

	while (queue.length) {
		const floorSize = queue.length;
		let floorSum = 0;
		for (let i = 0; i < floorSize; i++) {
			const node = queue.shift();
			if (node) {
				floorSum += node.val;
				node.left && queue.push(node.left);
				node.right && queue.push(node.right);
			}
		}
		averages.push(floorSum / floorSize);
	}

	return averages;
};
