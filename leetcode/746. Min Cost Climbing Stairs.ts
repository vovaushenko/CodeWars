// https://leetcode.com/problems/min-cost-climbing-stairs/
// On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

// Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  const memo = [];

  memo[0] = cost[0];
  memo[1] = cost[1];

  for (let i = 2; i < n; i++) {
    memo[i] = cost[i] + Math.min(memo[i - 2], memo[i - 1]);
  }

  console.log(memo);
  return Math.min(memo[n - 1], memo[n - 2]);
}
