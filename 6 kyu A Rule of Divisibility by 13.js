// https://www.codewars.com/kata/564057bc348c7200bd0000ff

const reverseNum = (n) => [...(n + '')].reverse();

const thirt = (n) => {
    const pattern = [1, 10, 9, 12, 3, 4];
    let tempNum;

    const helper = (num) => {
        let i = 0;
        let j = 0;
        while (i < num.length && j < pattern.length) {
            num[i] = num[i] * pattern[j];
            i++;
            j++;
            if (!pattern[j]) j = 0;
        }

        num = num.reduce((a, b) => a + b, 0);
        if (num == tempNum) return;

        tempNum = num;

        helper(reverseNum(tempNum));
    };

    helper(reverseNum(n));
    return tempNum;
};