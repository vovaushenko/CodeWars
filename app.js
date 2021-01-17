// https://www.codewars.com/kata/522498c9906b0cfcb40001fc

// function makeCounter() {
//     let count = 0;

//     return function () {
//         return count++;
//     };
// }

// let counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

function genfib() {
    let fibs = [0, 1];
    let counter = 0;
    return () => {
        let fibNum = fibs[counter];
        if (counter > 1) {
            fibNum = fibs[counter - 1] + fibs[counter - 2];
            fibs.push(fibNum);
        }
        counter++;
        return fibNum;
    };
}

let fibbb = genfib();
console.log(fibbb());
console.log(fibbb());
console.log(fibbb());
console.log(fibbb());
console.log(fibbb());
console.log(fibbb());
