// https://www.codewars.com/kata/59a1cdde9f922b83ee00003b

const stantonMeasure = (arr) => {
    const n = arr.filter((num) => num == 1).length;

    return arr.filter((num) => num == n).length;
};
