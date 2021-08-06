const killKthBit = (n, k, bits = [...n.toString(2)]) =>
	parseInt(
		bits
			.map((bit, id) => (id === bits.length - k ? (bit = '0') : bit))
			.join(''),
		2
	);
