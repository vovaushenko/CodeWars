//932. Beautiful Array

const beautifulArray = (n) => {
	const array = Array.from({ length: n }, (_, i) => i + 1);

	return helper(array);

	function helper(arr) {
		if (arr.length === 1) return arr;
		const [e, o] = [[], []];

		for (let i = 0; i < arr.length; i++) {
			i % 2 === 0 ? e.push(arr[i]) : o.push(arr[i]);
		}
		return [...helper(e), ...helper(o)];
	}
};
