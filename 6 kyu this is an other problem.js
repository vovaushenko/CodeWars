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
