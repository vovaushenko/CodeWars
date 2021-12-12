// 1054. Distant Barcodes
/*
In a warehouse, there is a row of barcodes, where the ith barcode is barcodes[i].

Rearrange the barcodes so that no two adjacent barcodes are equal. You may return any answer, and it is guaranteed an answer exists.
*/

const getMaxFrequency = (map) => Math.max(...Object.values(map));

const rearrangeBarcodes = (barcodes) => {
	const map = barcodes.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

	const res = [];

	const helper = (currMap) => {
		const maxFR = getMaxFrequency(currMap);
		if (!maxFR) {
			return;
		}
		for (let num in currMap) {
			if (currMap[num] === maxFR && res[res.length - 1] !== num) {
				res.push(num);
				currMap[num]--;
			}
		}

		for (let num in currMap) {
			if (num !== res[res.length - 1] && map[num]) {
				res.push(num);
				currMap[num]--;
				helper(currMap);
			}
		}
	};

	helper(map);
	return res.map(Number);
};
