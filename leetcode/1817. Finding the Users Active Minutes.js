// 1817. Finding the Users Active Minutes
/*

You are given the logs for users' actions on LeetCode, and an integer k. The logs are represented by a 2D integer array logs where each logs[i] = [IDi, timei] indicates that the user with IDi performed an action at the minute timei.

Multiple users can perform actions simultaneously, and a single user can perform multiple actions in the same minute.

The user active minutes (UAM) for a given user is defined as the number of unique minutes in which the user performed an action on LeetCode. A minute can only be counted once, even if multiple actions occur during it.

You are to calculate a 1-indexed array answer of size k such that, for each j (1 <= j <= k), answer[j] is the number of users whose UAM equals j.



*/

const findingUsersActiveMinutes = (logs, k) => {
	const map = {};

	for ([userId, minute] of logs) {
		if (map[userId] === undefined) map[userId] = [minute];

		if (map[userId] !== undefined && !map[userId].includes(minute)) {
			map[userId].push(minute);
		}
	}
	const actionsCount = Object.values(map)
		.map((a) => a.length)
		.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

	const res = [];

	for (let i = 0; i < k; i++) {
		res.push(actionsCount[+i + 1] || 0);
	}

	return res;
};

findingUsersActiveMinutes(
	[
		[0, 5],
		[1, 2],
		[0, 2],
		[0, 5],
		[1, 3],
	],
	5
);
