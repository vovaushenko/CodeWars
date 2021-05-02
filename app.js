// 1047. Remove All Adjacent Duplicates In String

const hasAdjecentDuplicates = (str) => {
	let [i, j] = [0, 1];
	while (j < str.length) {
		if (str[i] === str[j]) return [i, j];

		i++;
		j++;
	}
	return false;
};

const removeDuplicates = (str) => {
	let noDuplicates = '';
	const willRemoveAdjecentDuplicates = (s) => {
		if (!hasAdjecentDuplicates(s)) {
			noDuplicates = s;
			return;
		} else {
			const [id1, id2] = hasAdjecentDuplicates(s);
			const substr = s.slice(0, id1) + s.slice(id2 + 1);

			willRemoveAdjecentDuplicates(substr);
		}
	};

	willRemoveAdjecentDuplicates(str);

	return noDuplicates;
};

console.log(removeDuplicates('c'));
