// https://www.codewars.com/kata/5b5604e26dc79e6832000101

const invertHash = (hash) =>
	Object.entries(hash)
		.map((pair) => swap(pair, 0, 1))
		.reduce((hash, [key, value]) => ((hash[key] = value), hash), {});

const swap = (arr, id1, id2) => ([arr[id1], arr[id2]] = [arr[id2], arr[id1]]);
