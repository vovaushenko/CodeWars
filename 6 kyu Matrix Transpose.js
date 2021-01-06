// https://www.codewars.com/kata/52fba2a9adcd10b34300094c

const transpose = (matrix) => {
    let result = [];
    let counter = 0;

    const helper = (m) => {
        if (counter === matrix[0].length) return;

        let tempRow = [];
        for (let row of m) tempRow.push(row[counter]);
        result.push(tempRow);

        counter++;

        helper(m);
    };

    helper(matrix);
    return result;
};