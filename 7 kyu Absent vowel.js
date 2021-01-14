// https://www.codewars.com/kata/56414fdc6488ee99db00002c

const absentVowel = (sentence) => {
    const vowels = 'aeiou';
    let missing;

    for (let vowel of vowels) {
        if (![...sentence].includes(vowel.toLowerCase())) missing = vowel;
    }

    return vowels.indexOf(missing);
};
