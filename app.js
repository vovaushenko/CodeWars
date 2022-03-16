const toHex16 = (n) =>
	n < 10 ? String(n) : String.fromCharCode('a'.charCodeAt(0) + n - 10);

const numToHex = (num) => (num ? numToHex(num >>> 4) + toHex16(num & 0xf) : '');

const toHex = (num) => (num ? numToHex(num) : '0');
