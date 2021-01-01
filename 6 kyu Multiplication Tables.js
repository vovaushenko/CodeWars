// https://www.codewars.com/kata/5432fd1c913a65b28f000342/train/javascript

const createRow = (start, l) => Array.from({ length: l }, (_, id) => start * (id + 1));

const multiplicationTable = (row, col) => {
    const table = [];
    for (let i = 1; i <= row; i++) {
        table.push(createRow(i, col));
    }
    return table;
};