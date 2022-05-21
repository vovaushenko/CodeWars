//859. Buddy Strings

// BRUTE FORCE

const swap = (arr, id1, id2) => {
	[arr[id1], arr[id2]] = [arr[id2], arr[id1]];

	return arr;
};

const buddyStrings = (s, goal) => {
	if (s.length !== goal.length) return false;

	const chars = [...s];

	for (let i = 0; i < s.length; i++) {
		for (let j = i + 1; j < s.length; j++) {
			const swappedCombo = swap([...chars], i, j);

			if (swappedCombo.join('') === goal) return true;
		}
	}

	return false;
};

const buddyStrings2 = (A, B) => {
	if (A.length != B.length) {
		return false;
	}

	let [dif, chars] = [[], new Set(A)];

	for (i in A) {
		if (A[i] != B[i]) {
			dif.push([A[i], B[i]]);
		}
	}

	return (
		(dif.length == 2 && dif[0].join() == dif[1].reverse().join()) ||
		(dif.length == 0 && chars.size != A.length)
	);
};
