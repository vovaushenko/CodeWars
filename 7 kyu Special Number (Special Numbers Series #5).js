// https://www.codewars.com/kata/5a55f04be6be383a50000187

const specialNumber = (num) => {
    const digits = [...(num + '')];
    for (let digit of digits) {
        if (digit > 5) return 'NOT!!';
    }

    return 'Special!!';
};
