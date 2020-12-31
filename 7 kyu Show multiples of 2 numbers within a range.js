// https://www.codewars.com/kata/583989556754d6f4c700018e

const multiples = (s1, s2, s3) => {
    let start = Math.min(s1, s2);
    let result = [];

    for (let i = start; i < s3; i++) {
        if (i % s1 == 0 && i % s2 == 0) result.push(i);
    }

    return result;
};
