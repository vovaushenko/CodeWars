// https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d/train/javascript

const missingNo = (nums) => {
	const numsHash = nums.reduce((h, n) => ((h[n] = true), h), {});

	for (let key in lookup()) {
		if (!(key in numsHash)) return +key;
	}

	return '💥';
};

const lookup = (length = 100) =>
	Array.from({ length: length + 1 }, (_, id) => id).reduce(
		(h, n) => ((h[n] = true), h),
		{}
	);
