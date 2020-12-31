// https://www.codewars.com/kata/5890579a34a7d44f3b00009e

const manipulate = (num) => {
    const mid = Math.floor((num + '').length / 2);
    const firstHalf = (num + '').slice(0, mid);
    const zerosLength = (num + '').length - firstHalf.length;
    const secondPart = '0'.repeat(zerosLength);
    return Number(firstHalf + secondPart);
};
