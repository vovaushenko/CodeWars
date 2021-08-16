// https://www.codewars.com/kata/59eb28fb0a2bffafbb0000d6

const binaryOnesNum = (n) => n.toString(2).replace(/0/g, '').length;

const sortFunction = (a, b) => {
	if (binaryOnesNum(a) > binaryOnesNum(b)) return -1;
	if (binaryOnesNum(a) < binaryOnesNum(b)) return 1;
	return b > a ? 1 : -1;
};

const sortByBinaryOnes = (list) => {
	const sortedList = [...list].sort(sortFunction);
	return sortedList;
};
