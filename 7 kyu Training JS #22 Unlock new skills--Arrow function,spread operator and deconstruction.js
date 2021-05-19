// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8

const shuffleIt = (arr, ...pairs) => {
	const shuffledArr = [...arr];
	pairs.forEach(([id1, id2]) => swap(shuffledArr, id1, id2));
	return shuffledArr;
};

const swap = (a, id1, id2) => ([a[id1], a[id2]] = [a[id2], a[id1]]);
