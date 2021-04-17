class OnceNamedOne {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let nameOne = new OnceNamedOne('Naomi', 'Wang');
console.log(nameOne);

nameOne.firstName = 'Vasia';
console.log(nameOne);
console.log(nameOne.fullName);
