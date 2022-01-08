// 1557. Minimum Number of Vertices to Reach All Nodes
/*
Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.

Find the smallest set of vertices from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.

Notice that you can return the vertices in any order.
*/
const findSmallestSetOfVertices = (n, edges) => {
	const nodesWithOrigin = Array.from({ length: n }, () => false);
	for (const [_origin, destination] of edges) {
		nodesWithOrigin[destination] = true;
	}
	return nodesWithOrigin.reduce(
		(acc, hasOrigin, id) => (!hasOrigin && acc.push(id), acc),
		[]
	);
};
