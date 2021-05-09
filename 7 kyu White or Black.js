// https://www.codewars.com/kata/563319974612f4fa3f0000e0

const mineColor = (file, rank) => {
	if ((file.charCodeAt(0) - 97) % 2) {
		return rank % 2 ? 'white' : 'black';
	} else {
		return rank % 2 ? 'black' : 'white';
	}
};

console.log(mineColor('a', 2));

const mineColor = (file, rank) =>
	(file.charCodeAt(0) - 97) % 2
		? rank % 2
			? 'white'
			: 'black'
		: rank % 2
		? 'black'
		: 'white';
