//https://www.algoexpert.io/questions/Powerset

const powerset = (arr) => {
	const subsets = [[]];

	for (const num of arr) {
		const length = subsets.length;
		for (let i = 0; i < length; i++) {
			const currentSubset = subsets[i];
			subsets.push([...currentSubset, num]);
		}
	}
	return subsets;
};
