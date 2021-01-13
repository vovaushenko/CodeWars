// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

const chenckLength = (arr) => arr.reduce((total, a) => total + a.length, 0);

// will later refactor this mess 🤣🤪
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
