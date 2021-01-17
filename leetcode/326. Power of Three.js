// 326. Power of Three
// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

const isPowerOfThree = (num) => {
    if (num == 1) return true;

    let current = 3;

    while (current < num) current *= 3;

    return current == num;
};
