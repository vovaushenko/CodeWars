const findMiddle = (str) => {
	if (typeof str !== 'string') return -1;
	const digits = str.replace(/\D/g, '');
	if (!digits) return -1;

	const productStr = String([...digits].reduce((prod, num) => prod * +num, 1));

	let mid = ~~(productStr.length / 2);

	if (productStr.length % 2) {
		return +productStr[mid];
	} else {
		return productStr[mid - 1]
			? Number(productStr[mid - 1] + productStr[mid])
			: +productStr[mid];
	}
};
