/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function (values, labels, numWanted, useLimit) {
	const items = values.map((v, id) => ({ value: v, label: labels[id] }));
	items.sort((a, b) => b.value - a.value);

	const labelMap = new Map();
	let res = [],
		score = 0;

	for (let i = 0; i < items.length; i++) {
		const { value, label } = items[i];
		if (labelMap.has(label) && labelMap.get(label) >= useLimit) continue;
		res.push(value);
		score += value;
		if (!labelMap.has(label)) labelMap.set(label, 0);
		labelMap.set(label, labelMap.get(label) + 1);
		if (res.length >= numWanted) break;
	}

	return score;
};
