// https://www.codewars.com/kata/570fd7ad34e6130455001835

const zebulansNightmare = (f) =>
	f
		.split('_')
		.map((chunk, i) => (i ? chunk[0].toUpperCase() + chunk.slice(1) : chunk))
		.join('');

const zebulansNightmare = (functionName) =>
	functionName.replace(/_./g, (v) => v[1].toUpperCase());
