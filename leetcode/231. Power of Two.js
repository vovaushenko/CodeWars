// 231. Power of Two
// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

const isPowerOfTwo = (n) => {
    if (n == 1) return true;
    let current = 2;

    while (current < n) {
        current *= 2;
    }

    return current == n;
};
