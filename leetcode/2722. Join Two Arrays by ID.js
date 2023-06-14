/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

const mergeTwoObjects = (a1, a2) => ({ ...a1, ...a2 });

var join = function (a1, a2) {
	const map = {};

	const res = [];

	for (const o of a1) map[o.id] = [o];
	for (const o of a2) map[o.id] ? map[o.id].push(o) : (map[o.id] = [o]);

	for (const entry of Object.values(map)) {
		entry.length === 1
			? res.push(entry[0])
			: res.push(mergeTwoObjects(...entry));
	}
	return res;
};
