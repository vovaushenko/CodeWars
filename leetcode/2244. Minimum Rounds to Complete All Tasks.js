//2244. Minimum Rounds to Complete All Tasks
/*
You are given a 0-indexed integer array tasks, where tasks[i] represents the difficulty level of a task. In each round, you can complete either 2 or 3 tasks of the same difficulty level.

Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to complete all the tasks.
*/
const minimumRounds = (tasks) => {
	const map = tasks.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

	const frequencies = Object.values(map);

	let minRounds = 0;

	for (const frequency of frequencies) {
		if (frequency < 2) return -1;
		minRounds += Math.ceil(frequency / 3);
	}
	return minRounds;
};
