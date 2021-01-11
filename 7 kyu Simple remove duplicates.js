// https://www.codewars.com/kata/5ba38ba180824a86850000f7

const solve = (arr) => {
    let res = [];

    const helper = (a) => {
        if (!a.length) return;
        let firstNum = a[0];
        !a.slice(1).includes(firstNum) && res.push(firstNum);

        helper(a.slice(1));
    };

    helper(arr);
    return res;
};