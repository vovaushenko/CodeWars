// https://www.codewars.com/kata/5946a0a64a2c5b596500019a

const splitAndAdd = (arr, n) => {
    let count = 0;
    let tempSum;
    let result;

    const helper = (a) => {
        result = a;

        if (count == n) return;
        count++;

        let mid = Math.floor(a.length / 2);
        let firstHalf = a.slice(0, mid);
        let secondHalf = a.slice(mid);

        let tempSum = addArrays(firstHalf, secondHalf);

        helper(tempSum);
    };
    helper(arr);
    return result;
};

function addArrays(shorter, longer) {
    if (shorter.length < longer.length) {
        let firstNum = longer.shift();

        let result = [firstNum];
        for (let i = 0; i < longer.length; i++) {
            result[i + 1] = shorter[i] + longer[i];
        }
        return result;
    } else {
        return shorter.map((num, id) => num + longer[id]);
    }
}