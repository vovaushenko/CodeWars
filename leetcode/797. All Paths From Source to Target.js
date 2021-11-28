// 797. All Paths From Source to Target
/*
Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).
*/
const allPathsSourceTarget = (graph) => {
	const adjacent = new Map();
	const N = graph.length - 1;
	const paths = [];
	for (let i = 0; i < graph.length; i++) {
		adjacent.set(i, new Set(graph[i]));
	}

	const traverse = (idx, path) => {
		path.push(idx);
		if (idx === N) {
			paths.push(path);
			return;
		}

		for (let adj of adjacent.get(idx)) {
			traverse(adj, [...path]);
		}
	};

	traverse(0, []);
	return paths;
};
