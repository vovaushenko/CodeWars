// https://www.codewars.com/kata/52eb114b2d55f0e69800078d

function SubstitutionCipher(abc1, abc2) {
    this.encode = function (str) {
        return [...str]
            .map((char) => (abc1.includes(char) ? abc2[abc1.indexOf(char)] : char))
            .join('');
    };
    this.decode = function (str) {
        return [...str]
            .map((char) => (abc2.includes(char) ? abc1[abc2.indexOf(char)] : char))
            .join('');
    };
}
