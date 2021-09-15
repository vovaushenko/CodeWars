const cupVolume = (d1, d2, h) =>
	Number((((Math.PI * h) / 12) * (d1 ** 2 + d1 * d2 + d2 ** 2)).toFixed(2));
