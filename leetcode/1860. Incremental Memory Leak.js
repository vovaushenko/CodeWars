//1860. Incremental Memory Leak
/*
You are given two integers memory1 and memory2 representing the available memory in bits on two memory sticks. There is currently a faulty program running that consumes an increasing amount of memory every second.

At the ith second (starting from 1), i bits of memory are allocated to the stick with more available memory (or from the first memory stick if both have the same available memory). If neither stick has at least i bits of available memory, the program crashes.

Return an array containing [crashTime, memory1crash, memory2crash], where crashTime is the time (in seconds) when the program crashed and memory1crash and memory2crash are the available bits of memory in the first and second sticks respectively.
*/

const memLeak = (memory1, memory2) => {
	let allocated = 1;

	while (memory1 || memory2) {
		if (allocated > memory1 && allocated > memory2) break;
		if (memory1 >= memory2) {
			memory1 -= allocated;
		} else {
			memory2 -= allocated;
		}
		allocated++;
	}
	return [allocated, memory1, memory2];
};
