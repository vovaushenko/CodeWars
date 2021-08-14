// 1791. Find Center of Star Graph
/*
There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.
*/
const findCenter = (edges) => {
	let seenNodes = {};
	for (let [n1, n2] of edges) {
		console.log(n1, n2);
		seenNodes[n1] ? seenNodes[n1]++ : (seenNodes[n1] = 1);
		seenNodes[n2] ? seenNodes[n2]++ : (seenNodes[n2] = 1);

		if (seenNodes[n1] > edges.length / 2) return n1;
		if (seenNodes[n2] > edges.length / 2) return n2;
	}
};
