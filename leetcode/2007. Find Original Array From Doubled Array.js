// 2007. Find Original Array From Doubled Array
/*
An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.

Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.

*/

const findOriginalArray = (changed) => {
	const map = new Map();
	const result = [];
	let element, count;

	for (let i = 0; i < changed.length; ++i) {
		map.set(changed[i], (map.get(changed[i]) || 0) + 1);
	}

	changed.sort((a, b) => a - b);
	for (let i = 0; i < changed.length; ++i) {
		element = changed[i];
		count = map.get(element);

		if (count === undefined) continue;

		if (count === 1) map.delete(element);
		else map.set(element, count - 1);

		count = map.get(element * 2);

		if (count === undefined) return [];

		if (count === 1) map.delete(element * 2);
		else map.set(element * 2, count - 1);

		result.push(element);
	}

	return result;
};
