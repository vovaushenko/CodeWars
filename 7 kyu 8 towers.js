// https://www.codewars.com/kata/535bea76cdbf50281a00004c/train/javascript

const towerCombination = (n) =>
	Array.from({ length: n }, (_, id) => id + 1).reduce((x, y) => x * y, 1);
