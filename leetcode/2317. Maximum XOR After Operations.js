//2317. Maximum XOR After Operations

const maximumXOR = (nums) => nums.reduce((res, num) => ((res |= num), res), 0);
