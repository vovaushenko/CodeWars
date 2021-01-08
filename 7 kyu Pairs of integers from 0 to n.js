// https://www.codewars.com/kata/588e27b7d1140d31cb000060

const generatePairs = (n) => {
    let result = [];
    const helper = (a, b) => {
        result.push([a, b]);
        if (a == n && b == n) return;
        if (b === n) {
            b = a;
            a++;
        }
        b++;

        helper(a, b);
    };

    helper(0, 0);
    return result;
};