// https://www.codewars.com/kata/57c1ab3949324c321600013f

const toLeetSpeak = (str) => {
  let leetspeak = {
    A: "@",
    B: "8",
    C: "(",
    D: "D",
    E: "3",
    F: "F",
    G: "6",
    H: "#",
    I: "!",
    J: "J",
    K: "K",
    L: "1",
    M: "M",
    N: "N",
    O: "0",
    P: "P",
    Q: "Q",
    R: "R",
    S: "$",
    T: "7",
    U: "U",
    V: "V",
    W: "W",
    X: "X",
    Y: "Y",
    Z: "2",
  };

  let result = "";
  for (char of str) {
    char !== " " ? (result += leetspeak[char]) : (result += " ");
  }

  return result;
};
