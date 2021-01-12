// https://www.codewars.com/kata/5266fba01283974e720000fa

const calculateMean = (a) => a.reduce((x, y) => x + y, 0) / a.length;

const variance = (array) => {
    const mean = calculateMean(array);
    return array.reduce((acc, num) => acc + (num - mean) ** 2, 0) / array.length;
};
