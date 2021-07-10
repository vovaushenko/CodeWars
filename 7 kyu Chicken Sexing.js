// https://www.codewars.com/kata/57ed40e3bd793e9c92000fcb/train/javascript

const correctness = (bobsDecisions, expertDecisions) =>
	bobsDecisions.reduce(
		(c, dec, id) =>
			dec === expertDecisions[id]
				? (c += 1)
				: dec === '?' || expertDecisions[id] === '?'
				? (c += 0.5)
				: (c += 0),
		0
	);
