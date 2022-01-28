//1701. Average Waiting Time
/*
There is a restaurant with a single chef. You are given an array customers, where customers[i] = [arrivali, timei]:

arrivali is the arrival time of the ith customer. The arrival times are sorted in non-decreasing order.
timei is the time needed to prepare the order of the ith customer.
When a customer arrives, he gives the chef his order, and the chef starts preparing it once he is idle. The customer waits till the chef finishes preparing his order. The chef does not prepare food for more than one customer at a time. The chef prepares food for customers in the order they were given in the input.

Return the average waiting time of all customers. Solutions within 10-5 from the actual answer are considered accepted.
*/
const average = (nums) => nums.reduce((a, b) => a + b, 0) / nums.length;

const averageWaitingTime = (customers) => {
	let waitingDurations = [];
	let prev = null;
	for (let [start, time] of customers) {
		if (prev === null) {
			waitingDurations.push(start + time - start);
			prev = start + time;
		} else {
			const initial = start;
			if (prev > start) start = prev;
			waitingDurations.push(start + time - initial);
			prev = start + time;
		}
	}

	return average(waitingDurations);
};
