// https://leetcode.com/problems/delete-columns-to-make-sorted/

const minDeletionSize = (strs) => {
	let sorted = 0;

	for (let i = 0; i < strs[0].length; i++) {
		if (isSorted(strs.map((s) => s[i]))) sorted++;
	}
	return strs[0].length - sorted;
};

const isSorted = (chars) => {
	let [i, j] = [0, 1];
	while (j < chars.length) {
		if (chars[i].localeCompare(chars[j]) === 1) return false;
		i++;
		j++;
	}
	return true;
};

// console.log(isSorted('abcdef'));
console.log(minDeletionSize(['a', 'b']));
