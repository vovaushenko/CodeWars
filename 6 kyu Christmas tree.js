// https://www.codewars.com/kata/52755006cc238fcae70000ed

const generateRow = (h, index) => {
    const row = Array.from({ length: h * 2 - 1 }, () => ' ');
    const mid = Math.floor(row.length / 2);
    row[mid] = '*';
    let i = mid,
        j = mid;
    let counter = 0;
    while (counter != index + 1) {
        row[i] = '*';
        row[j] = '*';
        i++;
        j--;
        counter++;
    }

    return row.join('');
};

const christmasTree = (n) => {
    let tree = '';
    for (let i = 0; i < n; i++)
        i !== n - 1 ? (tree += generateRow(n, i) + '\n') : (tree += generateRow(n, i));

    return tree;
};