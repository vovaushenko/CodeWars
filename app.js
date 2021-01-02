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

var abc1 = 'abcdefghijklmnopqrstuvwxyz';
var abc2 = 'etaoinshrdlucmfwypvbgkjqxz';

var sub = new SubstitutionCipher(abc1, abc2);
