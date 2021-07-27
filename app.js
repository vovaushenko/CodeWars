// https://leetcode.com/problems/relative-sort-array/

const relativeSortArray = (arr1, arr2) => {
	const lookup = arr2.reduce((l, n, id) => ((l[n] = id), l), {});

	const intersectionSorted = arr1
		.filter((n) => n in lookup)
		.sort((a, b) => lookup[a] - lookup[b]);

	const differenceSorted = arr1
		.filter((n) => !(n in lookup))
		.sort((a, b) => a - b);

	return [...intersectionSorted, ...differenceSorted];
};

relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]);
