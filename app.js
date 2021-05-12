const solve = (arr) =>
	arr.map(
		(word) =>
			[...word.toLowerCase()].filter(
				(char, id) => id === 'abcdefghijklmnopqrstuvwxyz'.indexOf(char)
			).length
	);

console.log(solve(['abode', 'ABc', 'xyzD']));
