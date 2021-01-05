// https://www.codewars.com/kata/55e6f5e58f7817808e00002e

const substractLastNumTwice = (n) => Math.trunc(n / 10) - (n % 10) * 2;

const seven = (m) => {
    if (!m) return [0,0]
    
    let counter = 1;
    let tempNum = substractLastNumTwice(m);

    while ([...(tempNum + '')].length > 2) {
        tempNum = substractLastNumTwice(tempNum);
        counter++;
    }

    return [tempNum, counter];
};
