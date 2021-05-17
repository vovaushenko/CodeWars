// https://www.codewars.com/kata/5886c6b2f3b6ae33dd0000be

const firstReverseTry = (arr) => {
	if (!arr.length) return arr;
	[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
	return arr;
};
