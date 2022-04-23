//341. Flatten Nested List Iterator
/*
You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.

Implement the NestedIterator class:

NestedIterator(List<NestedInteger> nestedList) Initializes the iterator with the nested list nestedList.
int next() Returns the next integer in the nested list.
boolean hasNext() Returns true if there are still some integers in the nested list and false otherwise.
Your code will be tested with the following pseudocode:

initialize iterator with nestedList
res = []
while iterator.hasNext()
    append iterator.next() to the end of res
return res
If res matches the expected flattened list, then your code will be judged as correct.
*/
class NestedIterator {
	constructor(nestedList) {
		this.gen = this.listGenerator(nestedList);
		this.nextVal = this.gen.next();
	}

	hasNext() {
		return !this.nextVal.done;
	}

	next() {
		const val = this.nextVal.value;
		this.nextVal = this.gen.next();
		return val;
	}

	*listGenerator(list) {
		for (const el of list) {
			if (el.isInteger()) yield el.getInteger();
			else yield* this.listGenerator(el.getList());
		}
	}
}
