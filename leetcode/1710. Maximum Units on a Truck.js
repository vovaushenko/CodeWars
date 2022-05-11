//1710. Maximum Units on a Truck
const maximumUnits = (boxTypes, truckSize) => {
	const sortedBoxes = boxTypes.sort((a, b) => b[1] - a[1]);

	let currentId = 0;

	let maxUnits = 0;

	while (truckSize && currentId < sortedBoxes.length) {
		const [quantity, size] = sortedBoxes[currentId];

		if (truckSize - quantity >= 0) {
			maxUnits += quantity * size;

			truckSize -= quantity;
		} else {
			maxUnits += truckSize * size;

			break;
		}

		currentId++;
	}

	return maxUnits;
};
