//133. Clone Graph
/*
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
*/
'use strict';

const clone = (node, map) => {
	if (!node) return null;
	if (map.has(node.val)) return map.get(node.val);
	const newNode = new Node(node.val, []);
	map.set(node.val, newNode);
	for (const neighbor of node.neighbors) {
		newNode.neighbors.push(clone(neighbor, map));
	}
	return newNode;
};

const cloneGraph = (node) => {
	const map = new Map();
	return clone(node, map);
};
