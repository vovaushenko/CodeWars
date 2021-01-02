const finance = (n) => {
    let total = 0;

    let tempSum = 0;

    for (let i = 0; i <= n; i++) {
        tempSum = ((2 * i + 2 * i + (n - i)) * (n + 1 - i)) / 2;
        total += tempSum;
    }
    return total;
};
