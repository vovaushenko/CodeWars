// https://www.codewars.com/kata/54ca3e777120b56cb6000710

const chained = (functions) => {
    return (input) => {
        let res = functions[0](input);
        for (let i = 1; i < functions.length; i++) {
            res = functions[i](res);
        }

        return res;
    };
};
