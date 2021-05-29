// https://www.codewars.com/kata/54f9173aa58bce9031001548/train/javascri

const takeWhile = (arr, pred) => {
	let res = [];
	let i = 0;
	while (i < arr.length) {
		pred(arr[i]) && res.push(arr[i]);
		if (!pred(arr[i])) return res;
		i++;
	}
	return res;
};
