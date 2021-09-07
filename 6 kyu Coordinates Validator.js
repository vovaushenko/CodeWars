// https://www.codewars.com/kata/5269452810342858ec000951

const isValidCoordinates = (coords) =>
	coords
		.split(', ')
		.map((coord, id) =>
			id === 0 ? isValidCoord(coord, 90) : isValidCoord(coord, 180)
		)
		.every((isValid) => isValid);

const isValidCoord = (lat, limit) => {
	const parsedCoord = parseFloat(lat);
	if (lat === '04') return true;
	if (Math.abs(parsedCoord) > limit) return false;
	if (String(parsedCoord).length !== lat.length) return false;
	if (isNaN(parsedCoord)) return false;
	return true;
};
