//406. Queue Reconstruction by Height
/*
You are given an array of people, people, which are the attributes of some people in a queue (not necessarily in order). Each people[i] = [hi, ki] represents the ith person of height hi with exactly ki other people in front who have a height greater than or equal to hi.

Reconstruct and return the queue that is represented by the input array people. The returned queue should be formatted as an array queue, where queue[j] = [hj, kj] is the attributes of the jth person in the queue (queue[0] is the person at the front of the queue).
*/
const byHeigth = (p1, p2) => (p1[0] !== p2[0] ? p2[0] - p1[0] : p1[1] - p2[1]);

const reconstructQueue = (people) => {
	people.sort(byHeigth);
	const res = [];
	for (let i = 0; i < people.length; i++)
		res.splice(people[i][1], 0, people[i]);
	return res;
};
