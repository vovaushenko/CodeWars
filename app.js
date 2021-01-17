// https://www.codewars.com/kata/5227129b316b56d50d0003b7

const flattenTwoLevels = (arr) => {
    let result = [];

    const helper = (a) => {
        if (!a.length) return;

        !Array.isArray(a[0]) ? result.push(a[0]) : result.push(willFlatten(a[0]));

        helper(a.slice(1));
    };

    helper(arr);
    console.log(result);
};

function willFlatten(arr) {
    const result = [];
    function flattener(a) {
        if (!a.length) return;

        if (!Array.isArray(a[0])) {
            result.push(a[0]);
        } else {
            flattener(a[0]);
        }

        flattener(a.slice(1));
    }
    flattener(arr);

    return result;
}

flattenTwoLevels([1, [2, 3], [4, 5, [6, 7, 8], 9, 10, [11, [12, [13, 14], 15], 16], 17], 18]);
