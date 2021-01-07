// https://www.codewars.com/kata/55f4a44eb72a0fa91600001e
const createMessage = (word) => {
    return (nextWord) => {
        if (!nextWord) return word;
        return createMessage(word + ' ' + nextWord);
    };
};

console.log(createMessage('Hello')('World!')('hey'));

// function createMessage(str) {

//     return (str1) => {
//         if (str1 === undefined) return str;
//         return createMessage(str + ' ' + str1);
//     };
// }
