// https://www.codewars.com/kata/5733d6c2d780e20173000baa

const maxMin = (arr1, arr2) => {
	let diff = arr1.map((num, id) => Math.abs(num - arr2[id]));
	return [Math.max(...diff), Math.min(...diff)];
};
