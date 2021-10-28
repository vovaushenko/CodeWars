// https://leetcode.com/problems/compare-version-numbers/
/*
  165. Compare Version Numbers
*/

const compareVersion = (v1, v2) => {
	const chunks1 = v1.split('.').map((ch) => Number(trimZeroes(ch)));
	const chunks2 = v2.split('.').map((ch) => Number(trimZeroes(ch)));
	const longest = Math.max(chunks1.length, chunks2.length);

	for (let i = 0; i < longest; i++) {
		if (chunks1[i] > chunks2[i]) {
			return 1;
		} else if (chunks1[i] < chunks2[i]) {
			return -1;
		} else if (
			chunks1[i] === undefined &&
			chunks2[i] !== undefined &&
			chunks2[i] !== 0
		) {
			return -1;
		} else if (
			chunks2[i] === undefined &&
			chunks1[i] !== undefined &&
			chunks1[i] !== 0
		) {
			return 1;
		}
	}

	return 0;
};

const trimZeroes = (version) => {
	let start = 0;
	let end = version.length - 1;

	for (let i = 0; i < version.length; i++) {
		if (version[i] !== '0') {
			start = i;
			break;
		}
	}

	return version.slice(start, end + 1);
};
