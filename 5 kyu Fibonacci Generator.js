// https://www.codewars.com/kata/522498c9906b0cfcb40001fc

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
