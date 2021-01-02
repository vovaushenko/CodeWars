// https://www.codewars.com/kata/57ea70aa5500adfe8a000110

const fold = (arr) => {
    if (arr.length == 2) return [arr[0] + arr[1]];
    let mid = Math.floor(arr.length / 2);
    let firstHalf = arr.length % 2 === 0 ? arr.slice(0, mid) : arr.slice(0, mid + 1);
    let secondHalf = arr.slice(mid).reverse();

    let result = firstHalf.map((num, id) =>
        id !== firstHalf.length - 1
            ? num + secondHalf[id]
            : arr.length % 2 === 0
            ? num + secondHalf[id]
            : num
    );

    return result;
};

const foldArray = (arr, n) => {
    let counter = 0;
    let result;
    const helper = (a) => {
        if (counter === n) return;

        counter++;
        result = fold(a);
        helper(result);
    };

    helper(arr);
    return result;
};