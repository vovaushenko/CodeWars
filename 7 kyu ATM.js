// https://www.codewars.com/kata/5635e7cb49adc7b54500001c

const solve = (num) => {
    let counter = 0;
    let remainder;
    const helper = (n) => {
        if (n < 10) return;
        counter++;

        if (n >= 500) {
            n -= 500;
        } else if (n < 500 && n >= 200) {
            n -= 200;
        } else if (n < 200 && n >= 100) {
            n -= 100;
        } else if (n < 100 && n >= 50) {
            n -= 50;
        } else if (n < 50 && n >= 20) {
            n -= 20;
        } else if (n < 20 && n >= 10) {
            n -= 10;
        }
        remainder = n;

        helper(n);
    };

    helper(num);

    return !remainder ? counter : -1;
};
