/*Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory? */

const singleNumber = (arr) => {
    const map = {};

    for (let num of arr) {
        map[num] ? map[num]++ : (map[num] = 1);
    }

    for (let key in map) {
        if (map[key] == 1) return +key;
    }
};
