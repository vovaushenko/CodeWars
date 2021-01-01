// https://www.codewars.com/kata/5631213916d70a0979000066

const pattern = (n) => {
    if (n == 1) return 1;
    let res = '1' + '\n';
    let row;

    for (let i = 1; i < n; i++) {
        row = '1' + '*'.repeat(i) + `${i + 1}`;
        res += row;
        res += '\n';
    }

    return res.trim();
};
