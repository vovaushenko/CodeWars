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
