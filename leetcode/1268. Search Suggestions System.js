//1268. Search Suggestions System

const suggestedProducts = (products, searchWord) => {
	const res = [];

	for (let i = 1; i <= searchWord.length; i++) {
		const prefix = searchWord.slice(0, i);

		const level = [];

		for (const product of products) {
			if (product.startsWith(prefix)) level.push(product);
		}

		res.push(level.sort().slice(0, 3));
	}

	return res;
};
