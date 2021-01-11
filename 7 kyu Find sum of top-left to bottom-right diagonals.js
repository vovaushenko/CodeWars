// https://www.codewars.com/kata/5497a3c181dd7291ce000700

const diagonalSum = (matrix) => {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];
    }
    return sum;
};
