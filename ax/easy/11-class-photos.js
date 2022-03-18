const classPhotos = (redHeights, blueHeights) => {
	const sortedRed = [...redHeights].sort((a, b) => a - b);
	const sortedBlue = [...blueHeights].sort((a, b) => a - b);
	return (
		sortedRed.every((person, id) => person > sortedBlue[id]) ||
		sortedBlue.every((person, id) => person > sortedRed[id])
	);
};
