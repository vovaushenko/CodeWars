const generateHashMap = (str) =>
	[...str].reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

const lastSurvivors = (str) => {
	const initHashMap = generateHashMap(str);
	let resHashMap = {};

	const substituteTwoChars = (hashMap) => {
		for (let key in hashMap) {
			if (hashMap[key] >= 2) {
				let upgradedChar =
					key === 'z' ? 'a' : String.fromCharCode(key.charCodeAt(0) + 1);

				const removedDuplications =
					hashMap[key] % 2 === 0 ? hashMap[key] : hashMap[key] - 1;

				if (upgradedChar in hashMap) {
					hashMap[upgradedChar] += removedDuplications / 2;
				} else {
					hashMap[upgradedChar] = removedDuplications / 2;
				}
				hashMap[key] -= removedDuplications;
			}
		}

		if (Object.values(hashMap).includes(2)) {
			substituteTwoChars(hashMap);
		} else {
			resHashMap = hashMap;
			return;
		}
	};

	substituteTwoChars(initHashMap);

	return Object.entries(resHashMap)
		.filter((ent) => ent[1] !== 0)
		.reduce((r, e) => r + e[0], '');
};
