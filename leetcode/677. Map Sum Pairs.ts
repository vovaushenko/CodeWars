// https://leetcode.com/explore/challenge/card/july-leetcoding-challenge-2021/612/week-5-july-29th-july-31st/3832/

//* 677. Map Sum Pairs
/*
Implement the MapSum class:

MapSum() Initializes the MapSum object.
void insert(String key, int val) Inserts the key-val pair into the map. If the key already existed, the original key-value pair will be overridden to the new one.
int sum(string prefix) Returns the sum of all the pairs' value whose key starts with the prefix.
*/
class MapSum {
	map: Map<string, number>;

	constructor() {
		this.map = new Map();
	}

	insert(key: string, val: number) {
		if (this.map.has(key)) {
			this.map.set(key, val);
		} else {
			this.map.set(key, val);
		}
	}

	sum(prefix: string): number {
		let sum = 0;
		for (let key of this.map.keys()) {
			if (key.startsWith(prefix)) sum += this.map.get(key) || 0;
		}

		return sum;
	}
}
