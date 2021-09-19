// https://www.codewars.com/kata/5575ff8c4d9c98bc96000042

const pattern = (n) => {
	if (n <= 0) return '';
	const allFloors = generateFloors(n);
	const maxFloorLength = allFloors[allFloors.length - 1].length;
	return allFloors
		.map((floor) => addSpaceToFloor(floor, maxFloorLength))
		.join('\n');
};

const generateFloors = (n, start = 2, floor = '1', floors = []) =>
	n <= 0
		? ''
		: floor.length === n + 1
		? floors
		: generateFloors(n, start + 1, floor + start, [
				...floors,
				floor + [...floor].reverse().slice(1).join(''),
		  ]);

const addSpaceToFloor = (floor, maxFloorLength) => {
	const trailingSpace = ' '.repeat((maxFloorLength - floor.length) / 2);

	return trailingSpace + floor + trailingSpace;
};
