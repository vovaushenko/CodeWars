// https://www.codewars.com/kata/5497a3c181dd7291ce000700

const diagonalSum = (matrix) => {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];
    }
    return sum;
};

console.log(
    diagonalSum([
        [5, 9, 1, 0],
        [8, 7, 2, 3],
        [1, 4, 1, 9],
        [2, 3, 8, 2],
    ])
);
