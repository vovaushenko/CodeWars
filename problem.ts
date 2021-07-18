const sumOfSquaredDigits = (n: number): number =>
	[...String(n)].reduce((s, d) => s + Number(d) ** 2, 0);

export const isHappy = (n: number): boolean => {
	let numberIsHappy = false;
	let seen: Record<string, boolean> = {};

	const helper = (num: number): void => {
		if (num === 1) {
			numberIsHappy = true;
			return;
		}
		if (num in seen) {
			return;
		}
		seen[num] = true;
		helper(sumOfSquaredDigits(num));
	};

	helper(n);

	return numberIsHappy;
};

console.log(isHappy(2));

export {};
