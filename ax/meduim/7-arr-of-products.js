// BRUTE FORCE
const arrayOfProducts = (nums) =>
	nums.map((_, id1) =>
		nums.filter((_, id2) => id2 !== id1).reduce((prod, num) => prod * num, 1)
	);
