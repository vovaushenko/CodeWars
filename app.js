// Single Number

// 1 sort
//  scan with two pointers
const singleNumber = (arr) => {
    const map = {};

    for (let num of arr) {
        map[num] ? map[num]++ : (map[num] = 1);
    }

    for (let key in map) {
        if (map[key] == 1) return +key;
    }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
