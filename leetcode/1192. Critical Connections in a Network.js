// **1192. Critical Connections in a Network**

const criticalConnections = (_n, connections) => {
	const adjList = {};

	for (let [x, y] of connections) {
		adjList[x] ? adjList[x].push(y) : (adjList[x] = [y]);

		adjList[y] ? adjList[y].push(x) : (adjList[y] = [x]);
	}

	const criticalEdges = [];

	const times = {};

	let time = 0;

	const dfs = (vertex, parent) => {
		if (times[vertex] !== undefined) return times[vertex];

		const val = (times[vertex] = time++);

		for (let toVertex of adjList[vertex]) {
			if (toVertex === parent) continue;

			const next = dfs(toVertex, vertex);

			if (val < next) criticalEdges.push([vertex, toVertex]);

			times[vertex] = Math.min(next, times[vertex]);
		}

		return times[vertex];
	};

	dfs(0, null);

	return criticalEdges;
};
