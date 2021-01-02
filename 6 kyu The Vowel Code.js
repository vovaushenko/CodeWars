// https://www.codewars.com/kata/53697be005f803751e0015aa

const encode = (str) => {
    const ALPHABET = { a: 1, e: 2, i: 3, o: 4, u: 5 };
    return [...str].map((char) => (ALPHABET[char] ? ALPHABET[char] : char)).join('');
};

const decode = (str) => {
    const ALPHABET = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
    return [...str].map((char) => (ALPHABET[char] ? ALPHABET[char] : char)).join('');
};
