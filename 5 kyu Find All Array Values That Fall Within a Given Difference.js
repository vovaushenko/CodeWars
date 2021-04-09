class GroupByDifference {
  constructor(nums) {
    this.nums = nums.sort((a, b) => a - b);
  }

  find(diff) {
    let withDuplicates = [];
    let [i, j] = [0, 1];

    const map = this.nums.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

    while (j < this.nums.length) {
      if (this.nums[j] - this.nums[i] <= diff) withDuplicates.push(this.nums[j], this.nums[i]);
      i++;
      j++;
    }
    const res = [];
    for (let num of [...new Set(withDuplicates)]) {
      for (let i = 0; i < map[num]; i++) {
        res.push(num);
      }
    }

    return res.sort((a, b) => a - b);
  }
}
