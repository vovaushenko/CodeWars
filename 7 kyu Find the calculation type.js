// https://www.codewars.com/kata/5aca48db188ab3558e0030fa

const calcType = (a, b, res) => {
    if (a + b === res) return 'addition';
    if (a * b === res) return 'multiplication';
    if (a - b === res) return 'subtraction';
    return 'division';
};
