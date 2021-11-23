// 682. Baseball Game
/*
You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

An integer x - Record a new score of x.
"+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
"D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
"C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
Return the sum of all the scores on the record.


*/

const calPoints = (ops) => {
	const record = [];
	for (let op of ops) {
		if (op === 'C') {
			record.pop();
		} else if (op === 'D') {
			record.push(record[record.length - 1] * 2);
		} else if (op === '+') {
			record.push(record.slice(-2).reduce((a, b) => a + +b, 0));
		} else {
			record.push(+op);
		}
	}
	return record.reduce((acc, sc) => acc + sc, 0);
};
