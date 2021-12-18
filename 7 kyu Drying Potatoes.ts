/*
7 kyu
Drying Potatoes
*/
export const potatoes = (p0: number, w0: number, p1: number): number =>
	Math.floor((w0 * (100 - p0)) / (100 - p1));
