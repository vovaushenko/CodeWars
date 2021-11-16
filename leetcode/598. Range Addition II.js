const maxCount = (m, n, ops) => {
	// 598. Range Addition II
	/*
  You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.
  */
	let minR = m;
	let minC = n;
	for (const [x, y] of ops) {
		minR = Math.min(minR, x);
		minC = Math.min(minC, y);
	}

	return minR * minC;
};
