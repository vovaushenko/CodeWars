// https://www.codewars.com/kata/53fe2171d5679bff300007d9

const factorial = (n) => (n < 0 ? negativeFactorial(n) : positiveFactorial(n));

function positiveFactorial(number) {
    result = 1;
    for (let i = 1; i <= number; i++) result *= i;
    return result;
}

function negativeFactorial(number) {
    result = 1;
    for (let i = number; i < 0; i++) result *= i;
    return result;
}