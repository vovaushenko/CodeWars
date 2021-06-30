// https://www.codewars.com/kata/57af26297f75b57d1f000225

const truncateString = (str, num) => {
	if (str.length <= num) return str;
	if (num <= 3) return str.slice(0, num) + '...';
	return str.slice(0, num - 3) + '...';
};
