//2525. Categorize Box According to Criteria

/*

Given four integers length, width, height, and mass, representing the dimensions and mass of a box, respectively, return a string representing the category of the box.

The box is "Bulky" if:
Any of the dimensions of the box is greater or equal to 104.
Or, the volume of the box is greater or equal to 109.
If the mass of the box is greater or equal to 100, it is "Heavy".
If the box is both "Bulky" and "Heavy", then its category is "Both".
If the box is neither "Bulky" nor "Heavy", then its category is "Neither".
If the box is "Bulky" but not "Heavy", then its category is "Bulky".
If the box is "Heavy" but not "Bulky", then its category is "Heavy".
Note that the volume of the box is the product of its length, width and height.
*/
const volume = (l, w, h) => l * w * h;

const bulky = (l, w, h) =>
	volume(l, w, h) >= 10 ** 9 || [l, w, h].some((d) => d >= 10 ** 4);

const heavy = (m) => m >= 100;

const categorizeBox = (length, width, height, mass) => {
	const isBulky = bulky(length, width, height);
	const isHeavy = heavy(mass);
	if (isBulky && isHeavy) return 'Both';
	if (!isBulky && !isHeavy) return 'Neither';
	if (isBulky && !isHeavy) return 'Bulky';
	if (!isBulky && isHeavy) return 'Heavy';
};
