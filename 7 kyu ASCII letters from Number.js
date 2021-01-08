// https://www.codewars.com/kata/589ebcb9926baae92e000001

const asciiToChar = (ascii) => String.fromCharCode(ascii);

const convert = (number) => {
    let result = [];

    const splitByTwo = (str) => {
        if (!str) return;
        result.push(str.slice(0, 2));

        splitByTwo(str.substring(2));
    };

    splitByTwo(number);
    return result.map((ascii) => asciiToChar(ascii)).join('');
};