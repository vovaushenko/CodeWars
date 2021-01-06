// https://www.codewars.com/kata/55ea5304685da2fb40000018

const heggeleggleggo = (word) => {
    const VOWELS = ' aeiouAEIOU';

    return [...word].map((char) => (VOWELS.includes(char) ? char : char + 'egg')).join('');
};
