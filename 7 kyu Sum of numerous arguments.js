const findSum = (...nums) => nums.filter(a => a < 0).length ? -1 : nums.reduce((a,b)=>a+b,0)