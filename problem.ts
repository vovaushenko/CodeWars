// https://leetcode.com/problems/min-cost-climbing-stairs/

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

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
