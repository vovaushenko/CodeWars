// https://www.codewars.com/kata/57fe50d000d05166720000b1/train/javascript

const sabb = (s, val, happiness) => {
	const letters = [...s].filter((c) => 'sabbatical'.includes(c));
	const grandTotal = val + happiness + letters.length;
	return grandTotal > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.';
};
