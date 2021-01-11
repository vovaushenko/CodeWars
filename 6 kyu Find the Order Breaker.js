// https://www.codewars.com/kata/5fc2a4b9bb2de30012c49609

const isAscending = (arr) => {
    let sortedArr = [...arr].sort((a, b) => a - b);
    return JSON.stringify(arr) === JSON.stringify(sortedArr);
};

const orderBreaker = (arr) => {
    let thisNumberBreaksTheOrder;
    for (let i = 0; i < arr.length; i++) {
        if (isAscending(arr.filter((_, id) => id !== i))) {
            thisNumberBreaksTheOrder = arr[i];
            break;
        }
    }
    return thisNumberBreaksTheOrder;
};
