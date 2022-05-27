//733. Flood Fill

const floodFill = (image, sr, sc, newColor) => {
	const originalColor = image[sr][sc];

	fill(image, sr, sc, originalColor, newColor);

	return image;
};

function fill(image, x, y, oldColor, newColor) {
	if (
		x < 0 ||
		y < 0 ||
		x >= image.length ||
		y > image[x].length ||
		image[x][y] === newColor ||
		image[x][y] !== oldColor
	)
		return;

	image[x][y] = newColor;

	fill(image, x + 1, y, oldColor, newColor);

	fill(image, x, y + 1, oldColor, newColor);

	fill(image, x - 1, y, oldColor, newColor);

	fill(image, x, y - 1, oldColor, newColor);
}
