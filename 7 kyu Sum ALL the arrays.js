// https://www.codewars.com/kata/5594463eaf1701909c0000d4

const flatten = (arr) => {
    const flatArr = [];

    const helper = (a) => {
        if (!a.length) return;
        if (!Array.isArray(a[0])) {
            flatArr.push(a[0]);
        } else {
            helper(a[0]);
        }

        helper(a.slice(1));
    };
    helper(arr);

    return flatArr;
};

const arraySum = (arr) => flatten(arr).reduce((a, b) => a + (+b || 0), 0);
