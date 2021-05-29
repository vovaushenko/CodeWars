// https://leetcode.com/problems/determine-color-of-a-chessboard-square/

const squareIsWhite = (coords) => {
	let [letter, num] = [...coords];
	num = +num;
	letter = letter.charCodeAt(0) - 96;
	if (letter % 2 !== 0) {
		return num % 2 !== 0 ? false : true;
	}

	return num % 2 !== 0 ? true : false;
};
