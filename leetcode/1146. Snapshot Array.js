// 1146. Snapshot Array
/*
Implement a SnapshotArray that supports the following interface:

SnapshotArray(int length) initializes an array-like data structure with the given length.  Initially, each element equals 0.
void set(index, val) sets the element at the given index to be equal to val.
int snap() takes a snapshot of the array and returns the snap_id: the total number of times we called snap() minus 1.
int get(index, snap_id) returns the value at the given index, at the time we took the snapshot with the given snap_id
*/

class SnapshotArray {
	constructor(length) {
		this._arr = [];
		this._snapshotMap = new Map();
		this._snapCounter = 0;
	}
	set(id, val) {
		this._arr[id] = val;
	}
	snap() {
		this._snapshotMap.set(this._snapCounter, [...this._arr]);
		this._snapCounter++;
		return this._snapCounter - 1;
	}
	get(id, snap_id) {
		const snapshot = this._snapshotMap.get(snap_id);
		return snapshot[id] || null;
	}
}
