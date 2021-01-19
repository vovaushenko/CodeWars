// 258. Add Digits
// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
const addDigitsOfNumber = (n) => [...(n + '')].reduce((a, b) => a + +b, 0) + '';

const addDigits = (num) => {
    num = addDigitsOfNumber(num);

    while (num.length > 1) num = addDigitsOfNumber(num);

    return +num;
};
