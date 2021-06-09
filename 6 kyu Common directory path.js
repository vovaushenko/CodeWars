// https://www.codewars.com/kata/597f334f1fe82a950500004b

const getCommonDirectoryPath = (pathes) => {
	let chunks = pathes.map((path) => path.split('/'));
	let common = [];
	let firstPath = chunks[0];

	for (let i = 0; i < firstPath.length; i++) {
		if (chunks.every((chunk) => chunk[i] === firstPath[i])) {
			common.push(firstPath[i]);
		} else {
			break;
		}
	}

	return common.length ? common.join('/') + '/' : '';
};
