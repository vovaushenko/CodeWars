// https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056

const validWord = (dictionary, word) => {
    const sortedByLength = dictionary.sort((a, b) => a.length - b.length);

    for (let i = 0; i < sortedByLength.length; i++) {
        let re = new RegExp(sortedByLength[i], 'g');
        word = word.replace(re, '');
    }

    return word.length ? false : true;
};
