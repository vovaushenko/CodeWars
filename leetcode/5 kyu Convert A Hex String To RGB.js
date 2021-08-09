// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

const hexStringToRGB = (hexStr) =>
	hexStr
		.substring(1)
		.match(/.{2}/g)
		.reduce(
			(rgb, c, i) => (
				i === 0
					? (rgb['r'] = parseInt(c, 16))
					: i === 1
					? (rgb['g'] = parseInt(c, 16))
					: (rgb['b'] = parseInt(c, 16)),
				rgb
			),
			{}
		);
