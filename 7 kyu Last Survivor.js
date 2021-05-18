// https://www.codewars.com/kata/609eee71109f860006c377d1

const lastSurvivor = (str, coords) => {
	let letters = [...str];

	for (let id of coords) letters.splice(id, 1);

	return letters.join('');
};
