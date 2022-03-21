const swap = (arr, id1, id2) => ([arr[id1], arr[id2]] = [arr[id2], arr[id1]]);

const selectionSort = (arr) => {
	let startID = 0;

	while (startID < arr.length - 1) {
		let smallestId = startID;
		for (let i = startID + 1; i < arr.length; i++) {
			if (arr[smallestId] > arr[i]) smallestId = i;
		}
		swap(arr, startID, smallestId);
		startID++;
	}
	return arr;
};
