// https://www.codewars.com/kata/5701e43f86306a615c001868

const getIssuer = (number) => {
    let num = number + '';
    console.log(num.length);
    if (num.length == 15 && (num.slice(0, 2) === '34' || '37')) return 'AMEX';
    if (num.length == 16 && num.slice(0, 4) === '6011') return 'Discover';
    if (num.length == 16 && num.slice(0, 2) >= 51 && num.slice(0, 2) <= 55) return 'Mastercard';
    if ((num.length == 13 || num.length == 16) && num[0] == '4') return 'VISA';

    return 'Unknown';
};
