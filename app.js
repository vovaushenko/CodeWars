// 657. Robot Return to Origin

const judgeCircle = (moves) =>
	Object.values(
		[...moves].reduce(
			(coords, move) => {
				if ('LR'.includes(move)) move === 'R' ? coords.x++ : coords.x--;
				if ('UD'.includes(move)) move === 'U' ? coords.y++ : coords.y--;
				return coords;
			},
			{ x: 0, y: 0 }
		)
	).every((coord) => coord === 0);

console.log(judgeCircle('RRDD'));
