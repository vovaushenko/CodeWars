// https://www.codewars.com/kata/52a0f488852a85c723000aca

const isPalindrome = (n) => +[...(n + '')].reverse().join('') === n;
const reverseNumber = (n) => +[...(n + '')].reverse().join('');

const palindromize = (num) => {
    let tempNum = num;
    let counter = 0;
    while (!isPalindrome(tempNum)) {
        tempNum += reverseNumber(tempNum);
        counter++;
    }

    return `${counter} ${tempNum}`;
};