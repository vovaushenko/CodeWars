// https://www.codewars.com/kata/54b80308488cb6cd31000161

const groupCheck = (str) => {
    const map = {};
    for (let char of str) map[char] ? map[char]++ : (map[char] = 1);

    
};

groupCheck('{(})');
