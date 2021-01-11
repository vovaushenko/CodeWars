// https://www.codewars.com/kata/56eb0be52caf798c630013c0

const unluckyDays = (year) => {
    let counter = 0;
    for (let i = 0; i < 12; i++) {
        new Date(year, i, 13).getDay() === 5 && counter++;
    }
    return counter;
};
