// 2058. Find the Minimum and Maximum Number of Nodes Between Critical Points
/*
A critical point in a linked list is defined as either a local maxima or a local minima.

A node is a local maxima if the current node has a value strictly greater than the previous node and the next node.

A node is a local minima if the current node has a value strictly smaller than the previous node and the next node.

Note that a node can only be a local maxima/minima if there exists both a previous node and a next node.

Given a linked list head, return an array of length 2 containing [minDistance, maxDistance] where minDistance is the minimum distance between any two distinct critical points and maxDistance is the maximum distance between any two distinct critical points. If there are fewer than two critical points, return [-1, -1].
*/

const getSLLvalues = (head) => {
	let current = head;
	const values = [];
	while (current) {
		values.push(current.val);
		current = current.next;
	}
	return values;
};

const getCriticalPoints = (values) => {
	const criticalPoints = [];
	let [i, j, k] = [0, 1, 2];
	while (k < values.length) {
		if (values[j] > values[i] && values[j] > values[k]) criticalPoints.push(j);
		if (values[j] < values[i] && values[j] < values[k]) criticalPoints.push(j);
		i++;
		j++;
		k++;
	}

	if (criticalPoints.length < 2) return [-1, -1];

	let min = Infinity;
	const max = Math.max(...criticalPoints) - Math.min(...criticalPoints);
	let [p1, p2] = [0, 1];
	while (p2 < criticalPoints.length) {
		if (criticalPoints[p2] - criticalPoints[p1] < min)
			min = criticalPoints[p2] - criticalPoints[p1];
		p1++;
		p2++;
	}

	return [min, max];
};

const nodesBetweenCriticalPoints = (head) => {
	const values = getSLLvalues(head);
	return getCriticalPoints(values);
};
