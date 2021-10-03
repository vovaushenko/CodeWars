// 2027. Minimum Moves to Convert String
/*
You are given a string s consisting of n characters which are either 'X' or 'O'.

A move is defined as selecting three consecutive characters of s and converting them to 'O'. Note that if a move is applied to the character 'O', it will stay the same.

Return the minimum number of moves required so that all the characters of s are converted to 'O'.
*/

const minMoves = (s) => {
	let [res, i] = [0, 0];

	while (i < s.length) {
		if (s[i] === 'X') {
			i += 3;
			res++;
		} else {
			i++;
		}
	}

	return res;
};
