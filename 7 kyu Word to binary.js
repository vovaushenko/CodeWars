// https://www.codewars.com/kata/59859f435f5d18ede7000050

const wordToBin = (word) => [...word].map((letter) => '0' + letter.charCodeAt(0).toString(2));
