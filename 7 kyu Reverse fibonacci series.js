// https://www.codewars.com/kata/550fac5249073256380002c0

const reverseFibo = (n) => {
    const reversedFibs = generateFibs(n).reverse();

    return reversedFibs.join('');
};

function generateFibs(number) {
    const fibs = [0, 1];
    let i = 0;
    let j = 1;
    while (fibs.length !== number) {
        fibs.push(fibs[i] + fibs[j]);
        i++;
        j++;
    }

    return fibs;
}
