// https://www.codewars.com/kata/525b4164eb636fb2f90002a0

const findSumOfDigits = (num) => [...(num + '')].reduce((a, b) => a + b * 1, 0);

const solution = (date) => {
    date = Number(date.toLocaleDateString().split('-').join(''));
    let result = findSumOfDigits(date);

    while (result >= 10) {
        result = findSumOfDigits(result);
    }
    return result;
};
