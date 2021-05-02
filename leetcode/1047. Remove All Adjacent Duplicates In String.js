// 1047. Remove All Adjacent Duplicates In String
// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

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
