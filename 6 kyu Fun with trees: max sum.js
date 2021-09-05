// https://www.codewars.com/kata/57e5279b7cf1aea5cf000359/train/javascript

const maxSum = (root) =>
	!root ? 0 : root.value + Math.max(maxSum(root.left), maxSum(root.right));
