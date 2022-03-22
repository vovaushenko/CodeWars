const asciiPosition = (char) => char.charCodeAt(0) - 96;

const charFromAscii = (ascii) => String.fromCharCode(ascii);

const getSmallestString = (n, k) => {
	const candidates = Array.from({ length: 26 }, (_, id) => id + 1);
	const combos = [];
	console.log({ candidates });

	const generateCombo = (left, combo, startId) => {
		if (!left && combo.length === n) {
			return combos.push([...combo]);
		}
		if (left < 0 || combos.length > 3) return;

		for (let i = startId; i < candidates.length; i++) {
			generateCombo(left - candidates[i], [...combo, candidates[i]], i);
		}
	};

	generateCombo(k, [], 0);

	return combos
		.map((combo) =>
			combo
				.sort((a, b) => a - b)
				.map((c) => c + 96)
				.map(charFromAscii)
				.join('')
		)
		.sort()[0];
};

const getSmallestString = (n, k) => {
	k -= n;
	let alpha = '_bcdefghijklmnopqrstuvwxy_',
		ans = 'z'.repeat(~~(k / 25));
	if (k % 25) ans = alpha[k % 25] + ans;
	return ans.padStart(n, 'a');
};
