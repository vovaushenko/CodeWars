// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isValid = (s: string): boolean => {
  const parentheses = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack = [];
  let tempPar;

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(parentheses[char]);
    } else {
      tempPar = stack.pop();
      if (tempPar !== char) return false;
    }
  }

  return stack.length ? false : true;
};
