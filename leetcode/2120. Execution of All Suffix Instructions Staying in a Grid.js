// 2120. Execution of All Suffix Instructions Staying in a Grid
/*
There is an n x n grid, with the top-left cell at (0, 0) and the bottom-right cell at (n - 1, n - 1). You are given the integer n and an integer array startPos where startPos = [startrow, startcol] indicates that a robot is initially at cell (startrow, startcol).

You are also given a 0-indexed string s of length m where s[i] is the ith instruction for the robot: 'L' (move left), 'R' (move right), 'U' (move up), and 'D' (move down).

The robot can begin executing from any ith instruction in s. It executes the instructions one by one towards the end of s but it stops if either of these conditions is met:

The next instruction will move the robot off the grid.
There are no more instructions left to execute.
Return an array answer of length m where answer[i] is the number of instructions the robot can execute if the robot begins executing from the ith instruction in s.
*/

const isValidPosition = ([x, y], limit) => {
	if (x < 0 || x >= limit) return false;
	if (y < 0 || y >= limit) return false;
	return true;
};

const router = () => ({
	R: ([row, col]) => [row, col + 1],
	L: ([row, col]) => [row, col - 1],
	U: ([row, col]) => [row - 1, col],
	D: ([row, col]) => [row + 1, col],
});

const validatePath = (grid, position, s) => {
	const r = router();
	let counter = 0;
	let currentPos = [...position];

	for (let dir of s) {
		currentPos = r[dir](currentPos);
		if (!isValidPosition(currentPos, grid)) {
			break;
		}
		counter++;
	}

	return counter;
};

const executeInstructions = (n, startPos, s) => {
	const result = [];

	for (let i = 0; i < s.length; i++) {
		result.push(validatePath(n, startPos, s.slice(i)));
	}

	return result;
};
