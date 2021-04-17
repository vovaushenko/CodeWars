class namedOne {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(fullName) {
    if (/ /.test(fullName)) {
      [this.firstName, this.lastName] = fullName.split(' ');
    }
  }
}

let nameOne = new namedOne('Naomi', 'Wang');

console.log(nameOne);
nameOne.firstName = 'Vasia';
console.log(nameOne);
console.log(nameOne.fullName);

nameOne.fullName = 'Alex Pupkin';
console.log(nameOne);
