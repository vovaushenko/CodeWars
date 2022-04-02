//38. Count and Say
/*

The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

For example, the saying and conversion for digit string "3322251":
*/
const countAndSay = (n) => {
	if (n === 1) return '1';
	let result = null;

	const counter = (currentCount, step) => {
		if (step === n) {
			result = currentCount;
			return;
		}

		const nextCount = transform(currentCount);

		counter(nextCount, step + 1);
	};

	counter('1', 1);

	return result;
};

const transform = (num) => {
	if (num === 1) return '11';
	let res = '';
	let [i, j] = [0, 1];
	let currentStreak = '';
	while (j <= num.length) {
		if (num[i] === num[j]) {
			currentStreak += num[i];
		} else {
			currentStreak += num[i];
			res += `${currentStreak.length}${num[i]}`;
			currentStreak = '';
		}
		i++;
		j++;
	}

	if (currentStreak) res += `${currentStreak.length}${currentStreak[0]}`;
	return res;
};
