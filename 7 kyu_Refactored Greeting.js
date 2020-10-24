// https://www.codewars.com/kata/5121303128ef4b495f000001

class Person {
  constructor(myName) {
    this.name = myName;
  }
  greet(yourName) {
    return `Hello ${yourName}, my name is ${this.name}`;
  }
}
