// https://www.codewars.com/kata/53a1eac7e0afd3ad3300008b/train/javascript

const F = (n) => (!n ? 1 : n - M(F(n - 1)));
const M = (n) => (!n ? 0 : n - F(M(n - 1)));
