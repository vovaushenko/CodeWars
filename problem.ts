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
