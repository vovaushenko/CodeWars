/*Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned). */

const reverse = (x) => {
    let reversedNum = parseInt([...(x + '')].reverse().join(''));

    if (x > 0 && reversedNum < 2 ** 31 - 1) {
        return reversedNum;
    }
    if (x < 0 && -reversedNum > (-2) ** 31) {
        return -reversedNum;
    }

    return 0;
};
