function solution(isBadVersion) {
  return function (n) {
    var left = 0;
    var right = n;

    while (right - left !== 1) {
      var mid = parseInt((left + right) / 2);

      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid;
      }
    }
    return right;
  };
}
