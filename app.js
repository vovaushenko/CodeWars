// https://www.codewars.com/kata/60908bc1d5811f0025474291

const findSquares = (n) => {
	let perfectSquares = [4, 9];
	let start = 4;

	while (
		perfectSquares[perfectSquares.length - 1] -
			perfectSquares[perfectSquares.length - 2] !==
		n
	) {
		perfectSquares.push(start ** 2);
		start++;
	}

	return `${perfectSquares[perfectSquares.length - 1]}-${
		perfectSquares[perfectSquares.length - 2]
	}`;
};

console.log(findSquares(81));
