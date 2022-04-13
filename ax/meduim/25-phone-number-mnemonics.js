const MAP = {
	0: ['0'],
	1: ['1'],
	2: ['a', 'b', 'c'],
	3: ['d', 'e', 'f'],
	4: ['g', 'h', 'i'],
	5: ['j', 'k', 'l'],
	6: ['m', 'n', 'o'],
	7: ['p', 'q', 'r', 's'],
	8: ['t', 'u', 'v'],
	9: ['w', 'x', 'y', 'z'],
};

const phoneNumberMnemonics = (number) => {
	const initialMnemonic = new Array(number.length).fill('0');
	const mnemonics = [];

	const generateMnemonic = (id, currentMnemonic) => {
		if (id === number.length) {
			const validMnemonic = currentMnemonic.join('');
			mnemonics.push(validMnemonic);
		} else {
			const digit = number[id];
			const letters = MAP[digit];
			for (const letter of letters) {
				currentMnemonic[id] = letter;
				generateMnemonic(id + 1, currentMnemonic);
			}
		}
	};
	generateMnemonic(0, initialMnemonic);

	return mnemonics;
};

console.log(phoneNumberMnemonics('1905'));
