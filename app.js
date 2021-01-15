// https://www.codewars.com/kata/59d398bb86a6fdf100000031

// 1) get rid of spaces
// 2) recursion
// 3) slice (0,5)
// 4) push to result

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

stringBreakers(5, 'This is an example string');
