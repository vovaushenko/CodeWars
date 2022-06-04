//2285. Maximum Total Importance of Roads

const maximumImportance = (n, roads) => {
	const adjacencyList = new Map();

	for (let i = 0; i < n; i++) {
		adjacencyList.set(i, []);
	}

	for (let [source, dest] of roads) {
		adjacencyList.get(source).push(dest);

		adjacencyList.get(dest).push(source);
	}

	let connectedRatingMap = new Map();

	let i = 0;

	for (let val of adjacencyList.values()) {
		connectedRatingMap.set(i, val.length);

		i++;
	}

	let sortedRatingMap = new Map(
		[...connectedRatingMap.entries()].sort((a, b) => b[1] - a[1])
	);

	const assignedRating = Array(n).fill(0);

	for (const [key, _val] of sortedRatingMap) {
		assignedRating[key] = n;

		n--;
	}

	let sum = 0;

	for (const [src, dest] of roads) {
		sum += assignedRating[src] + assignedRating[dest];
	}

	return sum;
};
