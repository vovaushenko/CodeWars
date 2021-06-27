// https://www.codewars.com/kata/56562b12044fa538b0000010

const imgExtensions = {
	jpg: true,
	gif: true,
	png: true,
	tiff: true,
	svg: true,
	bmp: true,
};

const imageFilter = (arr) => {
	console.log(arr);
	return arr.map((file) =>
		isIncludesImgExtension(file) ? [file, ...file.split('.')] : null
	);
};

const isIncludesImgExtension = (filename) => {
	for (let key in imgExtensions) {
		if (filename.endsWith(key)) {
			if (filename.split('.')[0]) return true;
		}
	}

	return false;
};

console.log(isIncludesImgExtension('.tiff.php'));

console.log(imageFilter(['_rain.png', '6787.bmp', '.tiff.php', 'tiff.tiff']));
