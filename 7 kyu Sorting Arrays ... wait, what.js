Array.prototype.sort = function () {
	if (this.filter((n) => n < 0).length) throw new Error('Invalid Array');
	return qSort(this);
};

const qSort = (arr) => {
	if (arr.length < 2) return arr;
	let pivot = Math.floor(Math.random() * arr.length);
	let [smaller, greater] = [[], []];
	for (let i = 0; i < arr.length; i++) {
		if (i !== pivot) {
			if (arr[i] >= arr[pivot]) {
				greater.push(arr[i]);
			} else {
				smaller.push(arr[i]);
			}
		}
	}

	return [...qSort(smaller), arr[pivot], ...qSort(greater)];
};
