//  https://www.codewars.com/kata/5ce969ab07d4b7002dcaa7a1

const solve = (str) => {
	const suffix =
		str.length % 2
			? str.slice(~~(str.length / 2) + 1)
			: str.slice(str.length / 2);

	let res = 0;

	const helper = (prefix) => {
		if (!prefix) return;
		if (str.startsWith(prefix)) return (res = prefix.length);
		helper(prefix.substring(1));
	};

	helper(suffix);
	return res;
};
