// 2105. Watering Plants II
/*
Alice and Bob want to water n plants in their garden. The plants are arranged in a row and are labeled from 0 to n - 1 from left to right where the ith plant is located at x = i.

Each plant needs a specific amount of water. Alice and Bob have a watering can each, initially full. They water the plants in the following way:

Alice waters the plants in order from left to right, starting from the 0th plant. Bob waters the plants in order from right to left, starting from the (n - 1)th plant. They begin watering the plants simultaneously.
If one does not have enough water to completely water the current plant, he/she refills the watering can instantaneously.
It takes the same amount of time to water each plant regardless of how much water it needs.
One cannot refill the watering can early.
Each plant can be watered either by Alice or by Bob.
In case both Alice and Bob reach the same plant, the one with more water currently in his/her watering can should water this plant. If they have the same amount of water, then Alice should water this plant.
*/

const minimumRefill = (plants, capacityA, capacityB) => {
	let [i, j] = [0, plants.length - 1];
	let [alice, bob] = [capacityA, capacityB];
	let refills = 0;
	while (i < j) {
		if (alice >= plants[i]) {
			alice -= plants[i];
			i++;
		} else {
			alice = capacityA;
			alice -= plants[i];
			refills++;
			i++;
		}

		if (bob >= plants[j]) {
			bob -= plants[j];
			j--;
		} else {
			bob = capacityB;
			bob -= plants[j];
			refills++;
			j--;
		}
		if (i === j && alice < plants[i] && bob < plants[j]) {
			refills++;
		}
	}

	return refills;
};
