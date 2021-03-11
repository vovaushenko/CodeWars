// 278. First Bad Version
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

const solution = (isBadVersion: any) => {
  return function (n: number): number {
    let left = 0;
    let right = n;

    while (right - left !== 1) {
      let mid = ~~((left + right) / 2);

      isBadVersion(mid) ? (right = mid) : (left = mid);
    }
    return right;
  };
};
