// https://leetcode.com/problems/destination-city/

/*
You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.
*/

const destCity = (paths) => {
	const map = {};

	for (let [x, y] of paths) {
		map[x] ? map[x]++ : (map[x] = 1);
		map[y] ? map[y]++ : (map[y] = 1);
	}

	for (let [_, y] of paths) {
		if (map[y] === 1) return y;
	}
};
