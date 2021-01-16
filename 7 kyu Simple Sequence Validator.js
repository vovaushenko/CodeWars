// https://www.codewars.com/kata/553f01db29490a69ff000049

const validateSequence = (arr) => {
    let difference = arr[0] - arr[1];
    let i = 0;
    let j = 1;
    while (j < arr.length) {
        if (arr[i] - arr[j] !== difference) return false;
        i++;
        j++;
    }

    return true;
};
