// https://www.codewars.com/kata/57a23c2acf1fa514d0001034

const whoTookTheCarKey = (arr) => arr.map((binary) => String.fromCharCode(parseInt(binary, 2))).join('')

whoTookTheCarKey([
    '01000001',
    '01101100',
    '01100101',
    '01111000',
    '01100001',
    '01101110',
    '01100100',
    '01100101',
    '01110010',
]);
