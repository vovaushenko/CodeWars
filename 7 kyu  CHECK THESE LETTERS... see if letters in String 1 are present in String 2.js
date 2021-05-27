// https://www.codewars.com/kata/57470efebf81fea166001627

const letterCheck = ([s1, s2]) => {
	let hash = [...s1.toLowerCase()].reduce(
		(h, c) => ((h[c] = h[c] + 1 || 1), h),
		{}
	);

	for (let char of s2) {
		if (!(char in hash)) return false;
	}

	return true;
};
