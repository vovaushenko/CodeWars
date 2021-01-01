// https://www.codewars.com/kata/587854330594a6fb7e000057

const mathEngine = (arr) => {
    if (!arr) return 0;
    const productOfNonNegative = arr
        .filter((num) => num >= 0)
        .reduce((product, digit) => product * digit, 1);

    const sumOfAllNegatives = arr
        .filter((num) => num < 0)
        .reduce((sum, digit) => sum + digit, 0);

    return productOfNonNegative + sumOfAllNegatives;
};