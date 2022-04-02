//https://www.algoexpert.io/questions/Sunset%20Views
const sunsetViews = (buildings, direction) => {
	const result = [];
	const FILTER = {
		WEST: (currentBuildingHeight, currentBuildingId) =>
			buildings
				.slice(0, currentBuildingId)
				.some((buildingHeight) => buildingHeight >= currentBuildingHeight),
		EAST: (currentBuildingHeight, currentBuildingId) =>
			buildings
				.slice(currentBuildingId + 1)
				.some((buildingHeight) => buildingHeight >= currentBuildingHeight),
	};

	for (let i = 0; i < buildings.length; i++) {
		const currentHeight = buildings[i];

		const isSomeBudildingBlocksTheView = FILTER[direction](currentHeight, i);
		if (!isSomeBudildingBlocksTheView) result.push(i);
	}

	return result;
};
