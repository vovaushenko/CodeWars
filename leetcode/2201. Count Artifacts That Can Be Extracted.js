/*
There is an n x n 0-indexed grid with some artifacts buried in it. You are given the integer n and a 0-indexed 2D integer array artifacts describing the positions of the rectangular artifacts where artifacts[i] = [r1i, c1i, r2i, c2i] denotes that the ith artifact is buried in the subgrid where:

(r1i, c1i) is the coordinate of the top-left cell of the ith artifact and
(r2i, c2i) is the coordinate of the bottom-right cell of the ith artifact.
You will excavate some cells of the grid and remove all the mud from them. If the cell has a part of an artifact buried underneath, it will be uncovered. If all the parts of an artifact are uncovered, you can extract it.

Given a 0-indexed 2D integer array dig where dig[i] = [ri, ci] indicates that you will excavate the cell (ri, ci), return the number of artifacts that you can extract.

The test cases are generated such that:

No two artifacts overlap.
Each artifact only covers at most 4 cells.
The entries of dig are unique.
*/

const digArtifacts = (n, arts, dig) => {
	let digset = new Set();
	for (let [r, c] of dig) digset.add(r + ',' + c);

	let count = 0;

	TOP_LOOP: for (let [r1, c1, r2, c2] of arts) {
		for (let i = r1; i <= r2; i++)
			for (let j = c1; j <= c2; j++)
				if (!digset.has(i + ',' + j)) {
					continue TOP_LOOP;
				}
		count++;
	}

	return count;
};
