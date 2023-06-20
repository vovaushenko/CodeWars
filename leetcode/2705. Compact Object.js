/**
 * @param {Object} obj
 * @return {Object}
 */

const isFalsy = (entry) => !Boolean(entry);
const isObject = (entry) => typeof entry === 'object';

var compactObject = function (obj) {
	if (obj === null) return null;
	if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
	if (!isObject(obj)) return obj;

	const compactedObj = {};
	for (const key in obj) {
		const v = compactObject(obj[key]);
		if (Boolean(v)) compactedObj[key] = v;
	}
	return compactedObj;
};
