// https://www.codewars.com/kata/55147ff29cd40b43c600058b

const charConcat = (str) => {
    let result = '';
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        result += `${str[i]}${[str[j]]}${i + 1}`;
        i++;
        j--;
    }

    return result;
};
