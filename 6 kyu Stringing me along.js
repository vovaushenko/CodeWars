// https://www.codewars.com/kata/55f4a44eb72a0fa91600001e
const createMessage = (word) => {
    return (nextWord) => {
        if (!nextWord) return word;
        return createMessage(word + ' ' + nextWord);
    };
};