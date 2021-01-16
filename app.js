// https://www.codewars.com/kata/551204b7509063d9ba000b45

const mainDiagonalProduct = (matrix) => {
    let diagonalProduct = 1;
    let counter = 0;

    for (let i = 0; i < matrix.length; i++) {
        diagonalProduct *= matrix[i][counter];
        counter++;
    }

    return diagonalProduct;
};

console.log(
    mainDiagonalProduct([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
);
