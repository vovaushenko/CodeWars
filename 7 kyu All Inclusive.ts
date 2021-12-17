// 7 kyu
// All Inclusive
export const containAllRots = (str: string, arr: string[]): boolean =>
	rotationsOf(str).every((rotation) => arr.includes(rotation));

const rotationsOf = (str: string): Array<string> => {
	const rotations: Array<string> = [];
	const chars = [...str];

	for (let i = 0; i < chars.length; i++) {
		chars.push(chars.shift()!);
		rotations.push(chars.join(''));
	}

	return rotations;
};
