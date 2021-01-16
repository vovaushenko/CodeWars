// https://www.codewars.com/kata/52a4e42ce950ed50da000748

const intersect = (...arrays) => {
    if (!arrays.length) return [];
    for (let val of arrays[0]) {
        let counter = 0;
        for (let arr of arrays) {
            arr.includes(val) && counter++;
        }
        if (counter === arrays.length) {
            intersection.push(val);
        }
    }

    return intersection;
};
