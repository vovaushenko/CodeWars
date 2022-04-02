//55. Jump Game
// https://leetcode.com/problems/jump-game/
// Backtracking

// TIME 2**n
const canJump1 = (nums, index = 0) => {
	// base case
	if (index === nums.length - 1) {
		// if we reach the last index - victory
		return true;
	}

	const maxReachableIndex = Math.min(nums.length - 1, index + nums[index]);

	// make every possible step out of available in current array slot
	for (let i = index + 1; i <= maxReachableIndex; i++) {
		// make decision
		if (canJump(nums, i)) return true;
	}

	return false;
};

// ======== MEMOIZED ======
// =======================
const canJumpFromId = (nums, index, memo) => {
	if (memo[index] !== undefined) return memo[index];

	const maxReachableIndex = Math.min(nums.length - 1, index + nums[index]);

	// make every possible step out of available in current array slot
	for (let i = index + 1; i <= maxReachableIndex; i++) {
		// make decision
		if (canJumpFromId(nums, i, memo)) {
			memo[index] = true;
			return true;
		}
	}
	memo[index] = false;
	return false;
};

const canJump = (nums) => {
	const memo = {};

	memo[nums.length - 1] = true;

	return canJumpFromId(nums, 0, memo);
};

// ======== END OF MEMOIZED ======
// =======================

// ======== DP =========
//========================

const canJumpDP = (nums) => {
	const memo = [];

	memo[nums.length - 1] = true;

	for (let i = nums.length - 2; i >= 0; i--) {
		const maxIndex = Math.min(nums.length - 1, i + nums[i]);
		memo[i] = false;
		for (let j = i + 1; j <= maxIndex; j++) {
			if (memo[j]) {
				memo[i] = true;
			}
		}
	}

	return memo[0];
};

//======== END OF DP ========
//============================
