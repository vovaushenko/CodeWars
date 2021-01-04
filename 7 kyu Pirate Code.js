// https://www.codewars.com/kata/59e77930233243a7b7000026

const amaroPlan = (pirateNum) => {
    const res = Array.from({ length: pirateNum - 1 }, (_, id) => (id % 2 == 0 ? 0 : 1));
    res.unshift(20 * pirateNum - Math.floor(res.length / 2));

    return res;
};
