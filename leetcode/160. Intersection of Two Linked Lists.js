//160. Intersection of Two Linked Lists
/*
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:


*/
const getIntersectionNode = (headA, headB) => {
	let [currentA, currentB] = [headA, headB];
	while (currentA) {
		currentA.seen = true;
		currentA = currentA.next;
	}

	while (currentB) {
		if (currentB.seen) return currentB;
		currentB = currentB.next;
	}
	return null;
};
