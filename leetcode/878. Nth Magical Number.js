// 878. Nth Magical Number
/*
A positive integer is magical if it is divisible by either a or b.

Given the three integers n, a, and b, return the nth magical number. Since the answer may be very large, return it modulo 109 + 7.
*/
//*BRUTE FORCE

const nthMagicalNumber = (n, a, b) => {
	const magicNumbers = [...new Set([a, b].sort((a, b) => a - b))];
	const [start, end] = magicNumbers;
	const seen = {
		[a]: true,
		[b]: true,
	};

	for (let i = start; i <= end; i++) {
		if (i % start === 0 || i % end === 0) {
			if (!(i in seen)) {
				magicNumbers.push(i);
				seen[i] = true;
			}
		}
	}
	magicNumbers.sort((a, b) => a - b);

	let current = magicNumbers[0] + 1;

	while (magicNumbers.length < n) {
		if (current % a === 0 || current % b === 0) {
			if (!(current in seen)) {
				magicNumbers.push(current);
				seen[current] = true;
			}
		}
		current++;
	}

	return magicNumbers[n - 1];
};

const nthMagicalNumber = function (N, A, B) {
	if (B > A) {
		[A, B] = [B, A];
	}

	const shareFreq = (A + B) / gcd(A, B) - 1;
	const numShares = Math.floor(N / shareFreq);
	const superN = N + numShares;

	const X = Math.ceil((superN * B) / (A + B));
	const Y = Math.ceil(superN - (superN * B) / (A + B));

	const mod = 10 ** 9 + 7;

	if (X * A <= Y * B) return (X * A) % mod;
	else return (Y * B) % mod;
};

const gcd = (a, b) => (!b ? a : gcd(b, a % b));
