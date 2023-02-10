const strMap = new Map();

const isValid = (sbstr, k) => {
	if (!sbstr) return false;
	if (strMap.has(sbstr)) return strMap.get(sbstr);
	const map = [...sbstr].reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});
	const isStrValid = Object.values(map).every((v) => v >= k);
	strMap.set(sbstr, isStrValid);
	return isStrValid;
};

var longestSubstring = function (s, k) {
	if (!k) return 0;
	let max = 0;
	for (let i = 0; i < s.length; i++) {
		for (let j = i; j <= s.length; j++) {
			const substr = s.slice(i, j);

			if (isValid(substr, k)) {
				max = Math.max(max, substr.length);
			}
		}
	}

	return max;
};
