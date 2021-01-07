// https://www.codewars.com/kata/52ece9de44751a64dc0001d9

const toDecimal = (num) => {
    return [...num]
        .reverse()
        .map((bit, id) => bit * 2 ** (id + 0))
        .reduce((a, b) => a + b);
};

const calculate = (num1, num2) => toDecimal(num1) + toDecimal(num2);