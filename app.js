// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

const chenckLength = (arr) => arr.reduce((total, a) => total + a.length, 0);

const snail = (arr) => {
    let res = [];
    let count = 0;

    const helper = (a) => {
        if (chenckLength(a) == 0) {
            return;
        }

        if (count === 0) {
            res = res.concat(a[0]);
            a = a.slice(1);
        }

        if (count === 1) {
            for (let i = 0; i < a.length; i++) {
                res.push(a[i][a[i].length - 1]);
                a[i].splice(-1, 1);
            }
        }

        if (count === 2) {
            res = res.concat(a[a.length - 1].reverse());
            a.splice(-1, 1);
        }

        if (count === 3) {
            for (let i = a.length - 1; i >= 0; i--) {
                res.push(a[i][0]);
                a[i].splice(0, 1);
            }
        }
        count++;
        if (count === 4) count = 0;

        helper(a);
    };

    helper(arr);
    return res;
};

snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
]);

// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13];
