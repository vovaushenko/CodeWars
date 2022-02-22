<<<<<<< HEAD
export { foo };
// goal 10 -> 4
const foo = () => 'bar';

const removeElement = (nums: number[], target): number => {
	for (let i = nums.length - 1; i >= 0; i--) {
		nums[i] === target && nums.splice(i, 1);
	}
	return nums.length;
};

console.log(removeElement([1, 2, 2, 2, 3, 2, 4], 2));
=======
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const getListMap = (head: ListNode): Map<number, number> => {
	const map = new Map();
	let index = 0;
	let current = head;
	while (current) {
		if (!current.next) {
			map.set(index, current.val);
			break;
		}
		map.set(index, current.val);
		current = current.next;
		index++;
	}
	return map;
};

const pairSum = (head: ListNode | null): number => {
	if (!head) return 0;

	let maxTwinSum = -Infinity;
	const map = getListMap(head);
	const mapSize = map.size;

	for (const [id, val] of map) {
		maxTwinSum = Math.max(val + (map.get(mapSize - 1 - id) || 0));
		console.log(val, map.get(mapSize - 1 - id));
		if (id === mapSize / 2) break;
	}

	return maxTwinSum;
};
>>>>>>> 20ad12d1b63344c8981f1b898acb2b31cfb00c71
