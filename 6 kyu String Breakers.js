// https://www.codewars.com/kata/59d398bb86a6fdf100000031

const stringBreakers = (n, input) => {
    let noWhiteSpaces = input.replace(/\s/g, '');
    let result = [];

    const helper = (s) => {
        if (!s.length) return;
        result.push(s.slice(0, n));

        helper(s.substring(n));
    };

    helper(noWhiteSpaces);

    return result.join('\n');
};
