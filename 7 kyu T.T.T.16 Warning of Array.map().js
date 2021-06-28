const warning = (arr, f) => {
	try {
		arr.map((n) => f(n));
		return 'Passed!';
	} catch (e) {
		return 'Failed!';
	}
};
