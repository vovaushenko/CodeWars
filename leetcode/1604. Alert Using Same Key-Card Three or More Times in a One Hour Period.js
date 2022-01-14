//1604. Alert Using Same Key-Card Three or More Times in a One Hour Period
/*
LeetCode company workers use key-cards to unlock office doors. Each time a worker uses their key-card, the security system saves the worker's name and the time when it was used. The system emits an alert if any worker uses the key-card three or more times in a one-hour period.

You are given a list of strings keyName and keyTime where [keyName[i], keyTime[i]] corresponds to a person's name and the time when their key-card was used in a single day.

Access times are given in the 24-hour time format "HH:MM", such as "23:51" and "09:49".

Return a list of unique worker names who received an alert for frequent keycard use. Sort the names in ascending order alphabetically.

Notice that "10:00" - "11:00" is considered to be within a one-hour period, while "22:51" - "23:52" is not considered to be within a one-hour period.


*/
const duringOneHour = (t1, t2, t3) => {
	let startDiff = Math.max(t1[0], t2[0], t3[0]) - Math.min(t1[0], t2[0], t3[0]);
	if (startDiff > 1) return false;
	if (!startDiff) return true;
	if (t3[1] > t1[1]) return false;
	return true;
};

const validate = (time) => {
	const parsed = time
		.map((time) => time.split(':').map(Number))
		.sort((t1, t2) => (t1[0] !== t2[0] ? t1[0] - t2[0] : t1[1] - t2[1]));

	let [i, j, k] = [0, 1, 2];

	while (k < parsed.length) {
		if (duringOneHour(parsed[i], parsed[j], parsed[k])) return false;
		i++;
		j++;
		k++;
	}

	return true;
};

const alertNames = (keyName, keyTime) => {
	const usage = {};

	for (let i = 0; i < keyName.length; i++) {
		const employee = keyName[i];
		const timeUsed = keyTime[i];
		usage[employee]
			? (usage[employee] = [...usage[employee], timeUsed])
			: (usage[employee] = [timeUsed]);
	}

	const violators = [];

	for (let person in usage) {
		const isValid = validate(usage[person]);
		if (!isValid) violators.push(person);
	}
	return violators.sort();
};
