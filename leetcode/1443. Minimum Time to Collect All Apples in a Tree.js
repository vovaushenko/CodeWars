//1443. Minimum Time to Collect All Apples in a Tree
/*
Given an undirected tree consisting of n vertices numbered from 0 to n-1, which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at vertex 0 and coming back to this vertex.

The edges of the undirected tree are given in the array edges, where edges[i] = [ai, bi] means that exists an edge connecting the vertices ai and bi. Additionally, there is a boolean array hasApple, where hasApple[i] = true means that vertex i has an apple; otherwise, it does not have any apple.
*/
const minTime = (n, edges, hasApple) => {
	const parentMap = new Map();
	let answer = 0;
	for (let i = 0; i < edges.length; i++) {
		parentMap.set(edges[i][1], edges[i][0]);
	}
	for (let i = 0; i < hasApple.length; i++) {
		if (hasApple[i]) {
			let pointer = i;
			while (pointer) {
				const parent = parentMap.get(pointer);
				answer += 2;
				if (hasApple[parent]) {
					break;
				}
				hasApple[parent] = true;
				pointer = parent;
			}
		}
	}
	return answer;
};
