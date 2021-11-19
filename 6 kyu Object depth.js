const isNonEmptyObject = (subject) =>
	subject &&
	typeof subject === 'object' &&
	!Array.isArray(subject) &&
	Object.keys(subject).length > 0;

const depth = (obj) => {
	if (!isNonEmptyObject(obj)) return 0;
	let maxDepth = 0;
	const traverse = (currObj, depth) => {
		maxDepth = Math.max(depth, maxDepth);
		Object.keys(currObj).forEach(
			(key) =>
				isNonEmptyObject(currObj[key]) && traverse(currObj[key], depth + 1)
		);
	};
	traverse(obj, 1);
	return maxDepth;
};
