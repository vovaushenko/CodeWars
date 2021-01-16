// https://www.codewars.com/kata/551e51155ed5ab41450006e1

const sumTimesTables = (arr, min, max) => {
    let sumOfNumsInRange = (max * (max + 1)) / 2 - ((min - 1) * min) / 2;

    return arr.reduce((res, num) => res + num * sumOfNumsInRange, 0);
};
