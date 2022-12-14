//2498. Frog Jump II
/*
You are given a 0-indexed integer array stones sorted in strictly increasing order representing the positions of stones in a river.

A frog, initially on the first stone, wants to travel to the last stone and then return to the first stone. However, it can jump to any stone at most once.

The length of a jump is the absolute difference between the position of the stone the frog is currently on and the position of the stone to which the frog jumps.

More formally, if the frog is at stones[i] and is jumping to stones[j], the length of the jump is |stones[i] - stones[j]|.

*/
const maxJump = (a) => {
	let res = a[1];
	for (let i = 0; i + 2 < a.length; i++) res = Math.max(res, a[i + 2] - a[i]);
	return res;
};
