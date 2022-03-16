//https://www.algoexpert.io/questions/Move%20Element%20To%20End

// === brute force ===
const moveElementToEnd = (arr, toMove) => {
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] === toMove) {
			arr.splice(i, 1);
			arr.push(toMove);
		}
	}

	return arr;
};

// === optimal ===
