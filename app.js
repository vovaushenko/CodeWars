// https://www.codewars.com/kata/5e2c7639b5d728001489d910

const getProductId = (str) => {
    let possibleIds = str.split('-').filter((n) => +n || n === 'p');
    const productId = possibleIds.indexOf('p') + 1;
    return possibleIds[productId] !== 'p' ? possibleIds[productId] : possibleIds[productId + 1];
};

console.log(getProductId('http://www.exampleshop.com/letter-p-book-stand-p-192837-11112011.html'));
