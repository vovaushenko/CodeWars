//71. Simplify Path

const simplifyPath = (path) => {
	// const directories = path.split(/**\/**+/);

	const stack = [];

	for (const dir of directories) {
		if (dir === '.' || dir === '') continue;
		else if (dir === '..') stack.pop();
		else stack.push(dir);
	}

	return '/' + stack.join('/');
};
