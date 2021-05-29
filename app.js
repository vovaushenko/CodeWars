var Converter = {
	toAscii: (hex) => {
		let [i, j] = [0, 1];
		let res = '';
		while (j < hex.length) {
			console.log();
			res += String.fromCharCode(parseInt(hex[i] + hex[j], 16));
			i += 2;
			j += 2;
		}

		return res;
	},

	toHex: (str) => [...str].map((c) => c.charCodeAt(0).toString(16)).join(''),
};

const toHex = (str) =>
	[...str].map((c) => c.charCodeAt(0).toString(16)).join('');

const toAsii = (hex) => {
	let [i, j] = [0, 1];
	let res = '';
	while (j < hex.length) {
		console.log();
		res += String.fromCharCode(parseInt(hex[i] + hex[j], 16));
		i += 2;
		j += 2;
	}

	return res;
};

console.log(toAsii('4c6f6f6b206d6f6d2c206e6f2068616e6473'));
